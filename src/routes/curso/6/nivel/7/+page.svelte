<script lang="ts">
	import './nivel7.css';
	import Nav from '$lib/navbar6/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-7');
	});
</script>

<Nav levelNumber={7} position="rombo-3" />

<div class="container">
	<div class="header">
		<h1>Vídeo: 10 Errores al Dibujar Anatomía (Rostro y Cuello)</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/WnvE8AGAlUg"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.youtube.com/watch/WnvE8AGAlUg">Ver en Youtube</a>
</div>

<a href="./8" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

