<script lang="ts">
	import '$lib/CSS/olvido contraseña.css';
	import { page } from '$app/stores';
	let token = $page.url.searchParams.get('token');
	let newPassword = '';
  </script>
  
  <div class="container">
	<span class="title"><h2>Cambiar Contraseña</h2></span>
	<p class="message">
		Por favor ingresa tu nueva contraseña en Draw This
	</p>
	<br />
	<form method="POST" action="?/resetPassword">
		<div class="input-group">
			<input type="hidden" name="token" value={token} />
			<label class="label" for="password">Nueva contraseña:</label>
			<input class="input" type="password" name="password" id="password" bind:value={newPassword} required />
		</div>
		<br />
		<div class="actions">
			<a href="/contraseña-verificada" data-sveltekit-reload data-sveltekit-preload-data="tap">
				<button class="enviar" type="submit">Restablecer contraseña</button>
			</a>
		</div>
	</form>
</div>
  