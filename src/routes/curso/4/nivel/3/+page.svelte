<script lang="ts">
	import './nivel3.css';
	import Nav from '$lib/navbar4/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { brush, eraser } from '$lib/IMAGES/todas';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-3');
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
	let selectedColor = '#fd6500';
	const pixelSize = 17.9; 

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

	let modal: HTMLElement | null = null;
	let span: HTMLElement | null = null;
	let objectiveImage: HTMLElement | null = null;

	onMount(() => {
		modal = document.getElementById('modal');
		span = document.getElementsByClassName('close')[0] as HTMLElement;
		objectiveImage = document.querySelector('.objective-image');

		if (modal) {
			// Mostrar el modal al cargar la página
			modal.style.display = 'block';
		} else {
			console.error('No se encontró el modal en el DOM');
		}

		if (span) {
			// Cerrar el modal al hacer clic en la "X"
			span.onclick = () => {
				if (modal) {
					modal.style.display = 'none';
				}
			};
		}

		// Cerrar el modal al hacer clic fuera de él
		window.onclick = (event: MouseEvent) => {
			if (event.target === modal && modal) {
				modal.style.display = 'none';
			}
		};

		if (objectiveImage) {
			// Mostrar el modal al hacer clic en la imagen dentro del div objective
			objectiveImage.onclick = () => {
				if (modal) {
					modal.style.display = 'block';
				}
			};
		}
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Historia del Arte</title>
</svelte:head>

<Nav levelNumber={3} position="square-1" />

<div id="modal" class="modal">
	<div class="modal-content">
		<span class="close">&times;</span>
		<img src="https://i.pinimg.com/736x/a0/1f/39/a01f399549a224fdab966b93971c7396.jpg" alt="" class="modal-image" />
		<p><strong>Objetivo:</strong> Intenta plasmar este pixel art</p>
	</div>
</div>
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
	<div class="objective">
		<img src="https://i.pinimg.com/736x/a0/1f/39/a01f399549a224fdab966b93971c7396.jpg"  alt="" class="objective-image" />
		<p><strong>Nota:</strong> Puedes ampliar la imagen con solo apretarla.</p>
	</div>
</main>

<a href="./4" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

<div class="level-info" id="level-info"></div>
