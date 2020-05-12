/*
Challenge #5
Write a function that returns the lowest of two given numbers if both numbers are even, but returns the highest if one or both numbers are odd

Ie:
lesser_of_two_givens(2,4) --> 2
lesser_of_two_givens(2,5) --> 5

If number is even and higher than 6, return the number. If not, return "number's even but lesser than 6"
If number is odd return 
*/

function lowest (num) {
    
    if (num%2==0 > 6)
        return num;
    else if(num%2==0 > 6)
        return "Number is lower than 6";
    else if (num < 6)
        return num;
    else
        return "Number is higher than 6"
}

console.log(lowest(2));
console.log(lowest(1));

function otherLowest (a, b) {
    if (a%2==0 && b%2==0)
        if (a < b)
            return a;
        else
            return b;
    else
        if (a < b)
             return b;
        else
            return a;
}

console.log(otherLowest(6, 4));
console.log(otherLowest(1, 6));
console.log(otherLowest(1, 5));