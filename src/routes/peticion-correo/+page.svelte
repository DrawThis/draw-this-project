<script lang="ts">
	import '$lib/CSS/peticion correo.css';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let show = true;

	function close() {
		show = false;
	}

	// MENSAJE DE EXITO (SUCCESS)

	let showSuccessMessage = false;

    onMount(() => {
        // Verifica si existe la marca de éxito en localStorage
        if (localStorage.getItem('registered') === 'true') {
            showSuccessMessage = true;
            // Limpia la marca después de mostrar el mensaje
            localStorage.removeItem('registered');
        }
    });

    function handleRegisterSubmit(event: Event) {
        // Antes de enviar el formulario, marca el registro como exitoso
        localStorage.setItem('registered', 'true');
    }
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Recupera tu contraseña</title>
</svelte:head>

{#if showSuccessMessage && show}
	<div class="success">
		<Icon icon="mdi:check-bold" class="icon" />
		<div class="icon-title">Hemos enviado un correo para restablecer tu contraseña</div>
		<Icon icon="material-symbols:close" class="icon-close" onclick={close} />
	</div>
{/if}

<div class="container">
	<span class="title"><h2>Recuperación de Contraseña</h2></span>
	<p class="message">
		Por favor ingresa el Correo Electrónico con el que iniciaste sesión en Draw This
	</p>
	<br />
	<form action="?/forgotPassword" method="POST" on:submit={handleRegisterSubmit}>
		<div class="input-group">
			<label class="label" for="email">Correo Electrónico</label>
			<input
				name="email"
				id="Email"
				class="input"
				type="email"
				placeholder="example123@gmail.com"
				required
			/>
		</div>
		<br />
		<div class="actions">
			<button class="enviar">Enviar</button>
		</div>
	</form>
</div>

<a href="/" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<button class="back">
		<svg
			height="16"
			width="16"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1024 1024"
		>
			<path
				d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.009120-223.009120c-3.837398-3.837398-5.996574-9.046027-5.996574-14.469550 0-5.433756 2.159176-10.632151 5.996574-14.469550l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
			></path>
		</svg>
		<span>Volver</span>
	</button>
</a>
