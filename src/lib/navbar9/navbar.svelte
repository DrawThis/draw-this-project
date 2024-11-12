<script lang="ts">
	import { onMount } from 'svelte';
	import './navbar.css';
	import { logo4 } from '$lib/IMAGES/todas';
	
	let levelInfo: HTMLElement | null;

	const elements = [
		{
			id: 'square-1',
			text: '1. Desafío: Libera tu Creatividad - Puntillismo',
			link: './1'
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

<header>
	<div class="menu-container">
		<nav>
			<img src={logo4} alt="" class="logo" />
			<div class="lesson">Material: Libera tu Creatividad</div>
			<div class="nav-item" id="nav-item-1">
				<div class="progress-bar" id="progress-bar">
					<div class="square" id="square-1">
						<span class="numero">1</span>
					</div>
				</div>
			</div>

			<div class="menu-toggle" id="menuToggle">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<div class="side-menu" id="sideMenu">
				<a href="#3">Bibliografías</a>
				<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">Volver</a>
			</div>
		</nav>
	</div>
	<div class="level-info" id="level-info"></div>
</header>
