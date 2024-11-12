<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar1/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from '$lib/IMAGES/historia/historia';

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
                <p>El arte ha sido <strong>una expresión clave de la humanidad a lo largo de los siglos.</strong> En este recorrido, exploraremos dos épocas fundamentales: el <strong>arte medieval</strong>, centrado en la <strong>espiritualidad</strong> y la <strong>arquitectura religiosa</strong>, y el <strong>arte antiguo</strong>, marcado por la <strong>búsqueda de la perfección</strong> y el <strong>equilibrio</strong>. Acompáñanos  en este viaje visual por algunas de las obras y estilos más influyentes de estas épocas que moldearon la historia del arte.</p>
            </div>
        </div>

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>Catedral de Notre-Dame de París (Francia, siglo XII-XIV):</strong> La Catedral de Notre-Dame es uno de los máximos exponentes de la arquitectura gótica. Situada en el corazón de París, fue construida entre los siglos XII y XIV, siendo conocida por su impresionante fachada occidental, sus altas torres gemelas y el uso innovador de los arbotantes, que permitieron elevar la estructura y llenar los interiores con luz a través de sus enormes vitrales.</p>
            </div>
        </div>

        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>El Tapiz de Bayeux (Francia, siglo XI):</strong> Esta obra es una pieza monumental del bordado medieval, de casi 70 metros de largo, que narra los eventos que llevaron a la conquista normanda de Inglaterra en 1066. Realizado en lino bordado con lana de colores, el tapiz muestra más de 70 escenas con detalles minuciosos de la Batalla de Hastings y otros acontecimientos clave.</p>
            </div>
        </div>

        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>La Portada de la Basílica de San Marcos (Venecia, Italia, siglo XI):</strong> La Basílica de San Marcos es un ejemplo sobresaliente de arte y arquitectura bizantina en el mundo occidental. Su impresionante fachada está decorada con mosaicos dorados que brillan a la luz del sol, mientras que el interior está ricamente decorado con imágenes sacras que narran historias del Antiguo y Nuevo Testamento.</p>
            </div>
        </div>

        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>Las miniaturas de los Evangelios de Lindisfarne (Inglaterra, siglo VIII):</strong> Este manuscrito iluminado es uno de los mejores ejemplos del arte insular celta, que floreció en las islas británicas tras la retirada del Imperio Romano. El libro, producido por monjes en la isla de Lindisfarne, combina elementos cristianos y paganos en su decoración, con complejos entrelazados, figuras geométricas y símbolos de animales que acompañan los textos sagrados.</p>
            </div>
        </div>

        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>El Pórtico de la Gloria en la Catedral de Santiago de Compostela (España, siglo XII):</strong> Esta obra escultórica, situada en la entrada occidental de la catedral, es una de las más representativas del arte románico. El Pórtico de la Gloria fue creado por el maestro Mateo y representa el Juicio Final, con figuras de Cristo, los Apóstoles y los Profetas. La escultura muestra el estilo románico en su plenitud, con figuras estáticas pero llenas de simbolismo.</p>
            </div>
        </div>

        <div bind:this={slides[6]} class="slide">
            <img src={img6} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>La Gran Pirámide de Giza (Egipto, siglo XXVI a.C.):</strong> La Gran Pirámide de Giza es el monumento más famoso de las pirámides de Egipto y una de las Siete Maravillas del Mundo Antiguo. Construida como tumba para el faraón Keops, la pirámide fue construida hace más de 4.500 años y sigue siendo la estructura de piedra más grande del mundo.</p>
            </div>
        </div>

        <div bind:this={slides[7]} class="slide">
            <img src={img7} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>El Partenón (Atenas, Grecia, siglo V a.C.):</strong> El Partenón es un templo dedicado a la diosa Atenea, situado en la Acrópolis de Atenas. Fue construido en el siglo V a.C. durante el apogeo de la civilización griega y representa la cima de la arquitectura dórica. Aunque muchas de sus esculturas han sido removidas o dañadas, el edificio en sí es un símbolo de la búsqueda griega por la perfección en las proporciones arquitectónicas.</p>
            </div>
        </div>

        <div bind:this={slides[8]} class="slide">
            <img src={img8} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>El Discóbolo (Grecia, siglo V a.C.):</strong> Esta famosa escultura, creada por el artista Mirón, representa a un atleta en el acto de lanzar un disco. El Discóbolo es un ejemplo perfecto de la búsqueda de los griegos por capturar el movimiento y la proporción ideal en el cuerpo humano. A través de la tensión muscular y la postura dinámica, Mirón logró captar no solo la acción del momento, sino también la armonía y el equilibrio que eran fundamentales.</p>
            </div>
        </div>

        <div bind:this={slides[9]} class="slide">
            <img src={img9} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>La Venus de Milo (Grecia, siglo II a.C.):</strong> Descubierta en la isla de Milo, esta estatua de Afrodita es un ejemplo icónico de la escultura helenística. Aunque le faltan los brazos, la estatua es famosa por su belleza idealizada, con un torso perfectamente modelado y una expresión serena. La obra  es un símbolo de la habilidad griega para combinar la perfección anatómica con una emoción contenida.</p>
            </div>
        </div>

        <div bind:this={slides[10]} class="slide">
            <img src={img10} class="slide-img" alt="" />
            <div class="text-overlay">
                <p><strong>El Altar de Pérgamo (Berlín, siglo II a.C.):</strong> Este monumental altar, que fue descubierto en Pérgamo (actual Turquía), es famoso por su friso que narra las guerras de los dioses contra los gigantes. La obra es una muestra de la maestría helenística en el arte de relieves, donde se combinan la narrativa épica con un profundo sentido de la emoción.</p>
            </div>
        </div>
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
