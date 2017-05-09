document.addEventListener("DOMContentLoaded", function () {

    // SLIDER
    var prevImg = document.querySelector("#arrowLeft");
    var nextImg = document.querySelector("#arrowRight");
    var chairs = document.querySelector("#slide_chair");

    var imgCount = 1;
    //IMAGE COUNTER
    function roll() {
        if (imgCount < 1) {
            imgCount = 3;
        } else if (imgCount > 3) {
            imgCount = 1;
        }
    }
    //IMAGE SELECTOR
    function changeImg() {
        if (imgCount == 1) {
            chairs.src = "images/black_chair.png";
        } else if (imgCount == 2) {
            chairs.src = "images/red_chair.png";
        } else if (imgCount == 3) {
            chairs.src = "images/orange_chair.png";
        }
    }

    function change_roll() {
        changeImg();
        roll();
    }

    function prev() {
        imgCount -= 1;
        change_roll();
    }

    function next() {
        imgCount += 1;
        change_roll();
    }

    prevImg.addEventListener("click", prev);
    nextImg.addEventListener("click", next);
});

var form = document.querySelector("form");
var email = document.getElementById("email");
var text = document.getElementById("text");
var agree = document.getElementById("transport");
var errorDiv = document.querySelector(".error");
var successDiv = document.querySelector(".success");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formValidation = true;
    var allErrors = [];
    errorDiv.innerText = "";

    var name = document.getElementById("name").value;

    if (name.length >= 3) {
        console.log("Poprawna ilość znaków imienia");
    } else {
        allErrors.push("Twoje imię powinno zawierać przynajmniej 3 znaki");
        formValidation = false;
    }

    if ((email.value.indexOf("@") >= 1) && (email.value.length >= 3) && (email.value.indexOf("@") < (email.value.length - 1))) {
        console.log("Poprawny adres e-mail");
    } else if (email.value.indexOf("@") === 0) {
        allErrors.push("Niepoprawny adres e-mail, wpisz nazwę przed '@'");
        formValidation = false;
    } else if ((email.value.indexOf("@") >= 1) && (email.value.indexOf("@") === email.value.length - 1)) {
        allErrors.push("Niepoprawny adres e-mail, wpisz nazwę po '@'");
        formValidation = false;
    } else {
        allErrors.push("Brak '@' w adresie email");
        formValidation = false;
    }

    var text = document.getElementById("text").value;
    if (text.length >= 1) {
        console.log("Poprawna wiadomość");
    } else {
        allErrors.push("Pustych wiadomości nie czytamy.");
        formValidation = false;
    }

    if (agree.checked) {
        console.log("Zgoda na przetwarzanie danych");
    } else {
        allErrors.push("Bez zgody na przetwarzanie danych osobowych, nie jesteśmy w stanie odpowiedzieć na twoje pytania.");
        formValidation = false;
    }

    if (formValidation) {
        successDiv.innerText = "Spodziewaj się odpowiedzi jeszcze dziś!";
        setTimeout(function() {
            form.submit();
        }, 3000);
    } else {
        for (var i = 0; i < allErrors.length; i++) {
            var p = document.createElement("p");

            p.innerText = allErrors[i];
            errorDiv.appendChild(p);
        }
    }

});
