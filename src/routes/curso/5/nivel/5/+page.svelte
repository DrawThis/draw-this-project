<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar2/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5 } from '$lib/IMAGES/perspectiva/perspectiva';

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
                <p>Entender la perspectiva va más allá de simplemente aplicar técnicas convencionales. Implica observar el mundo que nos rodea de manera <strong>más crítica</strong> y reconocer cómo la luz, la forma y la posición influyen en la <strong>percepción</strong> de los objetos. Aunque muchos conocen las reglas básicas de la perspectiva, hay conceptos menos explorados que pueden enriquecer nuestra práctica y abrir nuevas <strong>posibilidades creativas</strong>. Hoy, exploraremos algunos <strong>enfoques menos convencionales</strong> que pueden transformar la manera en que vemos y representamos muchos lugares del mundo.</p>
            </div>
        </div>

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>1. Efecto de colapso de líneas: </strong> En la naturaleza, las líneas paralelas no siempre son paralelas en la representación artística. Cuando observas un camino que se aleja, las líneas del camino parecen converger hacia un punto en el horizonte. Practica dibujar líneas que se “colapsen” en puntos de fuga para entender cómo se percibe la profundidad en la realidad.</p>
            </div>
        </div>

        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>2. Variación en el grosor de las líneas: </strong> Las líneas de objetos cercanos deben ser más gruesas y definidas, mientras que las que representan objetos lejanos deben ser más delgadas y tenues. Este detalle sutil puede ayudar a reforzar la sensación de profundidad y distancia en tus dibujos.</p>
            </div>
        </div>

        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>3. Perspectiva de la mirada: </strong> La perspectiva no solo depende de la posición física de los objetos, sino también de la perspectiva del observador. Practica dibujar un objeto desde diferentes ángulos y alturas de observación para comprender cómo cambia la perspectiva en función de tu posición.</p>
            </div>
        </div>

        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>4. Superficies curvadas y perspectivas complejas: </strong> No todas las superficies son planas. Los objetos curvados, como cilindros o esferas, requieren una comprensión especial de la perspectiva. Experimenta dibujando objetos curvados y observa cómo se distorsionan las líneas de perspectiva en relación con su forma.</p>
            </div>
        </div>

        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>5. Perspectiva inversa: </strong> A veces, es útil invertir la perspectiva para crear un efecto dramático. Esto significa que en lugar de dibujar objetos más pequeños a medida que se alejan, puedes jugar con la idea de agrandar un objeto en el fondo para atraer la atención o crear un efecto surrealista. Esta técnica puede añadir interés visual y provocar reflexiones sobre la percepción.</p>
            </div>
        </div>
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
