<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar2/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5 } from '$lib/IMAGES/dibujo/dibujo';

    onMount(() => {
        document.body.classList.add('nivel-5');
        showSlide(currentSlide); // Mostrar la diapositiva inicial
    });

    let currentSlide = 0;
    const slides: HTMLElement[] = [];

    // Manejo de la navegación
    function showSlide(n: number) {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
            slide.classList.toggle('active', index === n);
        });
    }

    function plusSlides(n: number) {
        currentSlide += n;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }
</script>

<Nav levelNumber={5} position="circle-2" />

<div class="container">
    <div class="slider-container">
        <div bind:this={slides[0]} class="slide">
            <img src={img0} class="slide-img" alt="" />
            <div class="text-overlay">
                <p>El dibujo es una de las formas de expresión más <strong>antiguas y universales</strong> del ser humano. Desde trazos simples en paredes prehistóricas hasta bocetos digitales actuales, ha evolucionado como una herramienta tanto artística como técnica. Para mejorar en esta disciplina, es esencial conocer y practicar <strong>distintas técnicas</strong> de dibujo, ya que cada una ofrece un enfoque único para representar objetos, ideas y emociones. aquí aprenderás <strong>5 técnicas de dibujo eficientes.</strong></p>
            </div>
        </div>

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>1. Dibujar a Diario: </strong> <p>La práctica constante es clave para mejorar. Dedica al menos 15-30 minutos al día a dibujar cualquier cosa que te rodee. No te preocupes por la perfección; enfócate en desarrollar soltura en tus trazos. Dibuja objetos cotidianos, como tu taza o tus manos, desde diferentes ángulos.</p>
            </div>
        </div>

        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>2. Encontrar la Mejor Perspectiva:</strong> <p>La técnica de perspectiva permite representar profundidad y distancia, eligiendo ángulos que añadan dinamismo al dibujo. Practica con perspectivas de 1, 2 o 3 puntos de fuga para paisajes urbanos o figuras humanas. </p>
            </div>
        </div>

        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>3. Tomar Fotos de Cosas Cotidianas:</strong> <p>Usar fotografías como referencia mejora la observación y ayuda a captar detalles que pasan desapercibidos a simple vista. No te limites a copiar; analiza las proporciones, sombras y formas presentes en las imágenes.</p>
            </div>
        </div>

        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>4. Buscar Inspiración:</strong> <p>Esta técnica implica explorar referencias y otras obras para estimular la creatividad, ayudándote a salir del bloqueo artístico. Experimenta con ideas que no se te habrían ocurrido de forma natural. La inspiración puede venir tanto de otros artistas como de objetos cotidianos.</p>
            </div>
        </div>

        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>5. Realizar Sombreado: </strong> <p>El sombreado aporta volumen y realismo a los dibujos, mostrando cómo la luz interactúa con los objetos. Practica con objetos simples bajo distintas fuentes de luz, observando cómo cambian las sombras según la posición.</p>
            </div>
        </div>
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
