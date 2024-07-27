"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    var isTrue = false;
    if (input === true){
        isTrue = true;
    }
    return isTrue;
}

function isFalse(input){
    var isFalse = false;
    if (input === false){
        isFalse = true;
    }
    return isFalse;
} 

function not(input){
    return !input;
}

function addOne(x){
    x = Number(x);
    return x += 1;
}

function isEven(x){
    return x % 2 === 0 || x == 0 ? true : false;
}

function isIdentical(x, y){
    return x === y ? true : false;
}

function isEqual(x,y){
    if (x == y){
        return true;
    } else {
        return false;
    }
}

function or(x,y){
    return x || y;
}

function and(x,y){
    return x && y;
}

function isString(x){
    if (typeof x == "string"){
        return true;
    } else {
        return false;
    }
}

function concat(x,y){
    if (isString(x) == true && isString(y) == true){
        return x + y;
    } else if (isNaN(x) == false && isNaN(y) == false){
        return x.toString() + y.toString();
    }
}




