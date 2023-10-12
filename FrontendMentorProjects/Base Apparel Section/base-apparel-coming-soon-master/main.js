// /* only when bad email or empty input */
// .email-form-input:focus {
// 	border: 2px solid red;
// }

const htmlForm = document.querySelector("#mainForm");
const inputEmail = document.querySelector(".email-form-input");
const arrowImage = document.querySelector(".submit-img-figure");
const iconErrorFigure = document.querySelector(".icon-error-figure");

arrowImage.addEventListener("click", () => {
	validateAndProcessForm();
});

function validateAndProcessForm() {
	let email = inputEmail.value;
	if (email && inputEmail.checkValidity()) {
		console.log("Everything is correct!");
	} else {
		inputEmail.style.border = "2px solid red";
		iconErrorFigure.style.display = "block";
	}
}
