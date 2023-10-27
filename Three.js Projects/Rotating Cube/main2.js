// Import Anime.js
import anime from "animejs/lib/anime.es.js";

// Floating and fading animation
anime({
	targets: ".rune", // Class of your rune SVG or image
	translateY: [-100, 0], // Start below and float upward
	opacity: [0, 1, 0], // Start as invisible, become visible, fade out
	duration: 5000, // Duration in ms, adjust as needed
	delay: anime.stagger(100), // Staggered delay for multiple runes
	loop: true, // Infinite loop
	easing: "linear", // Smooth movement
});

// Occasionally form patterns or symbols
setTimeout(function () {
	anime({
		targets: ".rune",
		translateX: [0, 50], // Shift some runes to the right
		translateY: [0, -50], // Shift some runes upward
		duration: 5000,
		loop: true,
		easing: "easeInOutQuad", // More dynamic movement
	});
}, 10000); // Delay of 10 seconds before the pattern animation starts
