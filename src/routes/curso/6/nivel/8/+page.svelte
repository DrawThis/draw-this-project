<script lang="ts">
	import './nivel8.css';
	import Nav from '$lib/navbar6/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-8');
	});
</script>

<Nav levelNumber={8} position="rombo-4" />

<div class="container">
	<div class="header">
		<h1>Vídeo: 10 Trucos para Dibujar Anatomía</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/L5q7za0IXMI"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.youtube.com/watch/L5q7za0IXMI">Ver en Youtube</a>
</div>

<a href="./certificado" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

