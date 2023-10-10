const mainCard = document.querySelector(".main-card");
const arrowButtonImages = document.querySelectorAll(".arrow-button-image");
const questionTitles = document.querySelectorAll(".question-title");
const hiddenTextArticle = document.querySelectorAll(".hidden-text-article");

let buttonClickCounter = 0;
const additionalHeightParam = 40;

function computeHeight() {
	const baseHeight = window.innerWidth <= 800 ? 550 : 500;
	return baseHeight + additionalHeightParam * buttonClickCounter + "px";
}

arrowButtonImages.forEach((arrowButtonImage, index) => {
	let isClicked = true; // when unclick, the default settings will be implemented
	arrowButtonImage.addEventListener("click", () => {
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
