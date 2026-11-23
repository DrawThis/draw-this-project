<script lang="ts">
	import './nivel1.css';
	import Nav from '$lib/navbar9/navbar.svelte';
	import { brush, eraser } from '$lib/IMAGES/todas';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-1');
	});

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let toolBtns: NodeListOf<HTMLElement>;
	let sizeSlider: HTMLInputElement | null = null;
	let colorBtns: NodeListOf<HTMLElement>;
	let colorPicker: HTMLInputElement | null = null;
	let clearCanvas: HTMLElement | null = null;
	let saveImg: HTMLElement | null = null;

	let isDrawing = false;
	let selectedTool = 'pencil';
	let brushWidth = 5;
	let selectedColor = '#000000';
	let prevMouseX = 0;
	let prevMouseY = 0;
	let snapshot: ImageData;

	const setCanvasBackground = () => {
		if (!ctx || !canvas) return;
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = selectedColor;
	};

		// Convierte la posición del puntero (mouse/touch/stylus) a coordenadas reales del canvas,
	// escalando según el tamaño visual actual del <canvas>.
	const getCanvasPos = (e: PointerEvent) => {
		const rect = canvas!.getBoundingClientRect();
		const scaleX = canvas!.width / rect.width;
		const scaleY = canvas!.height / rect.height;
		return {
			x: (e.clientX - rect.left) * scaleX,
			y: (e.clientY - rect.top) * scaleY
		};
	};

	const startDraw = (e: PointerEvent) => {
		if (!ctx || !canvas) return;
		e.preventDefault();
		isDrawing = true;
		const pos = getCanvasPos(e);
		prevMouseX = pos.x;
		prevMouseY = pos.y;
		snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
		if (canvas.setPointerCapture) {
			canvas.setPointerCapture(e.pointerId);
		}
	};

	const drawPencil = (pos: { x: number; y: number }) => {
		if (!ctx) return;
		ctx.lineWidth = brushWidth;
		ctx.strokeStyle = selectedColor;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';

		ctx.beginPath();
		ctx.moveTo(prevMouseX, prevMouseY);
		ctx.lineTo(pos.x, pos.y);
		ctx.stroke();

		prevMouseX = pos.x;
		prevMouseY = pos.y;
	};

	const drawing = (e: PointerEvent) => {
		if (!isDrawing || !ctx) return;
		e.preventDefault();
		const pos = getCanvasPos(e);
		ctx.putImageData(snapshot, 0, 0);
		if (selectedTool === 'pencil') {
			drawPencil(pos);
		} else if (selectedTool === 'brush' || selectedTool === 'eraser') {
			ctx.strokeStyle = selectedTool === 'eraser' ? '#ffffff' : selectedColor;
			ctx.lineWidth = brushWidth;
			ctx.lineTo(pos.x, pos.y);
			ctx.stroke();
		}
	};

	const stopDraw = (e: PointerEvent) => {
		isDrawing = false;
		if (canvas && canvas.hasPointerCapture && canvas.hasPointerCapture(e.pointerId)) {
			canvas.releasePointerCapture(e.pointerId);
		}
	};

	onMount(() => {
		canvas = document.querySelector('canvas');
		ctx = canvas?.getContext('2d') || null;
		if (canvas) {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			setCanvasBackground();
		}

		toolBtns = document.querySelectorAll('.tool');
		sizeSlider = document.querySelector('#size-slider') as HTMLInputElement;
		colorBtns = document.querySelectorAll('.colors .option');
		colorPicker = document.querySelector('#color-picker') as HTMLInputElement;
		clearCanvas = document.querySelector('.clear-canvas');
		saveImg = document.querySelector('.save-img');

		toolBtns.forEach((btn) =>
			btn.addEventListener('click', () => {
				document.querySelector('.options .active')?.classList.remove('active');
				btn.classList.add('active');
				selectedTool = btn.id;
			})
		);

		sizeSlider?.addEventListener('change', () => {
			if (sizeSlider) {
				brushWidth = parseInt(sizeSlider.value);
			}
		});

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

				// Eventos de puntero (unifican mouse, táctil y stylus) con prevención de scroll
		canvas?.addEventListener('pointerdown', startDraw);
		canvas?.addEventListener('pointermove', drawing);
		canvas?.addEventListener('pointerup', stopDraw);
		canvas?.addEventListener('pointercancel', stopDraw);
		canvas?.addEventListener('pointerleave', stopDraw);
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Libera tu Creatividad - Puntillismo</title>
</svelte:head>

<Nav />

<main>
	<div class="container">
		<section class="tools-board">
			<div class="row">
				<label class="title" for="">Opciones</label>
				<ul class="options">
					<li class="option active tool" id="pencil">
						<img src={brush} alt="" />
						<span>Lápiz</span>
					</li>
					<li class="option tool" id="eraser">
						<img src={eraser} alt="" />
						<span>Borrador</span>
					</li>
					<li class="option">
						<input type="range" id="size-slider" min="1" max="30" value="10" />
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
