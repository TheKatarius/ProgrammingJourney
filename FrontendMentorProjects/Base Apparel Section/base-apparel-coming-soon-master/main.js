// /* only when bad email or empty input */
// .email-form-input:focus {
// 	border: 2px solid red;
// }

const htmlForm = document.querySelector("#mainForm");
const inputEmail = document.querySelector(".email-form-input");
const arrowImage = document.querySelector(".submit-img-figure");
const iconErrorFigure = document.querySelector(".icon-error-figure");
const errorMessage = document.querySelector(".error-message");

function isValidEmail(email) {
	// Simple regex pattern for email validation
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return regex.test(email);
}

arrowImage.addEventListener("click", () => {
	validateAndProcessForm();
});

function validateAndProcessForm() {
	let email = inputEmail.value;
	if (email && isValidEmail(email)) {
		inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
		iconErrorFigure.style.display = "none";
		errorMessage.style.display = "none";
	} else {
		inputEmail.style.border = "2px solid hsl(0, 93%, 68%)";
		iconErrorFigure.style.display = "block";
		errorMessage.style.display = "inline";
	}
}

// What if user clicks "enter", not the arrowImg
inputEmail.addEventListener("keydown", (event) => {
	// User click enter key
	if (event.keyCode === 13) {
		event.preventDefault(); // prevent submit button default settings
		arrowImage.click();
	}
});
