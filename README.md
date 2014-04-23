# madlib-console [![Build Status](https://travis-ci.org/Qwerios/madlib-console.svg?branch=master)](https://travis-ci.org/Qwerios/madlib-console)
The debug console wrapper for madLib based applications. Will prevent errors when console isn't available.


## acknowledgments
The Marviq Application Development library (aka madlib) was developed by me when I was working at Marviq. They were cool enough to let me publish it using my personal github account instead of the company account. We decided to open source it for our mutual benefit and to ensure future updates should I decide to leave the company.


## philosophy
JavaScript is the language of the web. Wouldn't it be nice if we could stop having to rewrite (most) of our code for all those web connected platforms running on JavaScript? That is what madLib hopes to achieve. The focus of madLib is to have the same old boring stuff ready made for multiple platforms. Write your core application logic once using modules and never worry about the basics stuff again. Basics including XHR, XML, JSON, host mappings, settings, storage, etcetera. The idea is to use the tried and proven frameworks where available and use madlib based modules as the missing link.

Currently madLib is focused on supporting the following platforms:

* Web browsers (IE6+, Chrome, Firefox, Opera)
* Appcelerator/Titanium
* PhoneGap
* NodeJS


## installation
```bash
$ npm install madlib-console --save
```

## usage
```javascript
console = require( "madlib-console" );

// Just use the debug console commands as usual
//
console.log( "debug log", foo, bar );

console.warn( "somethings wrog", foo, bar );

console.error( "danger Will Robinson!", foo, bar );

// Setting the logLevel to anything other then 'DEBUG' will suppress calls to .log
//
console.logLevel = "INFO";
```