const arrowButtonImages = document.querySelectorAll(".arrow-button-image");
const questionTitles = document.querySelectorAll(".question-title");
const hiddenTextArticle = document.querySelectorAll(".hidden-text-article");

// index paramater in forEach function holds the index of element that we wanna change, then we dont have to use IDs
// the image has to stick out out of the container, and rest of the images need to be hidden
// toggle - EventListener
// configure the height based on questions-section

arrowButtonImages.forEach((arrowButtonImage, index) => {
	let isClicked = true; // when unclick, the default settings will be implemented
	arrowButtonImage.addEventListener("click", () => {
		if (isClicked) {
			arrowButtonImage.style.transform = "rotate(180deg)";
			questionTitles[index].style.fontWeight = "700";
			questionTitles[index].style.color = "black";
			hiddenTextArticle[index].style.display = "block";
		} else {
			arrowButtonImage.style.transform = "rotate(0deg)";
			questionTitles[index].style.fontWeight = "400";
			questionTitles[index].style.color = "hsl(237, 12%, 33%)";
			hiddenTextArticle[index].style.display = "none";
		}

		isClicked = !isClicked;
	});
});
