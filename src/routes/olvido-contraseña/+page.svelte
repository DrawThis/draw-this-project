<script lang="ts">
	import '$lib/CSS/olvido.css';
	import Icon from '@iconify/svelte';
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
	<p class="message">Por favor ingresa tu nueva contraseña en Draw This</p>
	<br />
	<form method="POST" action="?/resetPassword">
		<div class="input-box">
			<input type="hidden" name="token" value={token} />
			<label class="label" for="password">Nueva contraseña:</label>
			<input
				class="input"
				type={passwordType1}
				name="password"
				id="password"
				bind:this={passwordInput1}
				placeholder="Password123"
				bind:value={newPassword}
				required
			/>
			<button
				type="button"
				class={passwordType1 === 'password' ? 'watch-off' : 'watch'}
				on:click={() => togglePassword(1)}
				aria-label="Toggle password visibility"
				on:keypress={(e) => e.key === 'Enter' && togglePassword(1)}
				><Icon icon={passwordType1 === 'password' ? 'line-md:watch-off' : 'line-md:watch'} />
			</button>
		</div>
		<br />
		<div class="actions">
			<button class="enviar" type="submit">Restablecer contraseña</button>
		</div>
	</form>
</div>
