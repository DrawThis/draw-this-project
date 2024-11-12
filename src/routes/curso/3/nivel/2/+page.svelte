<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar3/navbar.svelte';
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
      <h1>El Puntillismo</h1>
      <hr>
      <br>
      <p>El <strong>puntillismo</strong> es una técnica que surgió como una evolución del impresionismo a finales del siglo XIX, impulsada principalmente por los artistas franceses <a href="https://es.wikipedia.org/wiki/Georges_Seurat">Georges Seurat</a> y <a href="https://es.wikipedia.org/wiki/Paul_Signac">Paul Signac.</a> Esta técnica consiste en la aplicación de <strong>pequeños puntos de colores puros</strong> sobre el lienzo, en lugar de pinceladas continuas o mezclas de pigmentos en la paleta. La idea central es que, al observar la obra desde cierta distancia, los puntos se <strong>fusionan visualmente</strong> en la retina del espectador, generando una percepción de <strong>formas, colores, sombras y matices </strong> sin necesidad de combinar los tonos de forma directa.</p>
      <br>
      <p>El puntillismo se apoya en los principios de la teoría del color, aprovechando fenómenos como el contraste simultáneo y la <strong>mezcla óptica</strong> para dar mayor luminosidad cromática a las imágenes. En lugar de oscurecer los colores con pigmentos como en las técnicas tradicionales, se utilizan combinaciones de puntos claros y oscuros para sugerir sombras, luces y transiciones tonales.</p>
      <br>
      <p>Aunque el puntillismo no fue una técnica masivamente adoptada por otros movimientos, tuvo un impacto significativo en la <strong>evolución del arte moderno</strong>, influyendo en corrientes posteriores como el arte abstracto y el arte digital, donde la idea de descomponer una imagen en puntos es comparable al uso de píxeles.</p>
    </div>
    <div class="image">
      <img src="https://cdn.shopify.com/s/files/1/0637/4103/4721/files/seurat-torre-eiffel.jpg" alt="">
      <p>La Torre Eiffel de Georges Pierre Seurat</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>Elementos Fundamentales del Puntillismo</h1>
	<div class="info-container">
		<div class="info-box">
			<Icon icon="bi:brush-fill" class="info-logo" />
			<p class="info-text"><strong>Uso de puntos de colores puros:</strong> La pintura se compone de pequeños puntos aplicados de forma individual, sin mezclas anteriores aplicadas al lienzo.</p>
		</div>
		<div class="info-box">
			<Icon icon="tabler:brightness" class="info-logo" />
			<p class="info-text"><strong>Mezcla óptica:</strong> Los colores se combinan en la retina del espectador, creando formas y tonalidades cuando la obra se observa desde cierta distancia.</p>
		</div>
		<div class="info-box">
			<Icon icon="fluent-mdl2:color-solid" class="info-logo" />
			<p class="info-text"><strong>Luminosidad:</strong> La técnica busca lograr mayor brillo mediante contrastes de colores colocados lado a lado, en lugar de oscurecerlos con pigmentos.</p>
		</div>
	</div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de Puntillismo</h2>
        <div class="collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRVERgEYrA8bjGY9siERKZZ9fbaVgBDeF0A&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABQ9OVuBnomHJtCIpg03OShyP_5pPM9zT-w&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTMp4vs8BNI3xqg6qsyAg0LDGhpKqJILQMQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFxgsi6gPeIwNWxklnAWwwLtc9h4U-Jd_JQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4H9Zdi5zq6fktFgaahfH1MSKcNTGZVANkw&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeQ3hZQd8WwvDWiWyfnqIThf2L-5EmzKPLg&s" alt="">
        </div>
    </div>
    <div class="art-container">
        <br>
        <div class="conlist">
            <div class="title">Aplicaciones del puntillismo:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Se utiliza principalmente en paisajes y escenas naturales para resaltar efectos de luz y color.</li>
                    <br>
                    <li>Es efectivo en retratos, creando transiciones suaves sin mezclar pigmentos directamente.</li>
                    <br>
                    <li>Ha inspirado técnicas digitales modernas, como el uso de píxeles en imágenes computarizadas.</li>
                    <br>
                    <li>Es un recurso útil en el arte decorativo por su estética vibrante y llamativa.</li>
                </ul>
            </div>
        </div>
        <div class="conlist">
            <div class="title">Limitaciones del puntillismo:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Es una técnica muy demandante en tiempo debido a la precisión requerida para cada punto.</li>
                    <br>
                    <li>Pierde efectividad en composiciones pequeñas donde los puntos no pueden apreciarse bien.</li>
                    <br>
                    <li>No permite efectos bruscos o dinámicos, lo que puede limitar la expresividad.</li>
                    <br>
                    <li>Es difícil lograr detalles complejos sin sacrificar la claridad de la obra completa.</li>
                </ul>
            </div>     
        </div>
        <div class="conlist">
            <div class="title">Impacto del puntillismo en el arte moderno:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Influyó en el desarrollo del arte abstracto por su énfasis en la descomposición de formas.</li>
                    <br>
                    <li>Sirvió de inspiración para técnicas digitales, especialmente en la creación de gráficos pixelados.</li>
                    <br>
                    <li>Se considera un ejemplo temprano del enfoque científico en las artes visuales.</li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>
