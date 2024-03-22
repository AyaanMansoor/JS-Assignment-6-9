
//q2
//--a: This decrements the value of a before using it in any operation. So, a becomes 1 after this operation.

//--a - --b: Here, a has already been decremented to 1 in the previous step. Now, b is decremented before its value is used in any operation. So, b becomes 0. The expression becomes 1 - 0, which equals 1.

//--a - --b + ++b: a has already been decremented to 1, and b has been decremented to 0. Now, b is incremented before its value is used in any operation. So, b becomes 1. The expression becomes 1 - 0 + 1, which equals 2.

//--a - --b + ++b + b--: a has already been decremented to 1, b has been decremented to 0, and then incremented to 1. Now, b-- means the current value of b (which is 1) is used first, and then it's decremented. So, the expression becomes 1 - 0 + 1 + 1, which equals 3.

//Thus, the final values are:

//a: 1
//b: 0
//result: 3






//q4
// let userInput = +prompt("Enter any number");
// document.write(userInput + "x" + "1" + "=" + userInput*1 + "<br>")
// document.write(userInput + "x" + "2" + "=" + userInput*2 + "<br>")
// document.write(userInput + "x" + "3" + "=" + userInput*3 + "<br>")
// document.write(userInput + "x" + "4" + "=" + userInput*4 + "<br>")
// document.write(userInput + "x" + "5" + "=" + userInput*5 + "<br>")
// document.write(userInput + "x" + "6" + "=" + userInput*6 + "<br>")
// document.write(userInput + "x" + "7" + "=" + userInput*7 + "<br>")
// document.write(userInput + "x" + "8" + "=" + userInput*8 + "<br>")
// document.write(userInput + "x" + "9" + "=" + userInput*9 + "<br>")
// document.write(userInput + "x" + "10" + "=" + userInput*10 + "<br>")
// document.write(userInput + "x" + "11" + "=" + userInput*11 + "<br>")
// document.write(userInput + "x" + "12" + "=" + userInput*12 + "<br>")

//Q5
// let userName = prompt("Enter Your Name")
// alert("Hello," + userName +" " + "Welcome to my website") 