<script lang="ts">
	import './nivel1.css';
	import Nav from '$lib/navbar6/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-1');
	});
</script>

<Nav levelNumber={1} position="rombo-1" />

<div class="container">
	<div class="header">
		<h1>Vídeo: Introducción a la Anatomía</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/ccwQKHjPHg0"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.youtube.com/watch/ccwQKHjPHg0">Ver en Youtube</a>
</div>

<a href="./2" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
