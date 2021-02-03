#!/usr/bin/env node

import { spawn } from "child_process";

const args = process.argv.slice(2);

spawn('npm', ['run', ...args ]);

// const output = arguments.reduce((output, currentArg) => {
//     output = output + ' ' + currentArg;

//     return output;
// },'');