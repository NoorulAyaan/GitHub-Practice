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



// For of loop

// function myFunction4(){
//     let n = prompt("Enter a name")
//     document.getElementById("demo4").innerHTML = ""
//     for(let a of n){
//         document.getElementById("demo4").innerHTML += a + "<br>"
//     }
// }


// For in loop

function myFunction4(){
    let obj = {
        Ayan: 90,
        Israr: 87,
        Fahad: 89,
        Iqrar: 93
    }
    document.getElementById("demo4").innerHTML = ""
    for(let a in obj){
        document.getElementById("demo4").innerHTML +=
        "Marks of " + a + " Are " + obj[a] + "<br>"
    }
}

// While Loop

// function myFunction5(){
//     let n = prompt("Enter a number")
//     n = Number.parseInt(n)
//     document.getElementById("demo5").innerHTML = ""
//     let index = 0;
//     while(index <= n){
//         document.getElementById("demo5").innerHTML += 
//         "Hello this is " + index + "<br>"
//         index = index + 1
//     }
// }
// While loop

function myFunction5(){
    let a = prompt("Enter a number")
    a = Number.parseInt(a)
    document.getElementById("demo5").innerHTML = ""
    let i = 0
    while(i <= a){
        document.getElementById("demo5").innerHTML += 
        "Hello this is " + i + "<br>"
        i++
    }
}

// Do whlie loop


function myFunction6(){
    let n = prompt("Enter a number")
    n = Number.parseInt(n)
    document.getElementById("demo6").innerHTML = ""
    let i = 0;
    do{
        document.getElementById("demo6").innerHTML += "This is " + i + "<br>"
        i = i+1
    }while(i <= n)
}


// Functions

// function onePlusTwo(a, b){
//     return 5 + (a * b)
// }
// function onePlusTwoThree(a, b, c){
//     return 5 + (a * b * c) 
// }
// let x = 3;
// let y = 4;
// let z = 5;

// document.getElementById("demo10").innerHTML = onePlusTwoThree(x, y,z)
// document.getElementById("demo7").innerHTML = 
// "The sum of x and y is: " + onePlusTwo(x , y);
// document.getElementById("demo8").innerHTML = 
// "The sum of y and z is: " + onePlusTwo(z , y);
// document.getElementById("demo9").innerHTML = 
// "The sum of z and x is: " + onePlusTwo(z , x);



// const Hello = (x, y) => {
//     return x + y
// }
// let t = 22
// let v = 24
// document.getElementById("demo11").innerHTML = 
// Hello(t, v)


//Chapter 3 Q1

// function myFunction7(){
//     let marks = {
//         Harry: 98,
//         Rohan: 70,
//         Akash: 7
//     }
//     document.getElementById("demo7").innerHTML = ""
//     for (i = 0; i < Object.keys(marks).length; i++){
//         //[Object.keys(marks)] will give all the keys inside the object
//         document.getElementById("demo7").innerHTML += 
//         "The marks of " + Object.keys(marks)[i] + " are: " +
//         marks[Object.keys(marks)[i]] + "<br>"
//         i = i++
        
//     }
// }


// Chapter 3 Q2

// let make = {
//     Harry: 98,
//     Rohan: 70,
//     Jaddu: 76,
//     Krunal: 89,
//     Akash: 7
// }
// document.getElementById("demo8").innerHTML = ""
// for (s in make){
//     document.getElementById("demo8").innerHTML += 
//     "Total marks of " + s + " are: " + make[s] + " marks" + "<br>"
// }

// Chapter 3 Q3

function myFunction7(){
    let t = 10;
    let p; 

    while(p != t){
        p = prompt("Enter a number")
        p = Number.parseInt(p)
        document.getElementById("demo7").innerHTML = 
        "You entered: " + p + "<br>"
    }
    document.getElementById("demo7").innerHTML += 
    "You have entered correct number"
}


// Chapter 3 Q4


function myFunction8() {
    return a + b + c + d + e / 5
}                          
let a = 3
let b = 5
let c = 2
let d = 8
let e = 6
document.getElementById("demo8").innerHTML = 
myFunction8(a, b, c, d, e)


// Strings

function myFunction9(){
    // let name = "Ayan"
    // document.getElementById("demo9").innerHTML = name.length

    let boy1 = "Pramood"
    let boy2 = "Nikhil"
    document.getElementById("demo9").innerHTML = 
    `${boy1} is friend of ${boy2}`
}


// function myFunction9(){
//     let fruits = 'Banana\'s'
//     document.getElementById("demo9").innerHTML = fruits
// }

function myFunction10(){
    let name = "ayan"
    document.getElementById("demo10").innerHTML = 
    name.toUpperCase()
    // document.getElementById("demo10").innerHTML = 
    // name.length
    // document.getElementById("demo10").innerHTML = 
    // name.toLowerCase()
    // document.getElementById("demo10").innerHTML = 
    // name.slice(1,2)
    document.getElementById("demo10").innerHTML = 
    name.replace("ay","Aya")
}

function myFunction11(){
    let name = "Ayan "
    let friend = "Khan"
    document.getElementById("demo11").innerHTML =
    name.concat(friend)
}
