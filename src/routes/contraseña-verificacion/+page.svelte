<script lang="ts">
    import '$lib/CSS/contraseña verificada.css';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Verificación de Contraseña</title>
</svelte:head>

<div class="card-container">
	<div class="card">
		<div class="header">
			<div class="image">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<g stroke-width="0" id="SVGRepo_bgCarrier"></g>
					<g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-width="1.5"
							stroke="#000000"
							d="M20 7L9.00004 18L3.99994 13"
						></path>
					</g>
				</svg>
			</div>
			<div class="content">
				<span class="title">Petición de restablecimiento de contraseña</span>
				<p class="message">
					Hemos enviado un correo con instrucciones para restablecer tu contraseña.
				</p>
			</div>
			<div class="actions">
				<a href="/" data-sveltekit-reload data-sveltekit-preload-data="tap">
					<button type="button" class="enviar" >Volver</button>
				</a>
			</div>
		</div>
	</div>
</div>
