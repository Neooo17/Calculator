const screen = document.querySelector(".screen");

let expression = "";

const buttons = document.querySelectorAll(".calc-button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const buttonText = button.textContent;

        if (buttonText === "DEL") {
            expression = expression.slice(0, -1);
        } else if (buttonText === "RESET") {
            expression = "";
            screen.textContent = "0";
        } else if (buttonText === "=") {
            try {
                // Replace 'x' with '*'
                const result = math.evaluate(expression.replace(/×/g, '*'));
                expression = result.toString();
            } catch (error) {
                expression = "Error";
            }
        } else {
            expression += buttonText;
        }
        screen.textContent = expression || "0";
        // console.log(expression);
    })
})



// Theme change functionality

const slider = document.querySelector(".slider");
const body = document.querySelector("body");

slider.addEventListener("input", function () {
    // console.log(this.value);
    const themeValue = this.value;
    if (themeValue === '2') {
        body.classList.add("theme2");
        body.classList.remove("theme3");
    } else if (themeValue === '3') {
        body.classList.add("theme3");
        body.classList.remove("theme2");
    } else if (themeValue === '1') {
        body.classList.remove("theme2");
        body.classList.remove("theme3");
    }
})




