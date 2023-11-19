let input_val=document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2= document.getElementById('num2');

const myBtn=document.getElementById('btn1');

num1.innerText=Math.floor(Math.random()*10);
num2.innerText=Math.floor(Math.random()*10);

let number1=num1.innerText;
let number2=num2.innerText;

myBtn.addEventListener("click", ()=>{

    let sum_result = parseInt(number1)+parseInt(number2);
    var LoginBTN=document.getElementById('login-btn');
    
    let res = parseInt(input_val.value)
    if (!document.getElementById("input_val").value)
    {
        alert('Пустой вввод');
    }
    if(res==sum_result){
        var s = document.getElementById("key")
        .innerHTML = "Вы не робот <3";
        LoginBTN.style.opacity = "1";
        LoginBTN.style.cursor = "pointer";
    
    }else{
        var s = document.getElementById("key")
        .innerHTML = "Вы робот :(";
    }
});