# README

## Overview

The `index.js` file contains a simple script that demonstrates the conversion of a nonce to a subaccount and the conversion of a hexadecimal string to a blob.

## Classes and Functions

### Subaccount

This class represents a subaccount. It takes a byte array of length 32 in its constructor and stores it as a `Uint8Array`. It has a method `toHexString` which converts the byte array to a hexadecimal string.

### convertToSubaccount(nonce)

This function takes a nonce (a number) and converts it to a subaccount. It does this by creating a 32-byte array, setting the last 4 bytes to the nonce, and then creating a `Subaccount` object from this array. It returns the hexadecimal string representation of the subaccount.

### HexStringToBlob(hexString)

This function takes a 64-character hexadecimal string and converts it to a blob. It does this by splitting the string into pairs of characters, formatting each pair, and then joining them all together into a single string.

## Usage

The script is executed immediately upon loading. It demonstrates the conversion of a nonce to a subaccount by creating a nonce, converting it to a subaccount, and then logging the hexadecimal string representation of the subaccount.

There is also commented-out code that demonstrates the conversion of a hexadecimal string to a blob. To use this, uncomment the code, replace the `hexString` variable with your own 64-character hexadecimal string, and then run the script.