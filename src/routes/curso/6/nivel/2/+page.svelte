<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar6/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('nivel-2');
  });
</script>

<Nav levelNumber={2} position="circle-1"/>

<div class="container"> 
    <div class="text">
        <h1>La Anatomía en el Arte</h1>
        <hr>
        <br>
        <p>La <strong>anatomía en el arte</strong> es una disciplina fundamental para los artistas que desean representar el cuerpo humano de manera realista y expresiva. Comprender la estructura y el funcionamiento de los <strong>huesos y músculos</strong> permite a los artistas no solo captar la apariencia superficial del cuerpo, sino también <strong>plasmar posturas y movimientos</strong> con mayor precisión y naturalidad. Este conocimiento anatómico proporciona una base sólida para agregar detalles y <strong>expresar emociones</strong>, logrando así que las ilustraciones tengan una conexión visual y emocional más profunda con quienes las observan.</p>
        <br>
        <p>Desde la <strong>antigüedad</strong>, artistas como <a href="https://es.wikipedia.org/wiki/Leonardo_da_Vinci">Leonardo da Vinci</a> y <a href="https://es.wikipedia.org/wiki/Miguel_Angel">Miguel Ángel</a> estudiaron la anatomía humana en profundidad, observando cómo los músculos y huesos crean las formas visibles del cuerpo. Estos estudios anatómicos les ayudaron a desarrollar obras realistas que representan la complejidad y belleza de la figura humana.</p>
        <br>
        <p>En la anatomía artística, no solo se estudian los huesos y músculos individuales, sino también cómo estos trabajan juntos para crear <strong>movimientos naturales y proporciones armónicas</strong>. Además, dominar la anatomía ayuda a evitar errores comunes en las proporciones y facilita la creación de <strong>poses dinámicas y realistas</strong>, algo esencial para quienes buscan una representación fiel del cuerpo humano en el arte.</p>
    </div>
    <div class="image">
      <img src="https://www.leonardodavinci.website/wp-content/uploads/2022/11/anatomia-leonardo-da-vinci-hombro-cuello-musculos.webp" alt="">
      <p>Dibujos anatómicos de Leonardo da Vinci</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>La Anatomía en el Arte a lo Largo del Tiempo</h1>
    <hr>
    <div class="timeline">
        <div class="timeline-event">
            <div class="timeline-date">Edad Antigua</div>
            <div class="timeline-content">
                <h2>Representaciones tempranas del cuerpo humano</h2>
                <p>Las antiguas civilizaciones egipcia, griega y romana comenzaron a plasmar el cuerpo humano en esculturas y frescos, aunque con un conocimiento anatómico limitado. Los artistas representaban figuras idealizadas y simbólicas, basándose en observaciones visuales y en los conceptos culturales de belleza y proporción.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Renacimiento (Siglo XV - XVI)</div>
            <div class="timeline-content">
                <h2>Estudio detallado de la anatomía humana</h2>
                <p>El Renacimiento marcó un periodo crucial en el que los artistas comenzaron a estudiar la anatomía humana en profundidad. Figuras como Leonardo da Vinci y Miguel Ángel realizaron estudios anatómicos a partir de disecciones, logrando una representación precisa y detallada del cuerpo en sus obras. Esto les permitió capturar la musculatura y la estructura ósea con un realismo sin precedentes.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Siglo XVII - XVIII</div>
            <div class="timeline-content">
                <h2>Barroco y Rococó: Expresión dinámica del cuerpo</h2>
                <p>En los períodos barroco y rococó, los artistas continuaron utilizando el conocimiento anatómico para dar vida a sus obras. Sin embargo, se enfocaron en el movimiento y la expresividad. Las esculturas y pinturas de esta época muestran cuerpos en poses dramáticas, capturando emociones intensas y dinamismo, gracias a una comprensión más profunda de la anatomía y el movimiento.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Siglo XIX</div>
            <div class="timeline-content">
                <h2>Realismo y Academia: Precisión anatómica</h2>
                <p>Con el auge del realismo y el academicismo, los artistas del siglo XIX pusieron un énfasis riguroso en el estudio de la anatomía. Escuelas de arte y academias exigían estudios anatómicos precisos y detallados, preparando a los artistas para crear obras que reflejaran fielmente la figura humana. El conocimiento anatómico se volvió un requisito esencial para los artistas.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Siglo XX</div>
            <div class="timeline-content">
                <h2>Modernismo: Experimentación con la anatomía</h2>
                <p>El siglo XX trajo movimientos como el cubismo, el expresionismo y el surrealismo, donde los artistas comenzaron a deconstruir y reinterpretar la anatomía humana. Aunque muchos no buscaban una representación realista, el conocimiento anatómico les permitió jugar con las proporciones y estructuras del cuerpo para transmitir conceptos más abstractos y emocionales.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Actualidad</div>
            <div class="timeline-content">
                <h2>Arte contemporáneo: Anatomía digital y nuevas interpretaciones</h2>
                <p>Hoy en día, el estudio de la anatomía en el arte continúa evolucionando con la ayuda de herramientas digitales. Artistas y diseñadores usan programas de modelado en 3D para estudiar y representar el cuerpo humano, creando obras que combinan precisión anatómica y creatividad. La anatomía sigue siendo una base fundamental en la ilustración, la animación y el diseño de personajes, adaptándose a las nuevas tecnologías.</p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de la Anatomía en el Arte</h2>
        <div class="collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoY5vm5SYOI1-gk8yXlLo_uVXPnJ3G9mQGQ&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbseMeXf1apdyFQuR9L5C0aGSpHiVetCZtkg&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8T6HZB9DJG7M9d_kWrxFwe-cGJ99t_QQ9w&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFzDQYZ-eTT_eV0usolJdoQ9UpB_oLclsiA&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjaScRuE-XquuC7Js1NJ0lF6J145IswTTVw&s" alt="">
        </div>
    </div>
    <div class="art-container">
        <br>
        <div class="conlist">
            <div class="title">Características del estudio anatómico en el arte</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Conocer la estructura ósea y muscular es fundamental para representar el cuerpo humano con precisión y realismo.</li>
                    <br>
                    <li>La observación de la anatomía permite a los artistas capturar la proporción, el movimiento y la expresión en sus obras.</li>
                    <br>
                    <li>El estudio anatómico ayuda a comprender cómo se comporta el cuerpo en distintas posturas y bajo diferentes tensiones musculares.</li>
                </ul>
            </div>
        </div>
        <div class="conlist">
            <div class="title">Ejemplos comunes de anatomía en el arte</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li><strong>Escultura:</strong> Desde la época clásica, los escultores han estudiado la anatomía para dar realismo y expresión a sus obras en mármol y bronce.</li>
                    <br>
                    <li><strong>Pintura al óleo:</strong> Artistas renacentistas como Leonardo da Vinci usaban el conocimiento anatómico para retratar el cuerpo humano de manera detallada.</li>
                    <br>
                    <li><strong>Ilustración médica:</strong> La ilustración científica utiliza la anatomía para explicar el funcionamiento del cuerpo y es esencial en manuales y estudios médicos.</li>
                </ul>
            </div>     
        </div>
        <div class="conlist">
            <div class="title">Herramientas populares para el estudio anatómico en el arte</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li><strong>Maniquíes anatómicos:</strong> Modelos tridimensionales que ayudan a los artistas a visualizar la estructura del cuerpo en distintas posiciones.</li>
                    <br>
                    <li><strong>Software 3D:</strong> Herramientas digitales como ZBrush y Blender permiten estudiar y modelar el cuerpo en detalle, útil para escultores y diseñadores.</li>
                    <br>
                    <li><strong>Libros de anatomía artística:</strong> Referencias clásicas como "Anatomía para artistas" de Eliot Goldfinger ofrecen guías detalladas para el estudio de la anatomía en el arte.</li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>