const hamburgerMenuSection = document.querySelector(".hamburger-menu-section");
const hamburgerMenuFigure = document.querySelector(".hamburger-menu-figure");
const hamburgerMenuOpen = document.querySelector(".hamburger-menu");
const hamburgerMenuClose = document.querySelector(".hamburger-menu-close");

function toggleDisplay(element, state1, state2) {
	element.style.display = element.style.display === state1 ? state2 : state1;
}

hamburgerMenuFigure.addEventListener("click", () => {
	document.body.classList.toggle("overlay-active");
	toggleDisplay(hamburgerMenuClose, "block", "none");
	toggleDisplay(hamburgerMenuOpen, "none", "block");
	toggleDisplay(hamburgerMenuSection, "flex", "none");
});
