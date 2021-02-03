#!/usr/bin/env node

import { spawn } from "child_process";

const args = process.argv.slice(2);

if (args && args.length) {
    const ls = spawn('npm', ['run', ...args]);

    ls.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}


// const output = arguments.reduce((output, currentArg) => {
//     output = output + ' ' + currentArg;

//     return output;
// },'');