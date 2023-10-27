import anime from "./node_modules/animejs/lib/anime.es.js";

const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const animation = anime.timeline({
	targets: ".text span",
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
		targets: ".text span",
		rotate: 0,
		translateX: 0,
		translateY: 0,
		easing: "easeOutExpo",
		duration: 3000,
		delay: anime.stagger(20),
	});
});
