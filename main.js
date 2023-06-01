const mainContainer = document.querySelector(".container-principal");
const secondContainer = document.querySelector(".container-secundario")
const submitButton = document.querySelector(".submit-rating")
const rateAgain = document.querySelector(".rate-again")

submitButton = addEventListener("click", () => {
    mainContainer.style.display = "none"
    secondContainer.classList.remove("hidden")

})

rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block"
    secondContainer.classList.add("hidden");
})