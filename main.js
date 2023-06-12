const mainContainer = document.querySelector(".container-principal");
const secondContainer = document.querySelector(".container-second");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratingValueDisplay = document.getElementById("rating-value-display");

let selectedRating = 0;

// Evento de clique nos botões de classificação
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    selectedRating = parseInt(button.getAttribute("data-rating"));
    ratingValueDisplay.textContent = selectedRating.toString();
    secondContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
  });
});

// Evento de clique no botão "Rate Again"
rateAgain.addEventListener("click", () => {
  mainContainer.classList.remove("hidden");
  secondContainer.classList.add("hidden");
  ratingValueDisplay.textContent = "";
  selectedRating = 0;
});

// Evento de clique no botão "Submit"
submitButton.addEventListener("click", () => {
  secondContainer.classList.add("hidden");
});
