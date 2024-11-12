<script lang="ts">
	import '$lib/CSS/inicio.css';
	import logo from '$lib/IMAGES/IMG-20231013-WA0009.jpg';
	import Icon from '@iconify/svelte';
	export let form: { credentials?: boolean; user?: string } = {};

	let isPopupVisible1 = false;
	let isPopupVisible2 = false;
	let Terms = false;
	let rightPanelActive = false;

	let passwordInput1: HTMLInputElement;
	let passwordInput2: HTMLInputElement;
	let passwordType1 = 'password';
	let passwordType2 = 'password';

	function togglePopup1() {
		isPopupVisible1 = !isPopupVisible1;
		if (!isPopupVisible1) {
			Terms = true;
		}
	}

	function togglePopup2() {
		isPopupVisible2 = !isPopupVisible2;
	}

	function register() {
		rightPanelActive = true;
	}

	function login() {
		rightPanelActive = false;
	}

	function togglePassword(inputNumber: number) {
		if (inputNumber === 1) {
			passwordType1 = passwordType1 === 'password' ? 'text' : 'password';
		} else if (inputNumber === 2) {
			passwordType2 = passwordType2 === 'password' ? 'text' : 'password';
		}
	}

	let showError = true;

	function closeError() {
		showError = false;
	}
</script>

<svelte:head>
	<title>Bienvenido a Draw This</title>
</svelte:head>

