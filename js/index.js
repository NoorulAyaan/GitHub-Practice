// Chapter 2
// Conditional Expressions

//document.getElementById('demo').innerHTML = typeof prompt()

// let a = prompt("Hey whats your age")
// document.getElementById("demo1").innerHTML = typeof prompt(a)

// let a = prompt("Hey what's your age")
// a = Number.parseInt(a)  //parseint() converts a string into a number
// document.getElementById("demo").innerHTML = typeof a


// let a = prompt("Hey what's your age")
// a = Number.parseInt(a)  //parseint() converts a string into a number

// if (a < 33) {
//     // alert("This is a valid age")
//     document.getElementById("demo").innerHTML = "You are fail";
// }
// else if (a > 60 && a < 70){
//     document.getElementById("demo").innerHTML = "You have scored B grade";
// }
// else if(a > 75 && a < 80){
//     document.getElementById("demo").innerHTML = "You have scored A- grade"
// }
// else if(a <= 100 && a > 80){
//     document.getElementById("demo").innerHTML = "You have A+ grade";
// }
// else{
//     document.getElementById("demo").innerHTML = "Invalid number";  
// }


// Ternary operator
// let a = prompt("Hey what's your age")
// a = Number.parseInt(a)  //parseint() converts a string into a number

// document.getElementById("demo2").innerHTML = "You are " + (a < 33 ? "Fail" : "Pass");
// If a < 33 print fail otherwise print pass


function myFunction(){
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Satureday"
    }
    onclick = document.getElementById("demo").innerHTML = "Today is " + day
}


// Test for chapter 2
function myFunction1(){
    let Age = prompt("Hey what's your age?");
    Age = Number.parseInt(Age)
    switch(Age){
        case 12:
            Age = "You are born in 2012"
            break;

        case 13:
            Age = "You are born in 2011";
            break;

        case 14:
            Age = "You are born in 2010";
            break;

        case 15:
            Age = "You are born in 2009"
            break;

        case 16:
            Age = "You are born in 2008"
            break;

        case 17:
            Age = "You are born in 2007"
            break;

        case 18:
            Age = "You are born in 2006"
            break;
        default:
            if(Age > 18){
                Age = "You are born before 2006"
            }
            else{
                Age = "Your input is invalid "
            }
    }
    onclick = document.getElementById("demo1").innerHTML = Age
}


// Chapter 3
// Loops


    text = "";
    for (i = 0; i < 10; i++){
        text +="[" +  i + "]"
    }
    document.getElementById("Demo3").innerHTML = text;


function myFunction2(){
    sum = 0;
    let n = prompt("Enter a number")
    n = Number.parseInt(n)
    for(i = 0; i < n; i++){
        sum += i+1;
    }
    onclick = document.getElementById("demo2").innerHTML = 
    "The sum of first " + n + " numbers is " + sum;
}

// function myFunction3(){
//     let sum = "";
//     n = prompt("Enter a number:")
//     n = Number.parseInt(n)
//     for (i = 0; i < n; i++){
//         sum += i+1 + "<br>"
//     }
//     document.getElementById("demo3").innerHTML = sum;
// }

function myFunction3(){
    let sum = ""
    let n = prompt("Enter a number")
    n = Number.parseInt(n)
    for (i = 0; i < n; i++){
        sum += i+1 + "<br>"
    }
    onclick = document.getElementById("demo3").innerHTML = 
    "The sum of first " + n + " numbers is " + "<br>" + sum
}


// For in loop

// function myFunction4(){
//     let obj = {
//         Ayan: 90,
//         Israr: 87,
//         Fahad: 89,
//         Iqrar: 93
//     }
//     for(let a in obj){
//         document.getElementById("demo4").innerHTML +=
//         "Marks of " + a + " Are " + obj[a] + "<br>"
//     }
//     document.getElementById("demo4").innerHTML = ""
// }


// For of loop

// function myFunction4(){
//     let n = prompt("Enter a name")
//     document.getElementById("demo4").innerHTML = ""
//     for(let a of n){
//         document.getElementById("demo4").innerHTML += a + "<br>"
//     }
// }
