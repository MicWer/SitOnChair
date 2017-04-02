document.addEventListener("DOMContentLoaded", function () {

    var prevImg = document.querySelector("#arrowLeft");
    var nextImg = document.querySelector("#arrowRight");
    var chairs = document.querySelector("#slide_chair");

    var imgCount = 0;

    function roll() {
        if (imgCount < 0) {
            imgCount = 3;
        } else if (imgCount > 3) {
            imgCount = 0;
        }
    }

    function changeImg() {
        if (imgCount === 1) {
            chairs.src = "images/black_chair.png";
        } else if (imgCount === 2) {
            chairs.src = "images/wood_chair.png";
        } else if (imgCount === 3) {
            chairs.src = "images/white_chair.png";
        }
    }

    function change_roll() {
        changeImg();
        roll();
        console.log(imgCount);
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
