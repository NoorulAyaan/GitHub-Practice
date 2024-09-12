//document.getElementById('demo').innerHTML = typeof prompt()

// let a = prompt("Hey whats your age")
// document.getElementById("demo1").innerHTML = typeof prompt(a)

// let a = prompt("Hey what's your age")
// a = Number.parseInt(a)  //parseint() converts a string into a number
// document.getElementById("demo").innerHTML = typeof a


let a = prompt("Hey what's your age")
a = Number.parseInt(a)  //parseint() converts a string into a number

if (a < 33) {
    // alert("This is a valid age")
    document.getElementById("demo").innerHTML = "You are fail";
}
else if (a > 60 && a < 70){
    document.getElementById("demo").innerHTML = "You have scored B grade";
}
else if(a > 75 && a < 80){
    document.getElementById("demo").innerHTML = "You have scored A- grade"
}
else if(a <= 100 && a > 80){
    document.getElementById("demo").innerHTML = "You have A+ grade";
}
else{
    document.getElementById("demo").innerHTML = "Invalid number";  
}
