document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Знаходимо форму
    const submitButton = document.getElementById("MyButton"); // Знаходимо кнопку submit

    function checkInputs() {
        let allFilled = true;
        form.querySelectorAll("input").forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });


        submitButton.disabled = !allFilled;
    }


    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", checkInputs);
    });


    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігаємо стандартному сабміту

        if (!submitButton.disabled) {
            window.location.href = 'index.html';
        }
    });


    checkInputs();
});


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.opacity = "0"; // Плавне зникнення
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none"; // Прибираємо з DOM
        }, 500);
    }, 500);
});