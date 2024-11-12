<script lang="ts">
	import { onMount } from 'svelte';
	import './navbar.css';
	import { logo4 } from '$lib/IMAGES/todas';

	export let levelNumber: number = 1; 
	export let position: string = 'rombo-1';
	
	let levelInfo: HTMLElement | null;

	const elements = [
		{
			id: 'rombo-1',
			text: '1. Video: La Historia del Dibujo',
			link: './1'
		},
		{
			id: 'circle-1',
			text: '2. Desarrollo: El Dibujo Básico',
			link: './2'
		},
		{
			id: 'square-1',
			text: '3. Desafío: Dibuja con Geometría',
			link: './3'
		},
		{
			id: 'rombo-2',
			text: '4. Vídeo: 10 trucos para Dibujar Mejor',
			link: './4'
		},
		{
			id: 'circle-2',
			text: '5. Desarrollo: 5 Técnicas de Dibujo',
			link: './5'
		},
		{
			id: 'square-2',
			text: '6. Desafío: Construcción de un Boceto',
			link: './6'
		},
		{
			id: 'rombo-3',
			text: '7. Vídeo: Lista de Materiales para dibujar',
			link: './7'
		},
	];

	onMount(() => {
		levelInfo = document.getElementById('level-info');

		elements.forEach(({ id, text, link }) => {
			const element = document.getElementById(id);
			if (element) {
				element.addEventListener('mouseover', () => {
					if (levelInfo) {
						levelInfo.textContent = text;
						levelInfo.classList.add('show');
					}
				});

				element.addEventListener('mouseout', () => {
					levelInfo?.classList.remove('show');
				});

				element.addEventListener('click', () => {
					window.location.href = link;
				});
			}
		});

		const menuToggle = document.getElementById('menuToggle');
		const sideMenu = document.getElementById('sideMenu');

		if (menuToggle && sideMenu) {
			menuToggle.addEventListener('click', () => {
				sideMenu.classList.toggle('open');
				menuToggle.classList.toggle('open');
			});
		}
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Dibujo Básico</title>
</svelte:head>

<header>
	<div class="menu-container">
		<nav>
			<img src={logo4} alt="" class="logo" />
			<div class="lesson">Curso: Dibujo Básico</div>
			<div class="nav-item" id="nav-item-1">
				<div class="progress-bar" id="progress-bar">
					<div class="rombo" id="rombo-1">
						<span class="numero">{position === 'rombo-1' ? levelNumber : ''}</span>
					</div>
					<div class="circle" id="circle-1">
						<span class="numero">{position === 'circle-1' ? levelNumber : ''}</span>
					</div>
					<div class="square" id="square-1">
						<span class="numero-2">{position === 'square-1' ? levelNumber : ''}</span>
					</div>
					<div class="rombo" id="rombo-2">
						<span class="numero">{position === 'rombo-2' ? levelNumber : ''}</span>
					</div>
					<div class="circle" id="circle-2">
						<span class="numero">{position === 'circle-2' ? levelNumber : ''}</span>
					</div>
					<div class="square" id="square-2">
						<span class="numero-2">{position === 'square-2' ? levelNumber : ''}</span>
					</div>
					<div class="rombo" id="rombo-3">
						<span class="numero">{position === 'rombo-3' ? levelNumber : ''}</span>
					</div>
				</div>
			</div>

			<div class="menu-toggle" id="menuToggle">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<div class="side-menu" id="sideMenu">
				<a href="/bibliografias" data-sveltekit-reload data-sveltekit-preload-data="tap">Bibliografías</a>
				<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">Volver</a>
			</div>
		</nav>
	</div>
	<div class="level-info" id="level-info"></div>
</header>
