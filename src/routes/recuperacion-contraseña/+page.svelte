<script lang="ts">
	import '$lib/CSS/recuperacion-contraseña.css';
	import { page } from '$app/stores';
	let token = $page.url.searchParams.get('token');
	let newPassword = '';

	let passwordInput1: HTMLInputElement;
	let passwordType1 = 'password';

	function togglePassword(inputNumber: number) {
		if (inputNumber === 1) {
			passwordType1 = passwordType1 === 'password' ? 'text' : 'password';
		}
	}
</script>

<div class="container">
	<span class="title"><h2>Cambiar Contraseña</h2></span>
	<br />
	<form method="POST" action="?/resetPassword">
		<div class="input-box">
			<input type="hidden" name="token" value={token} />
			<label class="label" for="password">Nueva contraseña:</label>
			<input
				class="input"
				type=password
				name="password"
				id="password"
				placeholder="Password123"
				required
			/>
		</div>
		<br />
		<div class="actions">
			<button class="enviar" type="submit">Restablecer contraseña</button>
		</div>
	</form>
</div>
