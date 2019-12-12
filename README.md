# util.leader

> Writes a leader/banner to the given logger

[![build](https://github.com/jmquigley/util.leader/workflows/build/badge.svg)](https://github.com/jmquigley/util.leader/actions)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.leader.svg)](https://www.npmjs.com/package/util.leader)


This is a devops utility that prints *banner* information before tasks are executed.  It makes it easier to see each section from a build log.


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as a global package and cli:
```
$ yarn global add util.leader
```

To install as a development dependency with cli:
```
$ yarn add --dev util.leader
```

To build the app and run all tests:
```
$ yarn run all
```


## Example Usage

    import leader from 'util.leader';
    // import {leader} from 'util.leader';
    // const leader = require('util.leader').default;
    // const {leader} = require('util.leader');

    leader('This is a test leader');

An example of the output is:

    >
    >
    > *********************
    > This is a test leader
    > *********************
    >

Note that the `>` will NOT be printed with the default output.  The default is to print two blank lines before the message and one blank line after.  This behavior can be changed.  Once installed this can also be used from the command line:

```
leader This is a test leader
```

OR

```
leader "This is a test leader"
```

This would print the same sample message above.  The message to a leader can also span multiple lines

```
leader "Test message\nline 2\nline 3"
```

    >
    >
    > ************
    > Test message
    > line 2
    > line 3
    > ************
    >


## Configuration

The output for the leader can be changed with options to the `leader` function:

```
leader("A message", {
    chevron: '*',
    log: console.log,
    leadingLines: 2,
    trailingLines: 1
})
```

#### options

- `chevron {string} (default: '*')`: The character used to draw the over/under line.
- `log {object} (default: 'console.log')`: Allows one to change the default logger facility.
- `leadingLines {number}: (default: '2')`: The number of blank lines in front of the banner message
- `trailingLines {number}: (default: '1')`: The number of blank lines after the banner message
