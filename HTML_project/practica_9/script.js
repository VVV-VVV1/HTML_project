function checkRegistration() {
    var registrationInput = document.getElementById("registrationInput").value;
    var result = document.getElementById("result");

    if (registrationInput.toLowerCase() === "да") {
        result.innerHTML = "Круто!";
    } else {
        result.innerHTML = "Попробуй ещё раз";
    }

    return false;
}
var login = prompt("Введите логин: ");

if (login === "Админ") {
    var password = prompt("Введите пароль: ");

    if (password === "пароль") {
        alert("Здравствуйте!");
    } else if (password === null || password === "") {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login === null || login === "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}



document.querySelector("#like_button").onclick = function () {
    if (like_button.style.backgroundColor == 'white') {
        like_button.style.backgroundColor = 'red';
        like_button.style.color = 'white';

        const heart = document.querySelector(".love");
        heart.addEventListener("mousemove", (event) => {
            const xPos = event.offsetX;
            const yPos = event.offsetY;
            const spanEl = document.createElement("span");
            spanEl.style.left = xPos + "px";
            spanEl.style.top = yPos + "px";
            heart.appendChild(spanEl);

            if (like_button.style.backgroundColor == 'red') {
                spanEl.style.visibility = "visible";
            } else {
                spanEl.style.visibility = "hidden";
            }
        });

    } else {
        like_button.style.backgroundColor = 'white';
        like_button.style.color = 'black';
    }
};