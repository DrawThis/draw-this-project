<script lang="ts">
	import './nivel1.css';
	import Nav from '$lib/navbar10/navbar.svelte';
	import { line, eraser, } from '$lib/IMAGES/todas';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-3');
	});

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let toolBtns: NodeListOf<HTMLElement>;
	let fillColor: HTMLInputElement | null = null;
	let sizeSlider: HTMLInputElement | null = null;
	let colorBtns: NodeListOf<HTMLElement>;
	let colorPicker: HTMLInputElement | null = null;
	let clearCanvas: HTMLElement | null = null;
	let saveImg: HTMLElement | null = null;

	// Variables globales con valores predeterminados
	let prevMouseX: number, prevMouseY: number, snapshot: ImageData;
	let isDrawing = false;
	let selectedTool = 'brush';
	let brushWidth = 5;
	let selectedColor = '#000000';

	const setCanvasBackground = () => {
		if (!ctx || !canvas) return;
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = selectedColor;
	};

	const startDraw = (e: MouseEvent) => {
	if (!ctx) return;
	isDrawing = true;
	prevMouseX = e.offsetX;
	prevMouseY = e.offsetY;
	ctx.beginPath();
	ctx.lineWidth = brushWidth;
	ctx.strokeStyle = selectedColor;
	ctx.fillStyle = selectedColor;
	snapshot = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
};

const drawing = (e: MouseEvent) => {
	if (!isDrawing || !ctx) return;
	ctx.putImageData(snapshot, 0, 0);

	// Dibuja una línea recta desde el punto inicial hasta el punto actual
	if (selectedTool === 'brush' || selectedTool === 'eraser') {
		ctx.strokeStyle = selectedTool === 'eraser' ? '#fff' : selectedColor;
		ctx.beginPath();
		ctx.moveTo(prevMouseX, prevMouseY); // Punto inicial
		ctx.lineTo(e.offsetX, e.offsetY);   // Punto actual (fin de la línea)
		ctx.stroke();
	}
};

const endDraw = () => {
	isDrawing = false;
};

// Actualiza los eventos para incluir endDraw cuando sueltes el mouse
onMount(() => {
	canvas?.addEventListener('mousedown', startDraw);
	canvas?.addEventListener('mousemove', drawing);
	canvas?.addEventListener('mouseup', endDraw);
	canvas?.addEventListener('mouseleave', endDraw);
});


	onMount(() => {
		canvas = document.querySelector('canvas');
		ctx = canvas?.getContext('2d') || null;
		toolBtns = document.querySelectorAll('.tool');
		fillColor = document.querySelector('#fill-color') as HTMLInputElement;
		sizeSlider = document.querySelector('#size-slider') as HTMLInputElement;
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
	<title>Libera tu Creatividad - Lineas</title>
</svelte:head>

<Nav />

<main>
	<div class="container">
		<section class="tools-board">
			<div class="row">
				<label class="title" for="">Opciones</label>
				<ul class="options">
					<li class="option active tool" id="brush">
						<img src={ line } alt="" />
						<span>Linea</span>
					</li>
					<li class="option tool" id="eraser">
						<img src={ eraser } alt="" />
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


