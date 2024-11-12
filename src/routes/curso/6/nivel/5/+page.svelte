<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar6/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5, img6, img7 } from '$lib/IMAGES/anatomia/anatomia';

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
                <p>El estudio de la <strong>anatomía en el arte</strong> es una herramienta esencial para cualquier artista que desee representar la figura humana con autenticidad y precisión. No se trata solo de trazar líneas, sino de comprender la <strong>estructura interna</strong> que da vida a cada forma. Al explorar los componentes básicos del cuerpo humano, como las proporciones, la masa muscular y la dinámica de movimiento, podemos enriquecer nuestra <strong>percepción artística</strong>. Por ello, descubriremos <strong>aspectos clave</strong> que mejorarán nuestras habilidades de dibujo.</p>
            </div>
        </div>
        

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>1. Proporciones del cuerpo humano:</strong> Las proporciones entre las diferentes partes del cuerpo son fundamentales para lograr una figura armoniosa y creíble. Por ejemplo, la cabeza es generalmente una fracción del tamaño del torso, y el largo de los brazos debe coincidir con la longitud del torso en estado de reposo. Estudiar estas proporciones te ayudará a evitar distorsiones, logrando figuras que se perciban anatómicamente correctas y visualmente equilibradas.</p>
            </div>
        </div>
        
        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>2. Estructura ósea como base:</strong> La estructura ósea es el esqueleto que da soporte al cuerpo y determina tanto la postura como los movimientos posibles. Conocer la posición y función de los huesos principales, como la columna, la pelvis y las extremidades, te permite construir figuras con mayor realismo y estabilidad. Esta base también te ayuda a comprender cómo se articulan y sostienen los músculos en torno al esqueleto, logrando poses más naturales y dinámicas.</p>
            </div>
        </div>
        
        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>3. Masa y forma muscular:</strong> Los músculos proporcionan volumen y permiten que el cuerpo realice movimientos complejos. Comprender la disposición y función de los grupos musculares principales, como el deltoides, los bíceps y los músculos de las piernas, te permitirá añadir profundidad y realismo. Al estudiar cómo se contraen y expanden los músculos según la postura, podrás crear figuras anatómicas que transmitan energía, peso y tensión.</p>
            </div>
        </div>
        
        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>4. Detalle en zonas específicas:</strong> Algunos detalles específicos como pliegues, prominencias óseas y arrugas pueden dar a tu dibujo un toque de realismo adicional. Áreas como las manos, pies, rostro y cuello tienen características distintivas que requieren una observación más detallada. Añadir estos detalles puede transformar un dibujo básico en uno detallado y realista, revelando la estructura subyacente de huesos y músculos y mostrando el carácter y la individualidad del sujeto.</p>
            </div>
        </div>
        
        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>5. Referencias confiables:</strong> Usar fuentes visuales como libros de anatomía, modelos y fotos te permite captar la complejidad de las estructuras anatómicas con precisión. Estas referencias son cruciales para obtener proporciones correctas y entender cómo el cuerpo se adapta a diferentes posiciones y gestos. Trabajar con referencias te ayudará a perfeccionar tu técnica y a ganar confianza en tus representaciones anatómicas, además de hacer que tus figuras sean más creíbles y detalladas.</p>
            </div>
        </div>
        
        <div bind:this={slides[6]} class="slide">
            <img src={img6} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>6. Perspectiva y volumen:</strong> La capacidad de representar el cuerpo humano desde diferentes ángulos mejora la tridimensionalidad en tus dibujos. La perspectiva permite captar cómo las partes del cuerpo se ven más grandes o pequeñas según su cercanía al observador. Practicar con formas simples en perspectiva y luego aplicarlas al cuerpo humano ayuda a desarrollar una percepción espacial sólida, lo cual es esencial para crear figuras con volumen y profundidad.</p>
            </div>
        </div>
        
        <div bind:this={slides[7]} class="slide">
            <img src={img7} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>7. Uso de sombras y luces:</strong> La correcta aplicación de sombras y luces añade tridimensionalidad al dibujo anatómico. Las sombras permiten definir el relieve de los músculos y las curvas del cuerpo, mientras que la luz resalta las partes que están en posición más elevada. Entender cómo las sombras y luces interactúan con las superficies anatómicas también ayuda a crear una sensación de peso y volumen, logrando figuras más expresivas y realistas.</p>
            </div>
        </div> 
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
