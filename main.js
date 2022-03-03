const compiterChoiceDisplay = document.getElementById("computer-choice");
const userChoiseDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const btns = document.querySelectorAll("button");

let userChoise;
let compiterChoice;
let result
btns.forEach(btns => btns.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;
    genrateComputerchoise();
    getResulit();
}));
function genrateComputerchoise() {
    const ranNum = Math.floor(Math.random() * 3) * 1;
    console.log(ranNum);
    if (ranNum === 1) {
        compiterChoice = "حجرة"
    }
    if (ranNum === 2) {
        compiterChoice = "ورقة"
    }
    if (ranNum === 3) {
        compiterChoice = "مقص"
    }
    compiterChoiceDisplay.innerHTML = compiterChoice;

}

function getResulit() {
    if (compiterChoice === userChoise) {
        result= `it is draw`
    }
    if (compiterChoice === "حجرة"&& userChoise=== "ورقة") {
        result= `You win 🎉`
    }
    if (compiterChoice === "حجرة" && userChoise === "مقص") {
      result = `You lose 😢`;
    }
    if (compiterChoice === "ورقة" && userChoise === "مقص") {
      result = `You win 🎉`;
    }
    if (compiterChoice === "ورقة" && userChoise === "حجرة") {
      result = `You lose 😢`;
    }
    if (compiterChoice === "مقص" && userChoise === "حجرة") {
      result = `You win 🎉`;
    }
    if (compiterChoice === "مقص" && userChoise === "ورقة") {
      result = `You lose 😢`;
    }
    resultDisplay.innerHTML = result;
}