<script lang="ts">
	import "$lib/CSS/inicio.css";
	import logo from '$lib/IMAGES/IMG-20231013-WA0009.jpg';
	import { onMount } from 'svelte';

	// TARJETA DEL POPUP
	let isPopupVisible1 = false;
	let Terms = false;

	// Función para alternar la visibilidad del popup
	function togglePopup1() {
		isPopupVisible1 = !isPopupVisible1;

		if (!isPopupVisible1) {
			Terms = true;
		}
	}

	// CAMBIO DE INICIO A REGISTRO
	let container: HTMLElement;

	// Función para cambiar al panel de registro
	function register() {
		container.classList.add('right-panel-active');
	}

	// Función para volver al panel de inicio de sesión
	function login() {
		container.classList.remove('right-panel-active');
	}

	// Función para alternar la visibilidad de la contraseña
	const togglePassword = (passwordInput: HTMLInputElement, eyeIcon: HTMLElement) => {
		passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
		eyeIcon.classList.toggle('fa-eye-slash', passwordInput.type === 'password');
		eyeIcon.classList.toggle('fa-eye', passwordInput.type === 'text');
	};

	// Inicialización de eventos en el montaje del componente
	onMount(() => {
		// Obtener el contenedor
		container = document.getElementById('container') as HTMLElement;

		// Obtener los inputs y iconos de contraseña
		const passwordInput1 = document.getElementById('passwordInput1') as HTMLInputElement;
		const eyeIcon1 = document.getElementById('togglePassword1') as HTMLElement;
		eyeIcon1.addEventListener('click', () => togglePassword(passwordInput1, eyeIcon1));

		const passwordInput2 = document.getElementById('passwordInput2') as HTMLInputElement;
		const eyeIcon2 = document.getElementById('togglePassword2') as HTMLElement;
		eyeIcon2.addEventListener('click', () => togglePassword(passwordInput2, eyeIcon2));
	});

</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Bienvenido a Draw This</title>
	<link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
	<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" />
	<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</svelte:head>

<div id="container" class="container">
	<div class="form-container login-container">
		<img src={logo} alt="" />
		<form action="/landing-page">
			<h1>Inicia Sesión</h1>
			<div class="input-box">
				<label class="input-label" for="emailInput">Correo Electrónico</label>
				<input type="email" name="email" placeholder="example@gmail.com" required id="emailInput" />
				<i class="bx bxl-gmail"></i>
			</div>

			<div class="input-box">
				<label class="input-label" for="passwordInput1">Contraseña</label>
				<input
					type="password"
					name="password"
					placeholder="Password123"
					required
					minlength="4"
					maxlength="12"
					id="passwordInput1"
				/>
				<i class="far fa-eye-slash" id="togglePassword1"></i>
			</div>
			<div class="content">
				<div class="checkbox">
					<input type="checkbox" id="checkbox" />
					<label for="checkbox">Recuerdame</label>
				</div>
				<div class="pass-link">
					<a href="../HTML/peticion correo.html">Olvidaste tu Contraseña?</a>
				</div>
			</div>
			<button class="send">Inicio</button>
			<span>Ó usa tu cuenta</span>
			<div class="social-container">
				<a href="#google" class="social"><i class="lni lni-google"></i>ㅤCuenta de Google</a>
			</div>
			<p class="draw">DrawThis <span>© 2024</span></p>
		</form>
	</div>

	<div class="form-container register-container">
		<img src={logo} alt="" />
		<form action="/landing-page">
			<h1>Registrate</h1>
			<div class="input-box">
				<label class="input-label" for="usernameInput">Usuario</label>
				<input
					type="text"
					name="username"
					placeholder="User123"
					required
					minlength="4"
					maxlength="20"
					id="usernameInput"
				/>
				<i class="bx bxs-user" aria-hidden="true"></i>
			</div>

			<div class="input-box">
				<label class="input-label" for="registerEmailInput">Correo Electrónico</label>
				<input
					type="email"
					name="register_email"
					placeholder="example@gmail.com"
					required
					id="registerEmailInput"
				/>
				<i class="bx bxl-gmail" aria-hidden="true"></i>
			</div>

			<div class="input-box">
				<label class="input-label" for="registerPasswordInput">Contraseña</label>
				<input
					type="password"
					name="register_password"
					placeholder="Password123"
					required
					minlength="4"
					maxlength="12"
					id="registerPasswordInput"
				/>
				<i class="far fa-eye-slash" id="togglePassword2"></i>
			</div>

			<div class="terms-checkbox">
				<input type="checkbox" id="terms-checkbox" required bind:checked={Terms} />
				<label for="terms-checkbox"></label>
				<span class="small-text">Acepto los</span><a href="#terms" on:click={togglePopup1}
					>Términos y Condiciones</a
				>
			</div>
			<button class="send">Registro</button>
			<p class="draw">DrawThis <span>© 2024</span></p>
		</form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 class="title">Bienvenido a <br /> Draw This</h1>
				<p>Sí ya tienes una cuenta, inicia sesión aquí</p>
				<button class="ghost" on:click={login}
					>Inicia
					<i class="lni lni-arrow-left login"></i>
				</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 class="title">Inicia tu cuenta <br /> de Draw This</h1>
				<p>Sí no tienes una cuenta, regístrate aquí</p>
				<button class="ghost" on:click={register}
					>Registrarse
					<i class="lni lni-arrow-right register"></i>
				</button>
			</div>
		</div>
	</div>
