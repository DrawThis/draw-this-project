<script lang="ts">
	import './nivel7.css';
	import Nav from '$lib/navbar3/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-7');
	});
</script>

<Nav levelNumber={7} position="rombo-3" />

<div class="container">
	<div class="header">
		<h1>Vídeo: Cómo Hacer un Mandala con Puntillismo</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/H_zV9iZKx0Y?si=ftNnKcr_kX1RC8uf"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.youtube.com/watch/H_zV9iZKx0Y?si=ftNnKcr_kX1RC8uf">Ver en Youtube</a>
</div>

<a href="./certificado" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

