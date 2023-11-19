


var captcha;
function generate() {
 
    // Clear old input
    document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
function checkEmpty() {
    if (!document.getElementById("submit").value)
{
    alert('Пустой вввод');
}
}
function printmsg() {
    var sh_h = document.getElementById('check-c');
    var firstCaptcha=document.getElementById('image');
    var firstCaptchainput=document.getElementById('user-input');
    var firstCaptchaBTN=document.getElementById('btn');
    var LoginBTN=document.getElementById('login-btn');


    const usr_input = document
        .getElementById("submit").value;
    if (!document.getElementById("submit").value)
    {
        alert('Пустой вввод');
    }
    // Check whether the input is equal
    // to generated captcha or not
while (true) {
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "Вы не робот";
        generate();
    LoginBTN.style.opacity = "1";
    LoginBTN.style.cursor = "pointer";
        return false;
    }
    else if(usr_input != captcha.innerHTML){
        var s = document.getElementById("key")
        .innerHTML = "Раз уж вы робот, посчитайте сумму чисел";
        sh_h.classList.add('show-block');
        firstCaptcha.classList.add('remove-block')
        firstCaptchainput.classList.add('remove-block')
        firstCaptchaBTN.classList.add('remove-block')
        return false;
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "Вы робот";
        generate();
        return false;
    }
}

}


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        var input = prompt("Enter a number:");
        var number = parseFloat(input);
        if (!isNaN(number)) {
            this.value += number;
            document.getElementById('current-value').textContent = this.value;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    };
}

var startingValue = 10; // Example starting value
var accumulator = new Accumulator(startingValue);

document.getElementById('starting-value').textContent = startingValue;

document.getElementById('read-btn').addEventListener('click', function() {
    accumulator.read();
});



function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    } else {
        return str;
    }
}


var originalString = "This is a very long text that needs to be truncated.";
var maxLength = 20;
var truncatedString = truncate(originalString, maxLength);
console.log(truncatedString); // Output: "This is a very lon…"