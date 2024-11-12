<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar5/navbar.svelte';
    import Next from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('nivel-2');
  });
</script>

<Nav levelNumber={2} position="circle-1"/>

<div class="container">
    <div class="text">
      <h1>La Perspectiva</h1>
      <hr>
      <br>
      <p>La <strong>perspectiva</strong> es una técnica visual que representa profundidad y espacio tridimensional en una <strong>superficie bidimensional</strong>, como el papel o el lienzo. Nació de la observación de cómo los objetos se ven en el mundo real: más pequeños y menos definidos a medida que se alejan del observador. A través de la perspectiva, los artistas pueden reproducir en una imagen cómo vemos los objetos en el espacio, dándoles <strong>proporción y ubicación</strong> coherentes en relación con otros elementos.</p>
      <br>
      <p>El principio de la perspectiva está profundamente arraigado en la manera en que funciona nuestra percepción. Nuestros ojos ven el mundo en tres dimensiones, y nuestro cerebro procesa esas señales para entender las distancias y tamaños relativos de los objetos. La perspectiva, entonces, no es solo una técnica artística, sino una <strong>simulación</strong> de la manera en que el cerebro <strong>interpreta la profundidad y la distancia</strong>.</p>
      <br>
      <p>La perspectiva fue un descubrimiento revolucionario, ya que permitía una representación visual precisa de escenas complejas. Los artistas comenzaron a aplicar reglas matemáticas para calcular cómo representar los objetos en un plano según su distancia y posición, lo cual les permitió crear una ilusión convincente de <strong>profundidad y espacio</strong> en sus obras.</p>
    </div>
    <div class="image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLidVRKNED00ChDFn16EJap2RI0fltwprYw&s" alt="">
      <p>Sacra Conversación de Pierro della Francesa</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>¿Cómo funciona la Perspectiva?</h1>
	<div class="info-container">
		<div class="info-box">
			<Icon icon="geo:turf-point-on-line" class="info-logo" />
			<p class="info-text"><strong>Punto de fuga:</strong> Es el punto en el horizonte donde las líneas paralelas parecen juntarse, creando la sensación de profundidad en una imagen.</p>
		</div>
		<div class="info-box">
			<Icon icon="icon-park-twotone:scale-one" class="info-logo" />
			<p class="info-text"><strong>Escala proporcional:</strong> Los objetos disminuyen de tamaño en la imagen según su distancia, haciendo que los más alejados se vean más pequeños.</p>
		</div>
		<div class="info-box">
			<Icon icon="pepicons-print:line-y-off" class="info-logo" />
			<p class="info-text"><strong>Líneas de convergencia:</strong> Son las que se extienden hacia el punto de fuga. Permiten que los objetos cercanos se vean más grandes y los lejanos más pequeños.</p>
		</div>
	</div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de Perspectiva</h2>
        <div class="collage">
            <img src="https://www.21-draw.com/wp-content/uploads/2023/09/school-of-athen-example-of-perspective-in-art.webp" alt="">
            <img src="https://www.21-draw.com/wp-content/uploads/2023/09/arial-perspective.webp" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJ0b1sThITlDR7t5ptx_BJQTuYFd27p-xAQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtmo7kU6oS044KLPiQboSDWtXzHC4GcOjOA&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfmgjlk7vtRZg2xLMNYsyWNzBFVo2AIGwlw&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtCosM7cprAgwytG_lEvVOFKuFaeXNL75Zg&s" alt="">
        </div>
    </div>
    <div class="perspective-container">
        <br>
        <div class="conlist">
            <div class="title">Aspectos principales de la perspectiva en el dibujo:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Uso del punto de fuga para crear profundidad y dirigir la vista del observador.</li>
                    <br>
                    <li>Aplicación de líneas de convergencia para dar la ilusión de distancia entre los objetos.</li>
                    <br>
                    <li>Escala proporcional para mostrar cómo los objetos se reducen de tamaño al alejarse.</li>
                    <br>
                    <li>Creación de volumen y tridimensionalidad mediante la colocación y tamaño de los elementos.</li>
                    <br>
                    <li>Estudio de cómo la posición y la distancia afectan la forma de los objetos en el espacio.</li>
                    <br>
                    <li>Simulación de profundidad con diferentes niveles de detalle y contraste en el dibujo.</li>
                </ul>
            </div>
        </div>
        <div class="conlist">
            <div class="title">Herramientas comunes para trabajar la perspectiva:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Regla para trazar líneas de convergencia y puntos de fuga.</li>
                    <br>
                    <li>Lápiz de grafito para ajustar detalles y crear sombras que sugieren volumen.</li>
                    <br>
                    <li>Papel de dibujo para experimentar con líneas y profundidad.</li>
                    <br>
                    <li>Cuadrícula o compás para proporciones precisas en composiciones complejas.</li>
                </ul>
            </div>     
        </div>
        <div class="conlist">
            <div class="title">Ejercicios básicos para practicar perspectiva:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Dibujar una calle con edificios que se alejan hacia un punto de fuga.</li>
                    <br>
                    <li>Representar objetos de distintos tamaños según su distancia en una escena.</li>
                    <br>
                    <li>Experimentar con figuras geométricas en diferentes posiciones y profundidades.</li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>
