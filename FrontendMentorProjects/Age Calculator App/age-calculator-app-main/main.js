// Several tips
/*
    Modularization: Group related functionalities into separate functions or even separate modules. This makes the code more maintainable and easier to understand.
    Avoid Magic Numbers: Numbers like 0, 31, 12, 1900, and 2100 are called magic numbers. It's a good practice to replace them with named constants to make the code more readable.
    Use Ternary Operators: For simple conditional assignments, you can use the ternary operator to make the code more concise.
    Use CSS Classes for Styling: Instead of directly manipulating styles in JavaScript, toggle CSS classes. This keeps the styling separate from the logic.
    Event Delegation: Instead of attaching event listeners to each input, you can attach one to their parent and use event delegation.
*/

/*
However, if you try to use VALID_RANGES[DAY], JavaScript will look for a variable named DAY (not a string key), which doesn't exist in your code. This will throw a reference error.

If you want to use bracket notation, you'd need to provide the key as a string: VALID_RANGES['DAY'].

In summary:

    VALID_RANGES.DAY or VALID_RANGES['DAY'] will work.
    VALID_RANGES[DAY] will not work unless you have a variable named DAY defined elsewhere in your code.
*/

// create objects instead of using numbers for arrays numeration
const DATE_INPUTS = {
	DAY: 0,
	MONTH: 1,
	YEAR: 2,
};

const VALID_RANGES = {
	DAY: { min: 0, max: 31 },
	MONTH: { min: 0, max: 12 },
	YEAR: { min: 1900, max: 2100 },
};

const now = new Date();

const labelStrings = document.querySelectorAll(".label-string");
const dateInputs = document.querySelectorAll(".date-input");
const errorMessageElements = document.querySelectorAll(".error-message");
const arrowImgFigure = document.querySelector(".arrow-img-figure");
const setValues = document.querySelectorAll(".number-date-string");

// Check if the input date is before the current date
function checkDate() {
	const inputDate = new Date(
		dateInputs[DATE_INPUTS.YEAR].value,
		dateInputs[DATE_INPUTS.MONTH].value - 1, // month in Date objects is indexed from 0
		dateInputs[DATE_INPUTS.DAY].value
	);

	// Faster way to return true or false
	return inputDate < now;
	// if (inputDate < now) {
	// 	return true;
	// }
	// return false;
}

// Display error or not
function toggleErrorStyles(isError) {
	dateInputs.forEach((date) => {
		date.classList.toggle("error", isError);
	});
	labelStrings.forEach((label) => {
		label.classList.toggle("error", isError);
	});
}

// Validate the input based on the given criteria
function validateInput(input, errorMessageElement, minNumber, maxNumber) {
	// Check range of date, is input empty, is input integer, is date smaller than currentDate
	const isValid =
		(Number(input.value > minNumber) &&
			Number(input.value) <= maxNumber &&
			Number.isInteger(Number(input.value)) &&
			checkDate()) ||
		input.value.length === 0;

	toggleErrorStyles(!isValid);

	if (isValid) {
		// Reset to default styles
		errorMessageElement.style.visibility = "hidden";
	} else {
		// Indicate error
		errorMessageElement.style.visibility = "visible";
		errorMessageElement.textContent = "Must be a valid date";
	}
}

// EventListener - input
function checkValidation(input, errorMessageElements, minNumber, maxNumber) {
	input.addEventListener("input", () => {
		validateInput(input, errorMessageElements, minNumber, maxNumber);
	});
}

// Initialize validation for each input
// checkValidation(dateInputs[0], errorMessageElements[0], 0, 31);
// checkValidation(dateInputs[1], errorMessageElements[1], 0, 12);
// checkValidation(dateInputs[2], errorMessageElements[2], 1900, 2100);
// dont repeate function invokations, use below block of code instead
Object.keys(DATE_INPUTS).forEach((inputType, index) => {
	checkValidation(
		dateInputs[index],
		errorMessageElements[index],
		VALID_RANGES[inputType].min,
		VALID_RANGES[inputType].max
	);
});

// instead of adding styles, create classes and toggle between adding and removing them
// Handle empty input error
function setEmptyError(isEmpty, whichInput, errorMessageElement) {
	dateInputs[whichInput].classList.toggle("error");
	labelStrings[whichInput].classList.toggle("error");

	// If any of the input element is empty
	if (isEmpty) {
		errorMessageElement.textContent = "This field is required";
		errorMessageElement.style.visibility = "visible";
	} else {
		errorMessageElement.style.visibility = "hidden";
	}
}

// create separated function for calculations
function calculateDateDifference(inputDate, currentDate) {
	let dayDiff = currentDate.getDate() - inputDate.getDate();
	let monthDiff = currentDate.getMonth() - inputDate.getMonth();
	let yearDiff = currentDate.getFullYear() - inputDate.getFullYear();

	if (dayDiff < 0) {
		dayDiff += 30;
		monthDiff--;
	}

	if (monthDiff < 0) {
		monthDiff += 12;
		yearDiff--;
	}

	return { dayDiff, monthDiff, yearDiff };
}

// Must trim() inputs if we wanna check if it's empty
arrowImgFigure.addEventListener("click", () => {
	// trim does not change the value (put consts in const inputDate) and create consts instead of putting them in if condition
	const dayInput = dateInputs[DATE_INPUTS.DAY].value.trim();
	const monthInput = dateInputs[DATE_INPUTS.MONTH].value.trim();
	const yearInput = dateInputs[DATE_INPUTS.YEAR].value.trim();

	if (dayInput && monthInput && yearInput) {
		const inputDate = new Date(yearInput, monthInput - 1, dayInput);
		// destructurising
		const { dayDiff, monthDiff, yearDiff } = calculateDateDifference(
			inputDate,
			now
		);

		// cannot use object DATE_INPUTS bcs the reverse order
		setValues[0].textContent = `${yearDiff}`;
		setValues[1].textContent = `${monthDiff}`;
		setValues[2].textContent = `${dayDiff}`;
	} else {
		errorMessageElements.forEach((element, index) => {
			if (!dateInputs[index].value.trim()) {
				setEmptyError(true, index, element);
			}
		});
	}
});
