const shareIconFigure = document.querySelector(".share-icon-figure");
const shareIconWhite = document.querySelector(".share-icon-white");
const shareIconBlack = document.querySelector(".share-icon-black");
const shareWindowFigure = document.querySelector(".share-window-figure");

let isClicked = false;
shareIconFigure.addEventListener("click", () => {
	if (!isClicked) {
		shareWindowFigure.style.display = "flex";
		shareIconFigure.style.backgroundColor = "hsl(214, 17%, 51%)";
		shareIconBlack.style.display = "none";
		shareIconWhite.style.display = "block";
	} else {
		shareWindowFigure.style.display = "none";
		shareIconFigure.style.backgroundColor = "white";
		shareIconBlack.style.display = "block";
		shareIconWhite.style.display = "none";
	}

	isClicked = !isClicked;
});
