import './style.css';


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 500, 500);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'orange');
gradient.addColorStop(0.4, 'yellow');
gradient.addColorStop(0.6, 'green');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'purple');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 500);

const Ebba = new Image(100, 100);
Ebba.src = '/osk.png';


let mouseX;
let mouseY;
let ebbaX = 50;
let ebbaY = 50;

window.onload = startup;

function startup() {
	document.querySelector('canvas').addEventListener('mousemove', (e) => {
		const mousepos = getMousePos(canvas, e);
		mouseX = mousepos.x;
		mouseY = mousepos.y;
	});
	animation();
}

function getMousePos(canvas, evt) {
	const rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top,
	};
}

function animation() {
	requestAnimationFrame(animation);
	ebbaHreyfast();
}

function ebbaHreyfast() {
	if (mouseX) {
		const bilY = (mouseY - ebbaY);
		const bilX = (mouseX - ebbaX);
		ebbaX += bilX;
		ebbaY += bilY;
	}
	ebbaX -= (Ebba.width / 2);
	ebbaY -= (Ebba.height / 2);

	ctx.fillRect(0, 0, 500, 500);
	ctx.drawImage(Ebba, ebbaX, ebbaY, 100, 100);
}
