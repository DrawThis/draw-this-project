<script lang="ts">
	import '$lib/CSS/acerca de.css'
	import { logo } from '$lib/IMAGES/todas';
</script>

<svelte:head>
	<title>Conoce la historia de Draw This</title>
</svelte:head>

<div class="header-container">
	<div class="header">
		<h1>Acerca de Nosotros</h1>
	</div>
</div>

<a href="/landing-page" data-sveltekit-reload>
	<button class="back">
		<svg
			height="16"
			width="16"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1024 1024"
		>
			<path
				d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.009120-223.009120c-3.837398-3.837398-5.996574-9.046027-5.996574-14.469550 0-5.433756 2.159176-10.632151 5.996574-14.469550l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
			></path>
		</svg>
		<span>Volver</span>
	</button>
</a>
<div class="body">
	<br />
	<br />

	<div class="letters">
		<p class="black">
			Bienvenidos a Draw This, una marca no registrada que nació de la pasión y creatividad de un
			grupo de estudiantes con un objetivo común: llevar el arte a nuevas alturas. Somos un equipo
			de jóvenes apasionados por la expresión artística, y estamos aquí para compartir nuestra
			visión y obras con el mundo.
		</p>
		<br />

		<div class="container-box">
			<div class="info-box">
				<h2>Nuestra Historia</h2>
				<br />
				<p>
					Draw This empezó como un proyecto que nuestra docente nos propuso en Media Técnica. Aunque
					al principio no todos estábamos muy interesados en el arte, poco a poco fuimos explorando
					este mundo creativo. Lo que comenzó como una tarea terminó convirtiéndose en una
					oportunidad para descubrir nuevas formas de expresión, desde la pintura y la historia del
					arte, hasta el Pixel Art y la anatomía.
				</p>
			</div>

			<div class="info-box">
				<h2>Nuestra Misión</h2>
				<br />
				<p>
					En Draw This, creemos en la belleza de la diversidad artística y en el poder de la
					expresión individual. Nuestra misión es proporcionar una plataforma para que los artistas
					emergentes y experimentados compartan sus obras y se inspiren mutuamente. Creemos en la
					comunidad y en la colaboración como impulsores del crecimiento creativo.
				</p>
			</div>

			<div class="info-box">
				<h2>Nuestro Compromiso con la Creatividad</h2>
				<br />
				<p>
					En el corazón de Draw This está nuestro compromiso inquebrantable con la creatividad.
					Queremos romper las barreras convencionales y explorar nuevos horizontes artísticos. Nos
					esforzamos por ser una fuente de inspiración constante para nuestros seguidores,
					alentándolos a descubrir su propia voz artística y a atreverse a ser diferentes.
				</p>
			</div>
		</div>
		<div class="words">
			<div class="mini-card">
				<h2>Nuestro Equipo</h2>
				<p>
					Draw This es posible gracias a nuestro equipo, cada una con perspectivas y habilidades
					únicas. Juntos, trabajamos incansablemente para nutrir y fomentar el talento artístico en
					todas sus formas.
				</p>
				<ul>
					<li>
						<h3>Cristian Uribe</h3>
						<h5>Programador</h5>
					</li>
					<li>
						<h3>Camilo Uribe</h3>
						<h5>Diseñador</h5>
					</li>
					<li>
						<h3>Harol Stiven Holguin</h3>
						<h5>Programador</h5>
					</li>
					<li>
						<h3>Sebastián Arévalo</h3>
						<h5>Programador</h5>
					</li>
				</ul>
			</div>
			<div class="mini-words">
				<br />
				<h2>Únete a Nosotros</h2>
				<br />
				<p>
					Ya seas un artista apasionado o simplemente alguien que aprecia el arte en todas sus
					manifestaciones, te invitamos a unirte a nuestra comunidad. Explora nuestras obras,
					comparte tus creaciones y sé parte de esta emocionante aventura artística.
				</p>
				<br />
				<img src={logo} alt="" />
			</div>
		</div>

		<h3 class="black">
			¡Gracias por ser parte de Draw This y por apoyar a los artistas emergentes de todo el mundo!
		</h3>
	</div>
</div>
