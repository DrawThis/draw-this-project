<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '$lib/CSS/landing page.css';

	let username = $page.url.searchParams.get('username') || 'Invitado';

	import {
		logo,
		logo1,	
		logo2,
		logo3,
		number1,
		number2,
		number3,
		image1,
		image2,
		image3
	} from '$lib/IMAGES/todas';
	import { slides } from '$lib/info/info';
	import Icon from '@iconify/svelte';

	let currentSlide = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = currentSlide === 4 ? 0 : currentSlide + 1;
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});

	// TARJETA DEL POPUP

	let isPopupVisible2 = false;

	function togglePopup2() {
		isPopupVisible2 = !isPopupVisible2;
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Conoce y Descubre más de Draw This</title>
	<link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
	<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</svelte:head>

<div class="menu-container">
	<nav>
		<img src={logo} alt="" class="logo" />
		<ul class="menu">
			<li>
				<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">Cursos</a>
			</li>
			<li><a href="#contact" data-sveltekit-preload-data="tap">Contacto</a></li>
			<li>
				<a href="/acerca-de" data-sveltekit-reload data-sveltekit-preload-data="tap">Acerca de</a>
			</li>
			<li><button on:click={togglePopup2} class="custom-button">Volver</button></li>
		</ul>
	</nav>

	{#if isPopupVisible2}
		<div id="myPopup" class="popup {isPopupVisible2 ? 'show-popup' : ''}">
			<div class="popup-content">
				<div class="header-card">
					<span
						role="button"
						class="close"
						on:click={togglePopup2}
						tabindex="0"
						on:keypress={(e) => e.key === 'Enter' && togglePopup2()}>&times;</span
					>
					<div class="content-card">
						<span class="title-card">¿Estás seguro de Salir?</span>
						<p class="message">Si es así, ¡esperamos que vuelvas <br /> pronto!</p>
					</div>
					<div class="actions">
						<a href="/" data-sveltekit-reload data-sveltekit-preload-data="tap">
							<button type="button" class="enviar">Salir</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="header">
	<div class="contenedor">
		<div class="header-texto">
			<h1>Bienvenido a <br /> <span>Draw This</span>, <br /> <div class="user">{username || 'Invitado'}!</div></h1>
			<br />
			<p>¡La Página que sacará tus dotes<br /> artísticos y los pondra a prueba!</p>
			<br />
			<br />
			<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">
				<button type="button" class="enviar-2">Ingresa a los Cursos</button>
			</a>
		</div>
		<div id="slider">
			<input type="radio" name="slider" id="s1" checked={currentSlide === 0} />
			<input type="radio" name="slider" id="s2" checked={currentSlide === 1} />
			<input type="radio" name="slider" id="s3" checked={currentSlide === 2} />
			<input type="radio" name="slider" id="s4" checked={currentSlide === 3} />
			<input type="radio" name="slider" id="s5" checked={currentSlide === 4} />

			{#each slides as slide}
				<label for={slide.id} id={`slide${slide.id[1]}`}>
					<img src={slide.image} alt="Slide" />
				</label>
			{/each}
		</div>
	</div>
</div>

<main>
	<section class="second">
		<h2>Explorando el Mundo a Través del Arte</h2>
		<p>
			Sumérgete en un viaje visual que fusiona la realidad con la fantasía. Descubre el poder
			transformador del arte mientras aprendes. ¡En esta travesía creativa cada dibujo cuenta una
			historia única!
		</p>

		<br />
		<br />

		<div class="info-container">
			<div class="info-box">
				<Icon icon="uis:layer-group" class="info-logo" />
				<p class="info-text">Más de 40 niveles disponibles para todos</p>
			</div>
			<div class="info-box">
				<Icon icon="uis:clock-three" class="info-logo" />
				<p class="info-text">Más de 5 horas de contenido para dibujar</p>
			</div>
			<div class="info-box">
				<Icon icon="gridicons:thumbs-up" class="info-logo" />
				<p class="info-text">No son necesarios conocimientos previos</p>
			</div>
		</div>

		<h2 class="text">Ventajas al usar Draw This</h2>
		<div class="cards">
			<div class="card">
				<Icon icon="mingcute:chess-fill" class="info" />
				<h3>Expresión personal y creatividad</h3>
				<p>
					El dibujo es una forma de expresión artística que permite a las personas transmitir sus
					pensamientos, sentimientos y experiencias de manera visual.
				</p>
			</div>
			<div class="card">
				<Icon icon="mingcute:emoji-fill" class="info" />
				<h3>Alivio del estrés y mejora del bienestar emocional</h3>
				<p>
					Dibujar puede servir como una forma de escape, permitiendo a las personas desconectarse
					del estrés diario y enfocarse en la creación artística.
				</p>
			</div>
			<div class="card">
				<Icon icon="ri:brain-2-fill" class="info" />
				<h3>Estimulación cognitiva</h3>
				<p>
					Dibujar implica la coordinación entre la mano y el ojo, lo que ayuda a desarrollar y
					mejorar habilidades motoras finas, fomentando la concentración y la percepción visual.
				</p>
			</div>
		</div>

		<div class="third">
			<h2>Lo que ofrecemos con Draw This:</h2>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number1} alt="" />
					</div>
					<h3>Lecciones Accesibles:</h3>
					<p>
						La plataforma ofrece una biblioteca de lecciones en video que cubren una amplia gama de
						técnicas y conceptos de dibujo. Están diseñadas para facilitar el aprendizaje de los
						usuarios de manera flexible y adaptada a sus necesidades.
					</p>
				</div>
				<div class="image">
					<img src={image1} alt="" />
				</div>
			</div>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number2} alt="" />
					</div>
					<h3>Ejercicios Prácticos:</h3>
					<p>
						Actividades y proyectos diseñados para poner en práctica lo aprendido en las lecciones.
						Estos ejercicios pueden incluir instrucciones detalladas y ejemplos para que los
						usuarios sigan y aprendan más a fondo.
					</p>
				</div>
				<div class="image">
					<img src={image2} alt="" />
				</div>
			</div>
			<div class="long-card">
				<div class="title">
					<div class="circle-2">
						<img src={number3} alt="" />
					</div>
					<h3>Materiales Didácticos:</h3>
					<p>
						Guías, videos, tutoriales y referencias visuales que los usuarios usen para completar las lecciones. Estos materiales son totalmente gratuitos y accesibles para todos.
					</p>
				</div>
				<div class="image">
					<img src={image3} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="last">
		<h2>Preguntas Frecuentes (FAQ)</h2>
		<br>
		<div class="faq-content">
			<div class="faq-question">
				<input id="q1" type="checkbox" class="panel" />
				<div class="plus">+</div>
				<label for="q1" class="panel-title">¿Necesito tener experiencia previa para unirme al curso?</label>
				<div class="panel-content">No, Draw This ofrece métodos de aprendizaje flexibles, diseñados para adaptarse tanto a principiantes como a personas con cierta experiencia en dibujo. Esto significa que cualquier usuario, sin importar su nivel, puede participar y beneficiarse del curso.</div>
			</div>

			<div class="faq-question">
				<input id="q2" type="checkbox" class="panel" />
				<div class="plus">+</div>
				<label for="q2" class="panel-title">¿Los cursos incluyen correcciones personalizadas?</label>
				<div class="panel-content">
					Lamentablemente, Draw This no cuenta actualmente con los recursos necesarios para ofrecer retroalimentación personalizada a los usuarios. Esto se debe a la limitación de personal y herramientas que permitirían una revisión detallada de cada trabajo presentado por los estudiantes.
				</div>
			</div>

			<div class="faq-question">
				<input id="q3" type="checkbox" class="panel" />
				<div class="plus">+</div>
				<label for="q3" class="panel-title">¿Se entregará algún certificado al finalizar los cursos?</label>
				<div class="panel-content">
					Sí, al finalizar el curso, Draw This entregará un certificado, pero este será un reconocimiento simbólico otorgado por la plataforma. El objetivo del certificado es motivar a los usuarios y reconocer su esfuerzo y dedicación al completar todas las lecciones y actividades propuestas.
				</div>
			</div>
		</div>
	</section>
	<br>
	<br>
	<br>
</main>

<footer id="contact">
	<div class="footer-content">
		<div class="contact-info">
			<h3>Contacto</h3>
			<p><i class="bx bxl-gmail"></i> drawthis6@gmail.com</p>
			<br />
			<p class="text-2">
				Todos los mensajes que se envien serán solo leidos por el equipo de Draw This, por favor no
				compartas información personal como contraseñas, direcciones, tarjetas de crédito, edad,
				etc.
			</p>
			<p class="text-2">
				Draw this no se hace responsable por robos de información personal, debido a que tu mensaje
				pasa por un dominio de terceros.
			</p>
			<p class="text-2">Gracias.</p>
			<p class="text-2" style="font-weight: 600">-El equipo de Draw This</p>
		</div>

		<div class="contact-form">
			<h3>Envíanos un mensaje</h3>
			<form action="https://formsubmit.co/drawthis6@gmail.com" method="POST">
				<div>
					<label for="name">Nombre:</label>
					<input type="text" id="name" name="name" placeholder="User123" required />
				</div>
				<div>
					<label for="email">Correo:</label>
					<input type="email" id="email" name="email" placeholder="example123@gmail.com" required />
				</div>
				<div>
					<label for="message">Mensaje:</label>
					<textarea id="message" name="message" placeholder="Escribe tu mensaje aquí" required
					></textarea>
				</div>
				<button type="submit" class="send">Enviar</button>
			</form>
		</div>
	</div>
</footer>
