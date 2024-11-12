<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar3/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5, } from '$lib/IMAGES/puntillismo/puntillismo';

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
                <p>El <strong>puntillismo</strong> es una técnica que exige un enfoque cuidadoso y deliberado en cada etapa del proceso creativo. Para lograr resultados exitosos, es esencial tener en cuenta varios factores que influyen en la <strong>calidad y el impacto visual de la obra</strong>. Cada uno de estos elementos contribuye a la forma en que se percibe la obra final y permite al artista experimentar con la <strong>luz, el color y la textura</strong> de maneras únicas. por ende, los siguientes <strong>5 aspectos a tener en cuenta</strong> en el puntillismo son indispensables.</p>
            </div>
        </div>

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>1. Control de Densidad:</strong> 
                <p>Es fundamental tener un control adecuado de la densidad de los puntos. La densidad influye en la percepción de luz y sombra en la obra, así como en el contraste general. Practica cómo agrupar y espaciar los puntos para lograr el efecto deseado.</p>
            </div>
        </div>
        
        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>2. Variedad de Tamaños y Formas:</strong> 
                <p>Utiliza diferentes tamaños y formas de puntos para agregar textura y profundidad a tu trabajo. Esto puede ayudar a crear una mayor complejidad visual y darle un carácter único a cada obra.</p>
            </div>
        </div>
        
        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>3. Uso de Color:</strong> 
                <p>Experimenta con la mezcla de colores utilizando puntos de diferentes tonos. La superposición de puntos de colores puede crear una amplia gama de efectos visuales y aumentar la riqueza cromática de la pieza.</p>
            </div>
        </div>
        
        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>4. Paciencia y Precisión:</strong> 
                <p>El puntillismo requiere tiempo y atención al detalle. Es importante trabajar con paciencia y asegurarse de que cada punto esté colocado de manera precisa para mantener la integridad de la imagen.</p>
            </div>
        </div>
        
        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>5. Superficie Adecuada:</strong> 
                <p>Utiliza un cuaderno o papel que sea adecuado para la técnica del puntillismo. El papel debe ser lo suficientemente resistente para soportar múltiples capas de puntos sin deteriorarse. Experimenta con diferentes texturas para ver cómo afectan el resultado final.</p>
            </div>
        </div>
        
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
