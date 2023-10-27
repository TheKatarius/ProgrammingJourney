// Scene, Camera, and Renderer setup
const scene = new THREE.Scene(); // przestrzeń 3d, w której będziemy tworzyli
const camera = new THREE.PerspectiveCamera(
	75, // 1. Field of View (FOV) - kąt widzenia w pionie, w stopniach, czym więcej, tym obiekty mogą się wydawać bardziej odległe
	window.innerWidth / window.innerHeight, // 2. Aspect Ratio - proporcje, window.innerWidth / window.innerHeight - takie proporcje sprawiają, że obraz nie jest zniekształcony
	// proporcje odnoszą się do obiektów w scenografii, nie do okna renderowania
	0.1, // 3. Near clipping plane - bliski plan przycięcia - Określa najbliższą odległość, w której obiekty są jeszcze widoczne
	1000 // 4. Far clipping plane - daleki plan przycięcia - Wszystko, co jest dalej od kamery niż ta wartość (w tym przypadku 1000), nie będzie renderowane.
);
const renderer = new THREE.WebGLRenderer({ antialias: true }); // obowiązkowe
// Ten renderer jest odpowiedzialny za wyświetlanie grafiki 3D na ekranie przy użyciu WebGL (Web Graphics Library), które jest API do renderowania 2D i 3D w przeglądarce bez potrzeby dodatkowych wtyczek.
// Parametr antialias: true - służy do wygładzania krawędzi obiektów - obniża wydajność

renderer.setSize(window.innerWidth, window.innerHeight); // ustawienia renderera na całym rozmiarze przeglądarki, a nie tylko jej części
document.body.appendChild(renderer.domElement);
// Gdy tworzysz renderer przy użyciu three.js (w tym przypadku THREE.WebGLRenderer), zawiera on właściwość o nazwie domElement. Jest to element HTML (<canvas>), na którym rzeczywiście renderowana jest scena 3D. Dlatego, aby wyświetlić scenę 3D na stronie, musisz dodać ten element <canvas> do drzewa DOM.

// Resize renderer and camera aspect when window is resized
// dzięki temu poniżej, obraz się nie zniekształci, a dostoje do nowego okna wymiaru
window.addEventListener("resize", () => {
	const width = window.innerWidth;
	const height = window.innerHeight;

	renderer.setSize(width, height);
	camera.aspect = width / height; // change aspect ratio

	camera.updateProjectionMatrix(); // adjust to new dimensions
});

// Geometry and Material setup
const geometry = new THREE.BoxGeometry();
// bez argumentów -> tworzymy sześcian (1,1,1) (width, height, depth)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material); // Tworzymy sześcian (mesh) łącząc geometrię i materiał.
// sfera - (promień, liczba segmentów w poziomie, liczba segmentów w pionie) - czymw więcej segmentów tym dokładniejsza sfera
const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
// promień górnej podstawy
// promień dolnej podstawy
// wysokość
// liczba segmentów wokół osi

const planeGeometry = new THREE.PlaneGeometry(5, 5);
// szerokość
// wysokość
// scene.add(sphere);

scene.add(cube); // Dodajemy sześcian do sceny.

camera.position.z = 5; // camera.position.z = 5;
camera.position.y = 1; // czym większa liczba, tym bardziej ucieka w dół, ujemna liczba = ucieka w górę
camera.position.x = -1; // czym większa liczba, tym bardziej ucieka w lewo, ujemna liczba = ucieka w prawo
// choć w którą stronę ucieka zależy od z, no bo 3d

// Animation function
function animate() {
	requestAnimationFrame(animate); // "Hej, wywołaj tę funkcję animate przed następną klatką odświeżenia". - trochę jakby rekursja
	// Jest to funkcja, która prosi przeglądarkę o wywołanie określonej funkcji przed następną klatką odświeżenia. Czyli, jeśli twoja przeglądarka działa z częstotliwością odświeżania 60Hz, requestAnimationFrame będzie próbował wywoływać podaną funkcję 60 razy na sekundę (choć rzeczywista liczba wywołań może się różnić w zależności od wielu czynników, takich jak wydajność sprzętu czy obciążenie systemu).
	// powyższa funkcja, to tak jakby planowanie co ma się zadziać w kolejnej klatce

	// Operacje jakie mają się zadziać w kolejnej klatce, czyli obrót sześcianu
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	// renderowania sceny = aktualizacja obrazu aktualnego
	renderer.render(scene, camera);
}

// rozpocznij animację
animate();
