document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded"); // for testing

    const hireBtn = document.getElementById("hireBtn");

    console.log("Button found:", hireBtn); // for testing

    if (hireBtn) {
        hireBtn.addEventListener("click", function () {
            alert("Thank you for visiting my portfolio!");
        });
    } else {
        console.log("Button NOT found!");
    }

});