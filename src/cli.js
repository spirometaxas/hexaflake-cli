#!/usr/bin/env node
const hexaflake = require('./index.js');

const printUsage = function() {
    console.log('\nUsage:\n' + '  $ hexaflake-cli <n>\n' + '  $ hexaflake-cli <n> <size>\n');
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] && !isNaN(params[0]) && parseInt(params[0]) >= 0) {
        var n = parseInt(params[0]);
        var s = undefined;
        if (params[1]) {
            if (!isNaN(params[1]) && parseInt(params[1]) >= n) {
                s = parseInt(params[1]);
            } else {
                console.log('\n<size> should be a number greater than or equal to <n>');
                printUsage();
            }
        } else {
            s = n;
        }
        if (n !== undefined && s !== undefined) {
            console.log(hexaflake.create(n, s));
        }
    } else {
        console.log('\n<n> should be a number greater than or equal to 0');
        printUsage();
    }
} else {
    printUsage();
}