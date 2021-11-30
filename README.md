# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tsun812/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(input1, input2)`: It takes two inputs of primitive types and return true if they are strictly equal, false if not.
* `assertArraysEqual(array1, array2)`: It takes two inputs of array types and return true if they are strictly equal, false if not.
* `assertObjectsEqual(object1, object2)`: It takes two inputs of object types and return true if they are strictly equal, false if not
* `countLetters(string1)`: It takes a string input and counts the occurence of each character in the strong, it returns an object with properties equal to each character in the string, and corresponding value equal to number of occurence of each character.
* `countOnly(array1, object1)`: Its inputs containing an array of things to count, an evaluating object with property equal to the name of things to count, each property assign to boolean value indicating whether to count the property. *It only counts thing that appears both in the array and in evaluating object that has a true value*, the funciton returns an object with things that passing the counting criteria with number of occurence.
* `eqArrays(arr1, arr2)`: It takes two array inputs arr1 and arr2, and returns true if they are strictly equal, false otherwise.
* `eqObjects(obj1, obj2)`: It takes two object inputs obj1 and obj2, and returns true if they are strictly equal, false otherwise.
* `head(arr1)`: It takes an array arr1 as input, and returns the first element of the array.
* `middle(arr1)`: It takes an array arr1 as input, and return an array that contain the middle elements of input array. For input array that has length 0,1,2, function will return empty array. For input array that's of even length, it returns two middlest elements. For input array that's of odd length, it returns single middlest elements.
* `tail(arr1)`: It takes an array as input, and returns a new array which excludes the first element in the input array.
* `findKeyByValue(obj1, key1)`: It takes an object obj1 and a key key1 of primitive type as input, and returns the value of key1 appears in obj1 if existed.
*`letterPositions