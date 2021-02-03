#!/usr/bin/env node
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var args = process.argv.slice(2);
if (args && args.length) {
    var ls = child_process_1.spawn('npm', __spreadArrays(['run'], args));
    ls.stdout.on('data', function (data) {
        console.log("" + data);
    });
    ls.stderr.on('data', function (data) {
        console.error("stderr: " + data);
    });
    ls.on('close', function (code) {
        console.log("child process exited with code " + code);
    });
}
// const output = arguments.reduce((output, currentArg) => {
//     output = output + ' ' + currentArg;
//     return output;
// },'');
