<script lang="ts">
	import './nivel1.css';
	import Nav from '$lib/navbar8/navbar.svelte';
	import { brush, eraser } from '$lib/IMAGES/todas';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-1');
	});

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let toolBtns: NodeListOf<HTMLElement>;
	let colorBtns: NodeListOf<HTMLElement>;
	let colorPicker: HTMLInputElement | null = null;
	let clearCanvas: HTMLElement | null = null;
	let saveImg: HTMLElement | null = null;

	// Variables globales
	let isDrawing = false;
	let selectedTool = 'brush';
	let selectedColor = '#000000';
	const pixelSize = 20.9; 

	const setCanvasBackground = () => {
		if (!ctx || !canvas) return;
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Dibujar cuadrículas
		ctx.strokeStyle = '#D3D3D3'; // Color de las líneas de la cuadrícula
		const cols = Math.floor(canvas.width / pixelSize);
		const rows = Math.floor(canvas.height / pixelSize);

		for (let i = 0; i <= cols; i++) {
			ctx.beginPath();
			ctx.moveTo(i * pixelSize, 0);
			ctx.lineTo(i * pixelSize, canvas.height);
			ctx.stroke();
		}

		for (let j = 0; j <= rows; j++) {
			ctx.beginPath();
			ctx.moveTo(0, j * pixelSize);
			ctx.lineTo(canvas.width, j * pixelSize);
			ctx.stroke();
		}
	};

	const drawPixel = (x: number, y: number) => {
		if (!ctx) return;
		if (selectedTool === 'brush') {
			ctx.fillStyle = selectedColor;
			ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
		} else if (selectedTool === 'eraser') {
			ctx.clearRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize); // Borra el pixel
		}
	};

	const startDraw = (e: MouseEvent) => {
		if (!ctx) return;
		isDrawing = true;
		const x = Math.floor(e.offsetX / pixelSize);
		const y = Math.floor(e.offsetY / pixelSize);
		console.log('Dibujando en:', x, y, 'con herramienta:', selectedTool);
		drawPixel(x, y);
	};

	const drawing = (e: MouseEvent) => {
		if (!isDrawing || !ctx) return;
		const x = Math.floor(e.offsetX / pixelSize);
		const y = Math.floor(e.offsetY / pixelSize);
		console.log('Dibujando en:', x, y, 'con herramienta:', selectedTool);
		drawPixel(x, y);
	};

	onMount(() => {
		canvas = document.querySelector('canvas');
		ctx = canvas?.getContext('2d') || null;
		toolBtns = document.querySelectorAll('.tool');
		colorBtns = document.querySelectorAll('.colors .option');
		colorPicker = document.querySelector('#color-picker') as HTMLInputElement;
		clearCanvas = document.querySelector('.clear-canvas');
		saveImg = document.querySelector('.save-img');

		if (canvas) {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			setCanvasBackground();
		}

		toolBtns.forEach((btn) =>
			btn.addEventListener('click', () => {
				document.querySelector('.options .active')?.classList.remove('active');
				btn.classList.add('active');
				selectedTool = btn.id;
			})
		);

		colorBtns.forEach((btn) =>
			btn.addEventListener('click', () => {
				document.querySelector('.options .selected')?.classList.remove('selected');
				btn.classList.add('selected');
				selectedColor = window.getComputedStyle(btn).getPropertyValue('background-color');
			})
		);

		colorPicker?.addEventListener('change', () => {
			if (colorPicker?.parentElement) {
				colorPicker.parentElement.style.background = colorPicker.value;
				colorPicker.parentElement.click();
			}
		});

		clearCanvas?.addEventListener('click', () => {
			if (ctx && canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				setCanvasBackground();
			}
		});

		saveImg?.addEventListener('click', () => {
			const link = document.createElement('a');
			link.download = `${Date.now()}.jpg`;
			link.href = canvas!.toDataURL();
			link.click();
		});

		canvas?.addEventListener('mousedown', startDraw);
		canvas?.addEventListener('mousemove', drawing);
		canvas?.addEventListener('mouseup', () => (isDrawing = false));
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Libera tu Creatividad - Pixel Art</title>
</svelte:head>

<Nav />

<main>
	<div class="container">
		<section class="tools-board">
			<div class="row">
				<label class="title" for="">Herramientas</label>
				<ul class="options">
					<li class="option active tool" id="brush">
						<img src={brush} alt="" />
						<span>Pincel</span>
					</li>
					<li class="option tool" id="eraser">
						<img src={eraser} alt="" />
						<span>Borrador</span>
					</li>
				</ul>
			</div>
			<div class="row colors">
				<label class="title" for="">Colores</label>
				<ul class="options">
					<li class="option"></li>
					<li class="option selected"></li>
					<li class="option"></li>
					<li class="option"></li>
					<li class="option">
						<input type="color" id="color-picker" value="#4A98F7" />
					</li>
				</ul>
			</div>
			<div class="row buttons">
				<button class="clear-canvas">Limpiar todo</button>
				<button class="save-img">Guardar tu ilustración</button>
			</div>
		</section>
		<section class="drawing-board">
			<canvas></canvas>
		</section>
	</div>
</main>

<div class="level-info" id="level-info"></div>
