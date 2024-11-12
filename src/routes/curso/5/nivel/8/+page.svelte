<script lang="ts">
	import './nivel8.css';
	import Nav from '$lib/navbar1/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-8');
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Historia del Arte</title>
</svelte:head>

<Nav levelNumber={8} position="circle-3" />

<div class="container">
	<div class="text">
		<h1>El Arte Contemporáneo</h1>
		<hr />
		<br />
		<p>
			El <strong>arte contemporáneo</strong> abarca todas las expresiones artísticas producidas desde
			mediados del siglo XX hasta la actualidad. Es un movimiento dinámico y variado que rompe con las
			tradiciones del arte clásico y moderno, experimentando con nuevas ideas, medios y formatos. Los
			artistas contemporáneos exploran temas sociales, políticos y culturales relevantes, como la identidad,
			el género, el medio ambiente, la globalización y la desigualdad.
		</p>
		<br />
		<p>
			Una de sus principales características es la <strong>diversidad de técnicas</strong>, que
			incluyen no solo pintura y escultura tradicionales, sino también videoarte, instalaciones,
			performance, arte digital e intervenciones urbanas. Además, este tipo de arte suele involucrar
			al espectador, haciendo que la obra se vuelva interactiva o que el proceso creativo sea tan
			importante como el resultado final.
		</p>
		<br />
		<p>
			El arte contemporáneo también <strong>cuestiona las nociones de qué es el arte</strong> y qué
			puede considerarse una obra artística. En muchas ocasiones, el concepto detrás de la obra es
			más relevante que su estética, lo que da lugar a movimientos como el
			<a href="https://es.wikipedia.org/wiki/Arte_conceptual">arte conceptual</a>.
		</p>
	</div>
	<div class="image">
		<img
			src="https://images.joseartgallery.com/158861/conversions/portrait-painting-thumb.jpg"
			alt=""
		/>
		<p>Pintura Contemporánea — Jose Art Gallery</p>
	</div>
</div>
<br />
<br />
<div class="timeline-container">
	<h1>Arte Moderno Vs Arte Contemporáneo</h1>
	<h1 class="title" style="font-size: 40px">¿Cuál es la diferencia?</h1>
	<hr />
	<br />
	<p>
		La diferencia entre el <strong>arte moderno</strong> y el <strong>arte contemporáneo</strong>
		tiene que ver principalmente con el momento en que surgieron y las ideas que cada uno explora.
		<strong>El arte moderno</strong>, que se desarrolló desde finales del siglo XIX hasta mediados
		del siglo XX, <strong>buscaba romper con las reglas tradicionales del arte clásico</strong>,
		experimentando con nuevas formas y estilos para expresar los sentimientos y perspectivas
		personales de los artistas. En este periodo surgieron movimientos como el
		<strong>cubismo</strong>, el <strong>surrealismo</strong> y el <strong>expresionismo</strong>,
		que se enfocaban más en la creatividad individual y la innovación en la forma que en el
		significado profundo.
	</p>
	<br />
	<p>
		Por otro lado, el <strong>arte contemporáneo</strong>, a diferencia del arte moderno,
		<strong>no sigue un solo estilo o enfoque</strong>, sino que es muy variado, utilizando desde
		pinturas y esculturas hasta instalaciones, performance y arte digital. Lo que define al arte
		contemporáneo es que los artistas <strong>no solo buscan innovar</strong>, sino también
		reflexionar sobre temas sociales, políticos y culturales actuales, como la identidad, la
		tecnología, el medio ambiente o la justicia social. Además, este tipo de arte suele invitar a la
		participación del público y muchas veces se enfoca más en las ideas detrás de la obra que en su
		aspecto visual.
	</p>
	<br />
	<br />
	<div class="collage-container">
		<h2>Algunos ejemplos de Arte Contemporáneo</h2>
		<div class="collage">
			<img
				src="https://pymstatic.com/135324/conversions/Bodega-de-Elciego-de-Frank-Gehry-default_webp.webp"
				alt=""
			/>
			<img
				src="https://pymstatic.com/135327/conversions/caja-metaisica-jorge-oteiza-default_webp.webp"
				alt=""
			/>
			<img
				src="https://pymstatic.com/135328/conversions/L%E2%80%99homme-qui-marche-de-Alberto-Giacometti-default_webp.webp"
				alt=""
			/>
			<img
				src="https://pymstatic.com/135330/conversions/Balloon-Dog,-de-Jeff-Koons-default_webp.webp"
				alt=""
			/>
			<img
				src="https://winegogh.es/wp-content/uploads/2023/05/Captura-de-pantalla-2023-05-19-a-las-10.54.10-a.%E2%80%AFm-1024x767.png.webp"
				alt=""
			/>
			<img
				src="https://winegogh.es/wp-content/uploads/2023/05/2019.084-zhang-peili-expand-constantly-1024x681.jpg.webp"
				alt=""
			/>
		</div>
	</div>
	<div class="art-container">
		<h2>Principales características del Arte Contemporáneo</h2>
		<p>
			Las principales características del arte contemporáneo se divide en tres categorías: <strong
				>Estilos y Técnicas, Enfoque y Concepto e Interacción y Experiencia.</strong
			> Algunas características de cada categoria son:
		</p>
		<br />
		<div class="conlist">
			<div class="title">Estilos y Técnicas</div>
			<hr />
			<br />
			<div class="list">
				<ul>
					<li>
						<strong>Pluralidad de estilos y técnicas:</strong> No sigue un estilo definido, mezclando
						pintura, escultura, instalaciones, videoarte y performance.
					</li>
					<br />
					<li>
						<strong>Uso de nuevas tecnologías:</strong> Integra herramientas digitales, inteligencia
						artificial, realidad aumentada y medios audiovisuales.
					</li>
				</ul>
			</div>
		</div>
		<div class="conlist">
			<div class="title">Enfoque y Concepto</div>
			<hr />
			<br />
			<div class="list">
				<ul>
					<li>
						<strong>Enfoque conceptual:</strong>Lo importante es la idea detrás de la obra, más allá
						de su apariencia estética o técnica.
					</li>
					<br />
					<li>
						<strong>Libertad creativa:</strong> No hay límites fijos sobre lo que puede ser considerado
						arte, permitiendo romper con las normas tradicionales.
					</li>
				</ul>
			</div>
		</div>
		<div class="conlist">
			<div class="title">Interacción y Experiencia</div>
			<hr />
			<br />
			<div class="list">
				<ul>
					<li>
						<strong>Interacción con el público:</strong> Muchas obras invitan a la participación activa
						del espectador, haciendo que este forme parte de la experiencia artística.
					</li>
					<br />
					<li>
						<strong>Temporalidad efímera:</strong> Algunas obras, como performances o intervenciones,
						existen solo por un tiempo limitado, priorizando la experiencia sobre la permanencia.
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

