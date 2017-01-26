# util.leader [![Build Status](https://travis-ci.org/jmquigley/util.leader.svg?branch=master)](https://travis-ci.org/jmquigley/util.leader) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![NPM](https://img.shields.io/badge/npm-v0.0.9-blue.svg)](https://www.npmjs.com/package/util.leader)

> Writes a leader/banner to the given logger

This is a devops utility that prints *banner* information before tasks are executed.  It makes it easier to see each section from a build log.

## Installation

To install as a global package and cli:
```
$ npm install --global util.leader
```

To install as a development dependency with cli:
```
$ npm install --save-dev util.leader
```

## Example Usage

    const leader = require('util.leader');
    leader('This is a test leader');
   
An example of the output is:

    >
    >
    > *********************
    > This is a test leader
    > *********************
    >

Note that the `>` will NOT be printed with the default output.  The default is to print two blank lines before the message and one blank line after.  This behaviro can be changed.  Once installed this can also be used from the command line:

    leader This is a test leader
 
    OR
    
    leader "This is a test leader"

This would print the same sample message above.

## Configuration

The output for the leader can be changed with options to the `leader` function:
    
    leader("A message", {
        chevron: '*',
        log: console.log,
        leadingLines: 2,
        trailingLines: 1
    })


#### options

##### chevron

Type: `string`  
Default: `'*'`

The character used to draw the over/under line.

##### log

Type: `object`  
Default: `console.log`

Allows one to change the default logger facility.


##### leadingLines

Type: `number`  
Default: `2`

The number of blank lines in front of the banner message


##### trailingLines

Type: `number`  
Default: `1`

The number of blank lines after the banner message
