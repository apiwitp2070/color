#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const input_1 = __importDefault(require("@inquirer/input"));
const chalk_1 = __importDefault(require("chalk"));
const program = new commander_1.Command();
const isValidHex = (color) => {
    if (color.length === 6) {
        return /^([0-9A-Fa-f]{6})$/.test(color);
    }
    return /^#([0-9A-Fa-f]{6})$/.test(color);
};
const inputColor = (color) => {
    if (!color) {
        (0, input_1.default)({
            message: "Enter color in hex format:",
            required: true,
        }).then((color) => {
            displayColorText(color);
        });
    }
    else {
        displayColorText(color);
    }
};
const displayColorText = (color) => {
    if (!isValidHex(color)) {
        console.error(chalk_1.default.red("Invalid HEX color. Use the format: #RRGGBB"));
        process.exit(1);
    }
    const colorCode = color.padStart(6, "#");
    const bar = chalk_1.default.hex(colorCode)("█".repeat(30));
    console.log(bar);
    // console.log(chalk.hex(colorCode)("Hello World!"));
};
// Set up CLI with Commander.js
program
    .version("1.0.0")
    .description("Display color bar based on color code input")
    .argument("[hex]", '[Optional] Color code in hex format. Wrap text in quote if provide hash symbol. e.g., "#FF5733" or FF5733')
    .action(inputColor);
program.parse(process.argv);
