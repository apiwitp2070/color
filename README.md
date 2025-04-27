# Color Preview CLI Tool

A simple CLI tool that allows you to preview colors in your terminal by providing a color code.

<img width="578" alt="ภาพถ่ายหน้าจอ 2568-04-27 เวลา 15 13 17" src="https://github.com/user-attachments/assets/5986305d-c2a4-4a74-9340-a36ff8fe4d45" />

## Installation


### Option 1: Install Globally (Recommended)

1. Clone this repository and install dependencies

   ```bash
   git clone https://github.com/your-username/color-preview.git
   cd color-preview
   yarn
   ```

2. You can edit `index.ts` file to your liking and recompile it again with following command

   ```bash
   yarn tsc
   ```

   This will output index.js file in the same directory

   Or you can use the already provided `index.js` file in this repository for next step

3. You can simply call `index.js` file

   ```bash
   ./index.js
   ```

   Or make the CLI executable globally by putting it inside `/usr/local/bin`
   
   ```bash
   sudo mv dist/index.js /usr/local/bin/color # or any name you like
   sudo chmod +x /usr/local/bin/color
   ```

## How to use


1. Calling the command without anything will ask you to provide color code in hex format without `#` symbol
   ```bash
   color
   ```
2. You can also provide color code along with the command
   ```bash
   color FFFFFF
   ```
