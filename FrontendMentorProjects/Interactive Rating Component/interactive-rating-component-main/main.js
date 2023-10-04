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

		// Remember option which user chose
		localStorage.setItem("Value of Clicked Option", event.target.textContent);
	});
});

submitButton.addEventListener("click", () => {
	const optionValue = localStorage.getItem("Value of Clicked Option");

	// Change on ThankU component
	mainCard.style.display = "none";
	thankuMainCard.style.display = "flex";
	thankuMainCard.style.alignItems = "center";
	thankuMainCard.style.flexDirection = "column";

	// Display option that user chose "you selected {option} out of 5"
	const tempString =
		chosenOptionString.textContent.slice(0, 13) +
		optionValue +
		" " +
		chosenOptionString.textContent.slice(13);
	chosenOptionString.textContent = tempString;
});
