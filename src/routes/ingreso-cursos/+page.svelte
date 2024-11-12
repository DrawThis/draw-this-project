<script lang="ts">
	import '$lib/CSS/cursos.css';
	import { courses } from '$lib/info/info';
	import logo from '$lib/IMAGES/IMG-20231013-WA0009.jpg';

	let searchInput = '';

	$: filteredCourses = courses.filter((course) =>
		course.title.toLowerCase().includes(searchInput.toLowerCase())
	);

	$: noResults = filteredCourses.length === 0;

	let menuOpen = false;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Aprende con nuestros cursos de Draw This</title>
</svelte:head>

<header>
	<div class="menu-container">
		<nav>
			<img src={logo} alt="Logo" class="logo" />
			<div class="group">
				<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
					<g>
						<path
							d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
						></path>
					</g>
				</svg>
				<input placeholder="Buscar" bind:value={searchInput} class="input" />
				<div
					class="menu-toggle"
					id="menuToggle"
					tabindex="0"
					on:click={toggleMenu}
					on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && toggleMenu()}
					class:open={menuOpen}
					role="button"
					aria-pressed={menuOpen}
					aria-label="Toggle Menu"
				>
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
				</div>

				<div class="side-menu" class:open={menuOpen}>
					<a href="/landing-page" data-sveltekit-reload data-sveltekit-preload-data="tap">Volver</a>
				</div>
			</div>
		</nav>
	</div>
</header>

<div class="container" id="coursesContainer">
	{#each filteredCourses as course}
		<div class="course">
			<div class="course-content">
				<h2>{course.title}</h2>
				<p>{course.description}</p>
				<button class="button" on:click={() => (window.location.href = course.link)}
					>Ver curso</button
				>
			</div>
				<img src={course.image} alt="" class="course-image" />
		</div>
	{/each}

	{#if noResults}
		<div id="noResults">
			<p><strong>ERROR 404:</strong> No se encontraron Coincidencias :(</p>
			<img
				src="https://www.freeiconspng.com/thumbs/error/shiny-metal-red-error-image-designs-1.png"
				alt=""
			/>
		</div>
	{/if}
</div>
