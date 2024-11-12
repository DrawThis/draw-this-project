<script lang="ts">
    import './nivel5.css';
    import Nav from '$lib/navbar4/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';
    import { img0, img1, img2, img3, img4, img5, img6 } from '$lib/IMAGES/pixel/pixel';

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
                <p>El <strong>pixel art</strong> es una forma de arte digital que requiere precisión y creatividad, donde cada píxel cuenta para <strong>transmitir detalles</strong>. Al igual que en cualquier disciplina artística, dominarlo implica trabajar desde los conceptos básicos hasta técnicas más avanzadas. A través de seis pasos, inspirados en diferentes momentos del proceso artístico, aprenderás cómo llevar tus habilidades al siguiente nivel.</p>
            </div>
        </div>

        <div bind:this={slides[1]} class="slide">
            <img src={img1} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>1. Bocetar las Ideas:</strong> <p>Empieza con bocetos rápidos en papel o digitalmente para conceptualizar tus sprites. Definir las proporciones y siluetas claras desde el principio es crucial. No te preocupes por los detalles al inicio; enfócate en capturar la forma general.</p>
            </div>
        </div>

        <div bind:this={slides[2]} class="slide">
            <img src={img2} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>2. Trabajar con Sombras y Luces:</strong> <p>Usa luces y sombras estratégicamente para crear volumen y dar la ilusión de tridimensionalidad en objetos pequeños. Experimenta con colores de sombra que no sean simplemente más oscuros; utiliza tonos complementarios para un efecto más realista.</p>
            </div>
        </div>

        <div bind:this={slides[3]} class="slide">
            <img src={img3} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>3. Agregar Detalles y Texturas:</strong> <p>En pixel art, cada píxel cuenta, por lo que los detalles deben ser precisos y sutiles. Las texturas ayudan a dar más vida a objetos o personajes. Utiliza técnicas como dithering (difuminado por patrones de píxeles) para crear gradientes o texturas.</p>
            </div>
        </div>

        <div bind:this={slides[4]} class="slide">
            <img src={img4} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>4. Utilizar Programas Adecuados:</strong> <p>La creación de sprites para videojuegos es un ejercicio fundamental. Esto requiere diseñar personajes y objetos con movimiento fluido. Usa programas especializados como Aseprite o Piskel, que facilitan la creación de sprites cuadro a cuadro.</p>
            </div>
        </div>

        <div bind:this={slides[5]} class="slide">
            <img src={img5} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>5. Dominar la Perspectiva y Escala:</strong> <p>Aprender a trabajar con diferentes perspectivas, como la isométrica, y variar la escala de los personajes u objetos es esencial. Experimenta con vistas alejadas y cercanas para que el pixel art se vea consistente sin importar el nivel de zoom.</p>
            </div>
        </div>

        <div bind:this={slides[6]} class="slide">
            <img src={img6} class="slide-img" alt="" />
            <div class="text-overlay">
                <strong>6. Explorar la Teoría del Color:</strong> <p>Una paleta de colores bien seleccionada es clave para un pixel art atractivo. Al igual que en pintura, en pixel art es fundamental dominar el contraste y la armonía. Limita tu paleta para evitar sobrecargar la pieza. Trabajar con menos colores obliga a soluciones más creativas.</p>
            </div>
        </div>
    </div>
    <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
	<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
</div>

<a href="./6" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>
