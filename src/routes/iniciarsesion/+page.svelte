<script lang="ts">
	import '$lib/css/mariana.css';
	export let form: { credentials?: boolean; user?: string } = {};

	let showLogin: boolean = true; // Estado para controlar si mostramos el formulario de login o de registro

	// Función para alternar entre login y registro
	const toggleActiveClass = (form: 'login' | 'register') => {
		if (form === 'login') {
			showLogin = true; // Mostrar el formulario de login
		} else if (form === 'register') {
			showLogin = false; // Mostrar el formulario de registro
		}
	};
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>You can tell me</title>

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if form?.credentials}
<div class="error">
  <div class="error-title">Correo o contraseña inválido</div>
</div>
{/if}

{#if form?.user}
<div class="error">
  <div class="error-title">El correo ya se encuentra registrado</div>
</div>
{/if}

<main>
	<div class="contenedor__todo">
		<div class="caja__trasera">
			<div class="caja__trasera-login">
				<h3>¿Ya tienes una cuenta?</h3>
				<p>Inicia sesión para entrar en la página</p>
				<!-- Usando on:click para manejar el clic -->
				<button on:click={() => toggleActiveClass('login')} class="signInBtn-Link"
					>Iniciar Sesión</button
				>
			</div>
			<div class="caja__trasera-register">
				<h3>¿Aún no tienes una cuenta?</h3>
				<p>Regístrate para que puedas iniciar sesión</p>
				<!-- Usando on:click para manejar el clic -->
				<button on:click={() => toggleActiveClass('register')} class="signUpBtn-Link"
					>Regístrarse</button
				>
			</div>
		</div>

		<div class="contenedor__login-register">
			<!-- Condicional para mostrar el formulario de login si showLogin es true -->
			{#if showLogin}
				<form action="?/login" method="POST" class="formulario__login" id="loginForm">
					<h2>Iniciar Sesión</h2>
					<input type="text" name="email" placeholder="Correo Electrónico" id="email" />
					<input type="password" name="password" placeholder="Contraseña" id="password" />
					<button type="submit">Entrar</button>
          <br>
          <a href="/contraseña-olvidada" data-sveltekit-reload>Olvidaste tu contraseña</a>
				</form>
			{:else}
				<!-- Si showLogin es false, mostramos el formulario de registro -->
				<form action="?/register" method="POST" class="formulario__register" id="registerForm">
					<h2>Regístrarse</h2>
					<input type="text" name="email" placeholder="Correo Electrónico" id="registerEmail" />
					<input type="text" name="username" placeholder="Usuario" id="username" />
					<input type="password" name="password" placeholder="Contraseña" id="registerPassword" />
					<button type="submit">Regístrarse</button>
				</form>
			{/if}
		</div>
	</div>
</main>

<style>
	.formulario__login,
	.formulario__register {
		display: block; /* Asegúrate de que los formularios estén visibles por defecto */
	}

  .error {
    margin: 10px;
    top: 0px;
    position: absolute;
    width: auto;
    height: auto;
    padding: 8px;
    background-color: red;
    color: white;
    z-index: 9999;
  }
</style>
