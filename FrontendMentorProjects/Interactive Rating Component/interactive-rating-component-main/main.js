const ratingOptions = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");
const chosenOptionString = document.querySelector(".clicked-option-title");
const thankuMainCard = document.querySelector(".thanku-main-card");
const mainCard = document.querySelector(".main-card");

ratingOptions.forEach((option) => {
	option.addEventListener("click", (event) => {
		// Remove button-clicked from all options
		ratingOptions.forEach((btn) => {
			btn.classList.remove("button-clicked");
		});

		event.target.classList.add("button-clicked");
		localStorage.setItem("Value of Clicked Option", event.target.textContent);
	});
});

submitButton.addEventListener("click", () => {
	const optionValue = localStorage.getItem("Value of Clicked Option");
	mainCard.style.display = "none;";
	console.log();
});
