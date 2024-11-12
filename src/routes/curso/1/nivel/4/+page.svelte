<script lang="ts">
	import './nivel4.css';
	import Nav from '$lib/navbar1/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-4');
	});
</script>

<Nav levelNumber={4} position="rombo-2" />

<div class="container">
	<div class="header">
		<h1>Vídeo: Arte Prehistórico, Antiguo y Clásico</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/xsvY-xUSOgo"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.youtube.com/watch/xsvY-xUSOgo">Ver en Youtube</a>
</div>

<a href="./5" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
