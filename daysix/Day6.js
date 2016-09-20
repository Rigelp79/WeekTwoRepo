  //Problem 1
console.log("Problem 1");
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var index = numArray.indexOf(27);
console.log(index);
var index2;
for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] == 27) index2 = i;
}
console.log(index2);

//Problem 2
console.log("Problem 2");
console.log(numArray.reduce((a,b) => a+b));
var sum = 0;
for(var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}
console.log(sum);
var total = 0;
for(i in numArray) {
    
    total += numArray[i];
}
console.log(total);

console.log("Problem 3");
var ary = [1,2,3,4,5,6,7,8,9,10];
ary.pop();
console.log(ary);
var ary2 = [];
for(var i = 1; i <= 10; i++) {
    ary2[i-1] = i;
}
ary2.splice(9 /*Index to delete*/,1 /*Items to delete*/);
console.log(ary2);


console.log("Problem 4");
var testNoMoreThan25 = function(a,b) {
    //return (a+b <= 25);
    var sum = a + b;
    if(sum <= 25) {
        return true;
    } else {
        return false;
    }
}
console.log("test(13,4) : " + testNoMoreThan25(13,4));
console.log("test(13,12): " + testNoMoreThan25(13,12));
console.log("test(13,35): " + testNoMoreThan25(13,35));

console.log("Problem 5");
/* var combineStrings = function(a, b) {
} */
function combineStrings(a, b) {
    var s = a + b;
    if(s.length > 12) {
        return "Error, string too long";
    } /*else {
        return s;
    } */
    return s;
}
console.log("combine(foo,bar): " + combineStrings("foo", "bar"));
console.log("combine(webdevfoundations,workspace): " + combineStrings("webdevfoundations", "workspace"));

console.log("Problem 6");

