import './style.css';

const cx = document.querySelector('canvas').getContext('2d');
const img = document.createElement('img');
img.src = '/spritev2.png';

const spriteW = 118;
const spriteH = 118;
img.addEventListener('load', () => {
	let cycle = 0;
	setInterval(() => {
		cx.clearRect(0, 0, spriteW, spriteH);
		cx.drawImage(
			img,
			cycle * spriteW,
			0,
			spriteW,
			spriteH,
			0,
			0,
			spriteW,
			spriteH);
		cycle = (cycle + 1) % 6;
	}, 90);
});

const peningur = document.querySelector('#peningar');
let clicks = 0;
const a = document.querySelector('canvas');
a.addEventListener('click', () => {
	clicks++;
	peningur.textContent = clicks;
});
