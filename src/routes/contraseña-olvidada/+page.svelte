<script lang="ts">
	import '$lib/CSS/contraseña-olvidada.css';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Recupera tu contraseña</title>
</svelte:head>

<div class="container">
	<span class="title"><h2>Recuperación de Contraseña</h2></span>
	<br />
	<form method="POST" action="?/forgotPassword">
		<div class="input-group">
			<input
				name="email"
				id="Email"
				class="input"
				type="email"
				placeholder="Correo Electrónico"
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
		<span>Volver</span>
	</button>
</a>
