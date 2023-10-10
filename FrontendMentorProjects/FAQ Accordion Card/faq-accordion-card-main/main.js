const mainCard = document.querySelector(".main-card");
const arrowButtonImages = document.querySelectorAll(".arrow-button-image");
const questionTitles = document.querySelectorAll(".question-title");
const hiddenTextArticle = document.querySelectorAll(".hidden-text-article");

// index paramater in forEach function holds the index of element that we wanna change, then we dont have to use IDs
// the image has to stick out out of the container, and rest of the images need to be hidden
// toggle - EventListener
// configure the height based on questions-section
let buttonClickCounter = 0;
const additionalHeightParam = 40;

function computeHeight() {
	const baseHeight = window.innerWidth <= 800 ? 550 : 500;
	return baseHeight + additionalHeightParam * buttonClickCounter + "px";
}

arrowButtonImages.forEach((arrowButtonImage, index) => {
	let isClicked = true; // when unclick, the default settings will be implemented
	arrowButtonImage.addEventListener("click", () => {
		// it takes the height property of mainCard component and removes the "px" string at the end
		let currentHeightMainCard = parseInt(
			window.getComputedStyle(mainCard).height,
			10
		);

		// Depends on view - mobile or desktop

		if (isClicked) {
			arrowButtonImage.style.transform = "rotate(180deg)";
			questionTitles[index].style.fontWeight = "700";
			questionTitles[index].style.color = "black";
			hiddenTextArticle[index].style.display = "block";
			buttonClickCounter++;
		} else {
			arrowButtonImage.style.transform = "rotate(0deg)";
			questionTitles[index].style.fontWeight = "400";
			questionTitles[index].style.color = "hsl(237, 12%, 33%)";
			hiddenTextArticle[index].style.display = "none";
			buttonClickCounter--;
		}
		mainCard.style.height = computeHeight();

		isClicked = !isClicked;
	});
});

window.addEventListener("resize", () => {
	mainCard.style.height = computeHeight();
});

// Create a resize observer instance and provide the callback
// const resizeObserver = new ResizeObserver((entries) => {
// 	for (let entry of entries) {
// 		console.log("Current height:", entry.contentRect.height);
// 		if (entry.contentRect.height > 800) {
// 			mainCard.style.height = "500px" + 24 * clickedCounter;
// 		} else {
// 			mainCard.style.height = "600px" + 40 * clickedCounter;
// 		}
// 	}
// });

// // Start observing the main card element
// resizeObserver.observe(mainCard);

// resizeObserver.disconnect();
