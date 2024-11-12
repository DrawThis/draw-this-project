<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar4/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('nivel-2');
  });
</script>

<Nav levelNumber={2} position="circle-1"/>

<div class="container">
    <div class="text">
      <h1>El Pixel Art</h1>
      <hr>
      <br>
      <p>El <strong>pixel art</strong> es una técnica de arte digital que consiste en crear imágenes manipulando <strong>cada píxel de forma individual</strong>, lo que da como resultado gráficos con un estilo intencionalmente cuadriculado y de baja resolución. Este tipo de arte es conocido por su estética <strong>retro</strong>, ya que recuerda los gráficos de las primeras consolas de videojuegos y ordenadores de las décadas de 1980 y 1990, donde las limitaciones tecnológicas obligaban a trabajar con pocos colores y una definición limitada. Sin embargo, lejos de ser una simple recreación nostálgica, el pixel art requiere <strong>precisión, creatividad y atención al detalle</strong>, ya que cada píxel cuenta para transmitir <strong>formas, emociones y movimientos</strong>.</p>
      <br>
      <p>Además de su uso en videojuegos retro o indie, el pixel art se ha expandido a otros ámbitos, como <strong>animaciones, ilustraciones y memes</strong>, donde su estética minimalista sigue teniendo gran atractivo. A pesar de la sencillez aparente, el proceso de creación de pixel art puede ser muy complejo, ya que requiere una planificación cuidadosa para decidir la ubicación exacta de cada píxel y lograr efectos como <strong>sombreado, movimiento o volumen</strong>. Esto convierte a esta técnica en un desafío tanto artístico como técnico, donde el control del detalle es fundamental para lograr resultados impactantes.</p>
      <br>
    </div>
    <div class="image">
      <img src="https://i.redd.it/hbokxp0dccc61.jpg" alt="">
      <p>Ghostface Pixel Art de r/deadbydaylight</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>Historia del Pixel Art</h1>
    <hr>
    <div class="timeline">
        <div class="timeline-event">
            <div class="timeline-date">1970</div>
            <div class="timeline-content">
                <h2>Orígenes en la informática y videojuegos</h2>
                <p>El pixel art comenzó a tomar forma con los primeros sistemas de visualización gráfica, como los monitores monocromáticos y las primeras consolas de videojuegos. Durante esta época, cada píxel representaba una unidad gráfica indivisible en las pantallas, y los desarrolladores tenían que dibujar personajes, objetos y escenarios directamente manipulando píxeles individuales. Juegos como Pong (1972), que utilizaba solo puntos blancos en una pantalla negra, sentaron las bases de lo que sería el arte pixelado, aunque de forma rudimentaria.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">1980 - 1990</div>
            <div class="timeline-content">
                <h2>Consolas de 8 y 16 bits: la era dorada del pixel art</h2>
                <p>Durante la era de las consolas de 8 y 16 bits (como el NES de Nintendo, el Sega Genesis y la Super Nintendo), el pixel art alcanzó su máximo esplendor. La tecnología de estos dispositivos aún era limitada, lo que obligaba a los diseñadores a trabajar con un número reducido de píxeles y colores, utilizando cada píxel de manera precisa para dar vida a personajes y mundos complejos. Juegos icónicos como Super Mario Bros. (1985) y The Legend of Zelda (1986) ejemplifican cómo se podían crear gráficos detallados y estilizados dentro de estas restricciones.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Finales de los 90s</div>
            <div class="timeline-content">
                <h2>Declive con la llegada de los gráficos 3D</h2>
                <p>Con la llegada de la tecnología 3D en los videojuegos, el pixel art empezó a perder popularidad. Consolas como la PlayStation y la Nintendo 64 permitieron trabajar con gráficos poligonales, lo que marcó el inicio de una nueva era en la industria. Muchos estudios comenzaron a abandonar los gráficos 2D tradicionales en favor de los entornos tridimensionales más realistas, y durante algunos años el pixel art fue relegado a proyectos pequeños o plataformas portátiles, como el Game Boy.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">2010 - Actualidad</div>
            <div class="timeline-content">
                <h2>Renacimiento del pixel art: juegos indie y nostalgia</h2>
                <p>A partir de la década de 2010, el pixel art experimentó un renacimiento gracias al auge de los desarrolladores indie, quienes encontraron en este estilo una forma accesible de crear juegos atractivos sin necesidad de grandes recursos. Títulos como Minecraft (2011), Terraria (2011) y Stardew Valley (2016) demostraron que los gráficos pixelados podían ser atractivos para las audiencias modernas y que la nostalgia por los juegos clásicos seguía vigente.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Actualidad</div>
            <div class="timeline-content">
                <h2>Pixel art en la actualidad</h2>
                <p>Hoy en día, el pixel art sigue siendo muy popular, especialmente en juegos independientes y proyectos artísticos en línea. Herramientas como Aseprite, Piskel y Pixilart permiten a los creadores trabajar cómodamente con píxeles, mientras que comunidades en línea mantienen viva la pasión por este estilo. Aunque la tecnología actual no impone las mismas restricciones que antes, el pixel art sigue fascinando por su capacidad de transmitir emociones y complejidad a través de diseños aparentemente simples.</p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de Pixel Art</h2>
        <div class="collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNNgNFwW80YEXpHmQj70L_ENOArNe_atAkQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckrJG7DDvFchEkUh7RXNe-NKuWF8pC_PeVA&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6u9gfIB2BMvmDiC--64cDZRRGDNwG794hiA&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3-XCG2YcHo96x5I26c0RGMrCWzvisFoBDg&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vf28JeZGPOSLn1gHaeIrTxBVs6wjQiS1FQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOKM9GCNL6Hl1NYbOtRULTK-3XviFdMB3bw&s" alt="">
        </div>
    </div>
    <div class="art-container">
        <br>
        <div class="conlist">
            <div class="title">Características del pixel art:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Las imágenes se construyen en dimensiones pequeñas (por ejemplo, 32x32 o 64x64 píxeles), lo que obliga a representar detalles con una economía de elementos.</li>
                    <br>
                    <li>Se utilizan pocos colores para mantener la coherencia visual, lo cual es un legado de las limitaciones técnicas de las primeras consolas.</li>
					<br>
					<li>Cada píxel es un "cuadrado" que forma parte del diseño, y la cuadrícula de estos píxeles suele ser evidente.</li>
                </ul>
            </div>
        </div>
        <div class="conlist">
            <div class="title">Ejemplos comunes de pixel art</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li><strong>Sprites:</strong> Imágenes pequeñas que representan personajes, objetos o elementos en juegos.</li>
					<br>
					<li><strong>Tilesets:</strong> Bloques gráficos reutilizables para diseñar fondos o escenarios.</li>
					<br>
					<li><strong>Escenarios y fondos:</strong> Paisajes construidos a partir de mosaicos.</li>
                </ul>
            </div>     
        </div>
        <div class="conlist">
            <div class="title">Herramientas populares para hacer pixel art</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li><strong>Aseprite:</strong> Una aplicación especializada para pixel art y animación.</li>
                    <br>
                    <li><strong>Piskel:</strong> Editor en línea para crear sprites y animaciones.</li>
                    <br>
                    <li><strong>Pixilart:</strong> Plataforma con comunidad integrada para compartir obras.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>
