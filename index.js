/*
Challenge #5
Write a function that returns the lowest of two given numbers if both numbers are even, 
but returns the highest if one or both numbers are odd

Ie:
lesser_of_two_givens(2,4) --> 2
lesser_of_two_givens(2,5) --> 5
*/

function even(num) {

    if (num % 2 == 0)
        return "Even"
    else
        return "Odd"
}

function otherLowest(a, b) {
    if (a % 2 == 0 && b % 2 == 0)
        if (a < b)
            return a
        else
            return b
    else
        if (a < b)
            return b
        else
            return a
}

/*
Challenge #6
Write a function takes a two-word string and returns True if both words begin with same letter

Ie:
animal_crackers('Levelheaded Llama') --> True
animal_crackers('Crazy Kangaroo') --> False
*/

function twoWords(words) {

    let [a, b] = words.split(" "); // You need to split the words first

    if (a[0] == b[0]) // Almost, this one is missing
        return true
    else
        return false
}

/*
Challenge #7
Given two integers, return True if the sum of the integers is 20 or if one of the integers is 20. If not, return False.

Ie:
makes_twenty(20,10) --> True
makes_twenty(12,8) --> True
makes_twenty(2,3) --> False
*/

function sum20 (a, b) {
    if (a == 20 || b == 20 || a + b == 20)
        return true
    else
        return false
}


/*
Challenge #8
Write a function that capitalizes the first and fourth letters of a name.

Ie: 
old_macdonald('macdonald') --> MacDonald
*/

function capitalise (str) {

    return str.toUpperCase()
}

console.log(capitalise("MacDonalds"));