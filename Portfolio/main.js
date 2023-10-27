import anime from "./node_modules/animejs/lib/anime.es.js";

const navbarSections = document.querySelectorAll(".navbar-section");
const mainNavbarLi = document.querySelectorAll(".main-navbar ul li");
const createNavbarRectangle = document.createElement("div");

/* JavaScript for the click effect on nav items */
navbarSections.forEach((link, index) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		createNavbarRectangle.classList.add("background-rectangle");
		mainNavbarLi[index].appendChild(createNavbarRectangle);
		for (const section of navbarSections) {
			section.style.color = "hsl(270, 73%, 35%)";
		}
		e.target.style.color = "hsl(0, 0%, 96%)";
	});
});

// Flying Text Animation
const text = document.querySelector(".fancy-description");
// Take each letter individually
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const animation = anime.timeline({
	targets: ".fancy-description span",
	easing: "easeInOutExpo",
	loop: false,
});

animation.add({
	rotate: () => {
		return anime.random(-360, 360);
	},
	translateX: () => {
		return anime.random(-300, 300);
	},
	translateY: () => {
		return anime.random(-300, 300);
	},
	duration: 0,
});

text.addEventListener("mouseover", () => {
	anime({
		targets: ".fancy-description span",
		rotate: 0,
		translateX: 0,
		translateY: 0,
		easing: "easeOutExpo",
		duration: 3000,
		delay: anime.stagger(20),
	});
});

// Card animation
const images = document.querySelectorAll(".reverse-card-figure img");
const figure = document.querySelector(".reverse-card-figure");
let cardOrder = [0, 1, 2, 3, 4];

images.forEach((img, index) => {
	img.addEventListener("click", () => {
		console.log("Kliknięto kartę o id:", index);
		// Get Image Width
		const cardWidth = img.clientWidth;
		const gap = 30;
		const offset = (cardWidth + gap) * (index - 2);
		images.forEach((innerImg) => {
			innerImg.style.transform = `translateX(${-offset}px)`;
		});
		if (cardOrder[index] === 4) {
			images[0].style.transform = `translateX(${offset * 1.5 + gap}px)`;
			images[1].style.transform = `translateX(${offset * 1.5 + gap}px)`;
			cardOrder = [2, 3, 4, 0, 1];
		} else if (cardOrder[index] === 3) {
			images[0].style.transform = `translateX(${offset * 4 + gap}px)`;
			cardOrder = [1, 2, 3, 4, 0];
		} else if (cardOrder[index] === 1) {
			images[4].style.transform = `translateX(${offset * 4 - gap}px)`;
			cardOrder = [4, 0, 1, 2, 3];
		} else if (cardOrder[index] === 0) {
			images[4].style.transform = `translateX(${offset * 1.5 - gap}px)`;
			images[3].style.transform = `translateX(${offset * 1.5 - gap}px)`;
			cardOrder = [3, 4, 0, 1, 2];
		}
		console.log(cardOrder);
	});
});
