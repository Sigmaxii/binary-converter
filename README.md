# Javascript Binary Converter
* This code is for educational purposes only. It is a simple utility to convert between decimal and binary numbers in JavaScript.

# Installation
### To install the required packages, run the following command in your terminal:

```cmd
npm install javascript-binary-converter readline
```
---
# Usage
* To start the code, run the following command in your terminal:

```cmd
node convert.js
```
or
```cmd
node convert2.js
```
> You will be prompted to enter a number to convert. Type in the number and press enter. The code will convert the number to binary and print the result to the console. To stop the program, type stop and press enter.

## Example:
```cmd
$ node convert.js

give me a nummber to convert: 10

10 = 1010

give me a nummber to convert: stop

stopped
```
---
# Difference between convert.js and convert2.js
> The only difference between `convert.js` and `convert2.js` is how the binary conversion is performed. `convert.js` uses the converter function from the `javascript-binary-converter` package. `convert2.js` creates a `new BinaryConverter` object and uses the `toInteger()` method to convert the number to binary.
> * Both methods produce the same result, but the `BinaryConverter` method is more flexible and can be used to convert between other bases, such as hexadecimal and octal.

