document.addEventListener("DOMContentLoaded", function (event) {

    var previousImg = document.getElementById("arrowLeft");
    var nextImg = document.getElementById("arrowRight");
    var chairs = document.querySelector(".slide_chair");

    var imgIndex = 0;

    function roll() {
        if (imgIndex < 0) {
            imgIndex = 3;
        } else if (imgIndex > 3) {
            imgIndex = 0;
        }
    }

    function changeImg() {
        if (imgIndex === 1) {
            chairs.src = "images/black_chair.png";
        } else if (imgIndex === 2) {
            chairs.src = "images/wood_chair.png";
        } else if (imgIndex === 3) {
            chairs.src = "images/white_chair.png";
        }
    }

    function change_roll() {
        roll();
        changeImg();
    }

    function prev() {
        imgIndex--;
        change_roll();
    }

    function next() {
        imgIndex++;
        change_roll();
    }

    previousImg.addEventListener("click", prev());
    nextImg.addEventListener("click", next());
});