{#if form?.credentials && showError}
	<div class="error">
		<Icon icon="carbon:warning" class="error-icon" />
		<div class="error-title">Correo o contraseña inválido</div>
		<Icon icon="material-symbols:close" class="error-close" onclick={closeError} />
	</div>
{/if}

{#if form?.user && showError}
	<div class="error">
		<Icon icon="carbon:warning" class="error-icon" />
		<div class="error-title">El correo ya se encuentra registrado</div>
		<Icon icon="material-symbols:close" class="error-close" onclick={closeError} />
	</div>
{/if}

<div class="container" class:right-panel-active={rightPanelActive}>
	<div class="form-container login-container">
		<img src={logo} alt="" />

		<!--FORMULARIO DE INICIO DE SESIÓN-->

		<form action="?/login" method="POST">
			<h1>Inicia Sesión</h1>
			<div class="input-box">
				<label class="input-label" for="emailInput">Correo Electrónico</label>
				<input type="email" name="email" placeholder="example@gmail.com" required id="emailInput" />
				<Icon icon="line-md:email-alt-twotone" class="i" />
			</div>

			<div class="input-box">
				<label class="input-label" for="passwordInput1">Contraseña</label>
				<input
					bind:this={passwordInput1}
					type={passwordType1}
					name="password"
					placeholder="Password123"
					required
					minlength="4"
					maxlength="18"
					id="passwordInput1"
				/>
				<button
					type="button"
					class={passwordType1 === 'password' ? 'watch-off' : 'watch'}
					on:click={() => togglePassword(1)}
					aria-label="Toggle password visibility"
					on:keypress={(e) => e.key === 'Enter' && togglePassword(1)}
					><Icon
						icon={passwordType1 === 'password' ? 'line-md:watch-off' : 'line-md:watch'}
					/>
				</button>
			</div>
			<div class="content">
				<div class="checkbox">
					<input type="checkbox" id="checkbox" name="remember"/>
					<label for="checkbox">Recuerdame</label>
				</div>
				<div class="pass-link">
					<a href="/peticion-correo" data-sveltekit-reload data-sveltekit-preload-data="tap"
						>Olvidaste tu Contraseña?</a
					>
				</div>
			</div>
			<button class="send" type="submit">Inicio</button> <!--BOTON DE INICIO DE SESIÓN-->
			<span class="line">Ó</span>
			<div class="social-container">
				<a href="#guest" class="social" on:click={togglePopup2} data-sveltekit-reload data-sveltekit-preload-data="tap"
					><Icon icon="line-md:person-search-filled" class="e" />ㅤModo Invitado</a
				>
			</div>
			<p class="draw">DrawThis <span>© 2024</span></p>
		</form>
	</div>

	<div class="form-container register-container">
		<img src={logo} alt="" />

		<!--FORMULARIO DE REGISTRO-->

		<form action="?/register" method="POST">
			<h1>Registrate</h1>
			<div class="input-box">
				<label class="input-label" for="usernameInput">Usuario</label>
				<input
					type="text"
					name="username"
					placeholder="User123"
					required
					minlength="4"
					maxlength="16"
					id="usernameInput"
				/>
				<Icon icon="line-md:person-twotone" class="i" />
			</div>

			<div class="input-box">
				<label class="input-label" for="registerEmailInput">Correo Electrónico</label>
				<input
					type="email"
					name="email"
					placeholder="example@gmail.com"
					required
					id="registerEmailInput"
				/>
				<Icon icon="line-md:email-alt-twotone" class="i" />
			</div>

			<div class="input-box">
				<label class="input-label" for="registerPasswordInput">Contraseña</label>
				<input
					bind:this={passwordInput2}
					type={passwordType2}
					name="password"
					placeholder="Password123"
					required
					minlength="4"
					maxlength="18"
					id="registerPasswordInput"
				/>
				<button
					type="button"
					class={passwordType2 === 'password' ? 'watch-off' : 'watch'}
					on:click={() => togglePassword(2)}
					aria-label="Toggle password visibility"
					on:keypress={(e) => e.key === 'Enter' && togglePassword(2)}
					><Icon
						icon={passwordType2 === 'password' ? 'line-md:watch-off' : 'line-md:watch'}
					/></button
				>
			</div>

			<div class="terms-checkbox">
				<input type="checkbox" id="terms-checkbox" required bind:checked={Terms} />
				<label for="terms-checkbox"></label>
				<span class="small-text">Acepto los</span><a href="#terms" on:click={togglePopup1}
					>Términos y Condiciones</a
				>
			</div>
			<button class="send" type="submit">Registro</button> <!--BOTON DE REGISTRO-->
			<br>
			<br>
			<p class="draw">DrawThis <span>© 2024</span></p>
		</form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 class="title">Bienvenido a <br /> Draw This</h1>
				<p>Sí ya tienes una cuenta, inicia sesión aquí</p>
				<button class="ghost" on:click={login}>
					<Icon icon="line-md:chevron-small-triple-left" class="a" />
					Inicia
				</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 class="title">Inicia tu cuenta <br /> de Draw This</h1>
				<p>Sí no tienes una cuenta, regístrate aquí</p>
				<button class="ghost" on:click={register}>
					Registrarse
					<Icon icon="line-md:chevron-small-triple-right" class="a" />
				</button>
			</div>
		</div>
	</div>
</div>

{#if isPopupVisible1}
	<div id="myPopup" class="popup show-popup">
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

{#if isPopupVisible2}
	<div id="myPopup2" class="popup show-popup">
		<div class="popup-content">
			<div class="header-card">
				<h2>¿Estas seguro de usar el Modo Invitado?</h2>
				<span
					role="button"
					class="close"
					on:click={togglePopup2}
					tabindex="0"
					on:keypress={(e) => e.key === 'Enter' && togglePopup2()}>&times;</span
				>
			</div>
			<div class="body-card">

				<p>
					Ten en cuenta que tendrás acceso limitado a la plataforma y a los cursos, algunas de estas limitaciones son:
				</p>

				<ul>
					<li><p>Acceso muy limitado a los cursos.</p></li>
					<li><p>Tu sesión no será guardada, por lo que tendrás que iniciar sesión nuevamente.</p></li>
					<li><p>No tendrás acceso a los materiales creativos</p></li>
					<li><p>Serás reconocido como "Invitado" y no por tu nombre de usuario</p></li>
				</ul>
			</div>
			<footer class="popup-footer">
				<a href="/landing-page" data-sveltekit-reload data-sveltekit-preload-data="tap">
					<button class="button">Acepto</button>
				</a>
			</footer>
		</div>
	</div>
{/if}


