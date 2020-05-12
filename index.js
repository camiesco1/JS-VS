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
        return true;
    else
        return false;
}