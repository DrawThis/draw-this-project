<script lang="ts">
	import './nivel6.css';
	import Nav from '$lib/navbar6/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { torso, brush, eraser } from '$lib/IMAGES/todas';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-6');
	});

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let toolBtns: NodeListOf<HTMLElement>;
	let sizeSlider: HTMLInputElement | null = null;
	let colorBtns: NodeListOf<HTMLElement>;
	let colorPicker: HTMLInputElement | null = null;
	let clearCanvas: HTMLElement | null = null;
	let saveImg: HTMLElement | null = null;

	let prevMouseX: number, prevMouseY: number, snapshot: ImageData;
	let isDrawing = false;
	let selectedTool = 'brush';
	let brushWidth = 5;
	let selectedColor = '#000';

	const setCanvasBackground = () => {
		if (!ctx || !canvas) return;

		const backgroundImage = new Image();
		backgroundImage.src = torso;

		backgroundImage.onload = () => {
			ctx!.drawImage(backgroundImage, 0, 0, canvas!.width, canvas!.height);
			ctx!.fillStyle = selectedColor;
		};
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

		if (selectedTool === 'brush' || selectedTool === 'eraser') {
			ctx.strokeStyle = selectedTool === 'eraser' ? '#fff' : selectedColor;
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
		} 
	};

	onMount(() => {
		canvas = document.querySelector('canvas');
		ctx = canvas?.getContext('2d') || null;
		toolBtns = document.querySelectorAll('.tool');
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

<Nav levelNumber={6} position="square-2" />

<div id="modal" class="modal">
	<div class="modal-content">
		<span class="close">&times;</span>
		<img src={torso} alt="" class="modal-image" />
		<p>
			<strong>Objetivo:</strong> Este boceto está incompleto, intenta completarla a tu gusto (solo cabeza, torso y brazos).
		</p>
	</div>
</div>
<main>
	<div class="container">
		<section class="tools-board">
			<div class="row">
				<label class="title" for="">Opciones</label>
				<ul class="options">
					<li class="option active tool" id="brush">
						<img src={ brush } alt="" />
						<span>Pincel</span>
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

<a href="./7" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
