#!/usr/bin/env node

import { Command } from "commander";
import input from "@inquirer/input";
import chalk from "chalk";

const program = new Command();

const isValidHex = (color: string) => {
  if (color.length === 6) {
    return /^([0-9A-Fa-f]{6})$/.test(color);
  }
  return /^#([0-9A-Fa-f]{6})$/.test(color);
};

const inputColor = (color: string) => {
  if (!color) {
    input({
      message: "Enter color in hex format:",
      required: true,
    }).then((color) => {
      displayColorText(color);
    });
  } else {
    displayColorText(color);
  }
};

const displayColorText = (color: string) => {
  if (!isValidHex(color)) {
    console.error(chalk.red("Invalid HEX color. Use the format: #RRGGBB"));
    process.exit(1);
  }

  const colorCode = color.padStart(6, "#");

  const bar = chalk.hex(colorCode)("█".repeat(30));
  console.log(bar);

  // console.log(chalk.hex(colorCode)("Hello World!"));
};

// Set up CLI with Commander.js
program
  .version("1.0.0")
  .description("Display color bar based on color code input")
  .argument(
    "[hex]",
    '[Optional] Color code in hex format. Wrap text in quote if provide hash symbol. e.g., "#FF5733" or FF5733'
  )
  .action(inputColor);

program.parse(process.argv);
