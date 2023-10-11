const shareIconFigure = document.querySelector(".share-icon-figure");
const shareWindowFigure = document.querySelector(".share-window-figure");

let isClicked = false;
shareIconFigure.addEventListener("click", (event) => {
	if (!isClicked) {
		shareWindowFigure.style.display = "flex";
	} else {
		shareWindowFigure.style.display = "none";
	}

	isClicked = !isClicked;
});