</div>

{#if isPopupVisible1}
	<div id="myPopup" class="popup {isPopupVisible1 ? 'show-popup' : ''}">
		<div class="popup-content">
			<div class="header-card">
				<h2>Términos y Condiciones</h2>
				<span
					role="button"
					class="close"
					on:click={togglePopup1}
					tabindex="0"
					on:keypress={(e) => e.key === 'Enter' && togglePopup1()}>&times;</span
				>
			</div>
			<div class="body-card">
				<h2>1. Aceptación de los Términos</h2>

				<p>
					Al acceder y utilizar el curso de dibujo artístico Draw This, el usuario acepta cumplir y
					estar sujeto a estos términos y condiciones.
				</p>

				<h2>2. Contenido del Curso</h2>

				<p>
					El Curso incluye materiales didácticos, lecciones, ejercicios, y cualquier otro contenido
					relacionado con el dibujo artístico.
				</p>

				<h2>3. Ingreso</h2>

				<p>
					Para ingresar en el Curso, el usuario debe proporcionar información precisa y completa
					durante el proceso de registro. El usuario es responsable de mantener la confidencialidad
					de su información de inicio de sesión.
				</p>

				<h2>4. Propiedad Intelectual</h2>

				<p>
					Todo el contenido proporcionado en el Curso, incluyendo pero no limitado a videos,
					imágenes, textos y recursos, está protegido por derechos de propiedad intelectual y es
					propiedad exclusiva de Draw This y terceros. El usuario no tiene derecho a distribuir,
					reproducir o utilizar este contenido con fines comerciales sin permiso previo.
				</p>

				<h2>5. Responsabilidad del Usuario</h2>

				<p>
					El usuario es responsable de su propio progreso en el Curso y de completar su propio
					desempeño según lo indicado. Draw This no garantiza ningún resultado específico en
					términos de habilidades artísticas desarrolladas.
				</p>

				<h2>6. Política de Contenido</h2>

				<p>
					El usuario se compromete a no publicar contenido difamatorio, ilegal, ofensivo o
					inapropiado sobre el curso. Draw This se reserva el derecho de eliminar cualquier
					contenido que viole esta política y tomar medidas adecuadas contra el usuario.
				</p>

				<h2>7. Cambios en los Términos</h2>

				<p>
					Draw This se reserva el derecho de modificar estos términos y condiciones en cualquier
					momento. Los cambios serán notificados a los usuarios a través de la plataforma. La
					continuidad del uso del Curso después de los cambios constituye la aceptación de los
					nuevos términos.
				</p>
			</div>
			<footer class="popup-footer">
				<button class="button" on:click={togglePopup1}>Acepto</button>
			</footer>
		</div>
	</div>
{/if}
