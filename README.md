# util.leader [![Build Status](https://travis-ci.org/jmquigley/util.leader.svg?branch=master)](https://travis-ci.org/jmquigley/util.leader)

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

Once installed this can also be used from the command line:

    leader This is a test leader
    
This would print the same sample message above.
