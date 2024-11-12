<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar1/navbar.svelte';
    import Next from '$lib/button.svelte';
    import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('nivel-2');
  });
</script>

<Nav levelNumber={2} position="circle-1"/>

<div class="container">
    <div class="text">
      <h1>El Arte Prehistórico</h1>
      <hr>
      <br>
      <p>El <strong>arte prehistórico</strong> es el tipo de arte que hicieron los primeros seres humanos hace miles de años, <strong>mucho antes de que existieran los libros o la escritura.</strong> Este arte incluye dibujos y pinturas en las paredes de las cuevas, esculturas y objetos decorativos. Usaban materiales naturales como tierra, plantas y minerales para crear colores y pintar animales, personas y símbolos.</p>
      <br>
      <p>En diferentes partes del mundo, como en las cuevas de <strong>Altamira</strong> en España y <strong>Chauvet</strong> en Francia, podemos encontrar estas pinturas antiguas. Estas cuevas eran como los <strong>"museos"</strong> de la prehistoria. Los dibujos suelen mostrar escenas de la vida cotidiana de estas personas, como cazando animales grandes como bisontes y ciervos, bailando alrededor del fuego, y celebrando rituales importantes para ellos. También hacían pequeñas esculturas de piedra o hueso, representando <strong>figuras humanas y animales</strong>, que quizás usaban como amuletos o juguetes.</p>
      <br>
      <p>El arte prehistórico es muy importante porque nos ayuda a entender cómo vivían y pensaban las personas hace miles de años. Aunque no sabemos exactamente por qué hacían estos dibujos, creemos que podrían haber sido para contar historias, expresar sus creencias, o incluso <strong>enseñar</strong> a otros.</p>
    </div>
    <div class="image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WZCm3Ok5GfDGixoRraKa8yYdGl90uKMGig&s" alt="">
      <p>Pinturas rupestres de National Geographic</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>Línea del tiempo del Arte prehistórico</h1>
    <hr>
    <div class="timeline">
        <div class="timeline-event">
            <div class="timeline-date">35,000 A.C.</div>
            <div class="timeline-content">
                <h2>Aparición del arte mobiliar</h2>
                <p>Primera evidencia del arte mobiliar, arte prehistórico transportable, incluyendo figuras de animales y humanos.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">40,000 A.C.</div>
            <div class="timeline-content">
                <h2>Comienzo del arte rupestre</h2>
                <p>Aparecen las primeras pinturas y grabados en cuevas y abrigos rocosos.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">10,000 A.C.</div>
            <div class="timeline-content">
                <h2>Arte del Paleolítico Superior</h2>
                <p>El arte del Paleolítico Superior se caracteriza por una gran variedad de formas de expresión artística.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">4,000 A.C.</div>
            <div class="timeline-content">
                <h2>Inicio del Neolítico</h2>
                <p>Comienza el Neolítico y con él, una nueva forma de vida y arte, incluyendo la cerámica y el trabajo con metales.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">3,000 A.C.</div>
            <div class="timeline-content">
                <h2>Arte megalítico</h2>
                <p>Comienza el arte megalítico, caracterizado por construcciones monumentales utilizando grandes piedras.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">2,000 A.C.</div>
            <div class="timeline-content">
                <h2>Final del período prehistórico</h2>
                <p>Fin del período prehistórico marcado por el inicio de la escritura en diferentes culturas.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">1868</div>
            <div class="timeline-content">
                <h2>Descubrimiento de la cueva de Altamira</h2>
                <p>La cueva de Altamira en España, hogar de arte rupestre prehistórico, es descubierta.</p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de Arte Prehistórico</h2>
        <div class="collage">
            <img src="https://concepto.de/wp-content/uploads/2020/01/arte-prehistorico-altamira-ejemplos-e1580224616622.jpg" alt="">
            <img src="https://concepto.de/wp-content/uploads/2020/01/arte-prehistorico-663x451.jpg" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83Z8KQ_D0mFsrUZdGWC4fXvudofxxoBM7Rg&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSFn6DyXqvGH88tgTDd2Mjb6X2xi05Vow8g&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zxLpoUBTrZSKnuIPzcgkDlvFAlMwLQAHeg&s" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1fJxUHLLpc4RG75OjvP8Zc-rKGhE40OXgQ&s" alt="">
        </div>
    </div>
    <div class="art-container">
        <h2>Principales obras del Arte Prehistórico</h2>
        <p>Las principales obras del arte prehistórico se dividen principalmente en tres categorías: <strong>pinturas rupestres, esculturas y arte mobiliar (arte portátil).</strong> Algunos ejemplos de cada categoria son:</p>
        <br>
        <div class="conlist">
            <div class="title">Esculturas</div>
            <hr>
            <br>
            <strong>1. Venus de Willendorf (Austria):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> Pequeña figura de una mujer, datada entre 28,000 y 25,000 a.C., hecha de piedra caliza y mide unos 11 cm de altura. Destaca por su cuerpo voluminoso con senos, abdomen y muslos prominentes.</li>
                    <br>
                    <li><strong>Característica:</strong> La Venus de Willendorf está esculpida en piedra caliza y originalmente estaba cubierta con una capa de ocre rojo, podría haber tenido un significado ritual o simbólico relacionado con la fertilidad y la vida.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguwKrBjMwwQPr0nNruZwc2xM49IAQ1_JBWA&s" alt="">
                </div>
            </div>
            <strong>2. Hombre León (Alemania):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> La escultura, conocida como el Hombre León o Löwenmensch, es una figura de 31,1 cm de altura tallada en marfil de mamut, datada en aproximadamente 40,000 a.C.</li>
                    <br>
                    <li><strong>Característica:</strong> Se cree que la figura tenía un significado espiritual o ritual, posiblemente relacionada con creencias antiguas.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhGmcYJ5c8jeWKTPaFlDx_O9qIYNdkRVnTQ&s" alt="">
                </div>
            </div> 
        </div>
        <div class="conlist">
            <div class="title">Pinturas Rupestres</div>
            <hr>
            <br>
            <strong>1. Cueva de Altamira (España):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> famosa por sus impresionantes pinturas rupestres, que representan animales como bisontes y ciervos con gran realismo y detalle, utilizando pigmentos naturales hace entre 36,000 y 13,000 años.</li>
                    <br>
                    <li><strong>Característica:</strong> Utilizaron pigmentos naturales, principalmente ocres rojos y negros, aplicados con técnicas como el soplado, el frotado y el pincelado.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNhnqAsq3zbAG7J7geQ2kaYdgDEtYAWlP8Q&s" alt="">
                </div>
            </div>
            <strong>2. Cueva de Chauvet (Francia):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> Contiene algunas de las pinturas rupestres más antiguas conocidas, con representaciones de animales como leones, rinocerontes y mamuts.</li>
                    <br>
                    <li><strong>Característica:</strong> La cueva contiene más de 400 representaciones de animales, incluyendo especies raramente representadas en otras cuevas de la misma época, como leones, rinocerontes y hienas.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-xgPa5qKi6CJOXikSgJWIwpXn8OYSXCRtg&s" alt="">
                </div>
            </div> 
        </div>
        <div class="conlist">
            <div class="title">Arte Mobiliar</div>
            <hr>
            <br>
            <strong>1. Bastón de Mando de La Madeleine (Francia):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> Es un objeto tallado en hueso de reno que data de alrededor de 12,000 a.C. Esta pieza exhibe grabados intricados de animales, incluyendo renos y caballos.</li>
                    <br>
                    <li><strong>Característica:</strong> se cree que estos bastones podrían haber tenido un propósito ceremonial o simbólico. Pueden haber sido usados por líderes tribales o chamanes en rituales.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReocwjWYyAaY7Pj2LnEVbEZD2gW-ehYM4tGw&s" alt="">
                </div>
            </div>
            <strong>2. Piedras Grabadas de la Cueva de Gönnersdorf (Alemania):</strong>
            <div class="list">
                <ul>
                    <li><strong>Descripción:</strong> Descubiertas en la década de 1960 en la región de Renania-Palatinado, Alemania, estas piedras datan aproximadamente de 15,000 a.C. Las figuras humanas tienen cuerpos alargados y carecen de detalles faciales.</li>
                    <br>
                    <li><strong>Característica:</strong> Presentan e incluyen escenas de caza y actividad diaria, lo que proporciona un valioso vistazo a la vida y cultura de las sociedades paleolíticas.</li>
                </ul>
                <div class="example">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSp_V0MIAGDvlTgAimAgxnOKlQMtyZQcznw98YrCwlpA&s" alt="">
                </div>
            </div> 
        </div>
    </div>
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>
