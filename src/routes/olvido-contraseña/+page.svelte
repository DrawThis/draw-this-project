<script lang="ts">
	import '$lib/CSS/olvido.css';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let token = $page.url.searchParams.get('token');
	let newPassword = '';
	let passwordInput1: HTMLInputElement;
	let passwordType1 = 'password';
	let message = ''; // Variable para el mensaje
	let success = false; // Variable para indicar el estado de éxito

	function togglePassword(inputNumber: number) {
		if (inputNumber === 1) {
			passwordType1 = passwordType1 === 'password' ? 'text' : 'password';
		}
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		formData.append('token', token || '');

		try {
			const response = await fetch('/resetPassword', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('Error en la solicitud');
			}

			const result = await response.json();
			message = result.message;
			success = result.success;
		} catch (error) {
			message = 'Hubo un problema al procesar la solicitud.';
			success = false;
		}
	}
</script>

<div class="container">
	<span class="title"><h2>Cambiar Contraseña</h2></span>
	<p class="message">Por favor ingresa tu nueva contraseña en Draw This</p>
	<br />

	<!-- Muestra el mensaje de éxito o error -->
	{#if message}
		<div class={`alert ${success ? 'success' : 'error'}`}>
			{message}
		</div>
	{/if}

	<form on:submit={handleSubmit} action="?/resetPassword">
		<div class="input-box">
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
			>
				<Icon icon={passwordType1 === 'password' ? 'line-md:watch-off' : 'line-md:watch'} />
			</button>
		</div>
		<br />
		<div class="actions">
			<button class="enviar" type="submit">Restablecer contraseña</button>
		</div>
	</form>
</div>
