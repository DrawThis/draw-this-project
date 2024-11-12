<script>
    import '$lib/css/style.css';
  </script>


<svelte:head>
    <title>You Can Tell Me</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
</svelte:head>

<!-- Spinner Start -->
<div id="spinner"
class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">Loading...</span>
</div>
</div>
<!-- Spinner End -->


<!-- Navbar & Hero Start -->
<div class="container-fluid p-0">
<nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
    <a href="index.html" class="navbar-brand p-0">
        <h1 class="display-6 text-primary m-0"><img src="img/una-mariposa-de-lado.png" alt="Logo"
                style="width: 80px; height: auto;">You can tell me</h1>

    </a>
    <button aria-label="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
            <a href="index.html" class="nav-item nav-link active">Inicio</a>
            <a href="sobrenosotros.html" class="nav-item nav-link">Sobre Nosotros</a>

            <div class="nav-item dropdown">
                <a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</a>
                <div class="dropdown-menu m-0">
                    <a href="feature.html" class="dropdown-item active">Apoyo Psicológico</a>
                    <a href="EstrategiasDMDE.html" class="dropdown-item">Estrategias de Manejo del Estrés</a>
                    <a href="Tecnicasderelajacion.html" class="dropdown-item">Técnicas de Relajación </a>
                    <a href="testimonial.html" class="dropdown-item">Apoyo Académico </a>
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">¡Contactanos!</a>
        </div>
    </div>
</nav>
</div>
<!-- Navbar & Hero End -->


<!-- Header Start -->
<div class="container-fluid bg-breadcrumb">
<ul class="breadcrumb-animation">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<div class="container text-center py-5" style="max-width: 900px;">
    <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Sobre Nosotros</h3>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
            <li class="breadcrumb-item active text-primary">Nosotros</li>
        </ol>
</div>
</div>
<!-- Header End -->


<!-- About Start -->
<div class="container-fluid overflow-hidden py-5 mt-5">
<div class="container py-5">
    <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="RotateMoveLeft">
                <img src="img/about-1.png" class="img-fluid w-100" alt="">
            </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h4 class="mb-1 text-primary">Sobre Nosotros</h4>
            <h1 class="display-5 mb-4">Comienza fácilmente con una orientación psicológica personalizada</h1>
            <p class="mb-4">Ofrecemos un espacio de apoyo psicológico especializado para estudiantes, enfocado
                en ayudarte a manejar los desafíos académicos y emocionales que puedas enfrentar durante tu
                formación. Nuestro equipo está dedicado a brindarte las herramientas necesarias para mejorar tu
                bienestar y rendimiento.</p>
        </div>
    </div>
</div>
</div>
<!-- About End -->

<!-- medios de contecto Start -->
<div class="container-fluid service py-5">
<div class="container py-5">
    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="mb-1 text-primary">Nuestros Servicios</h4>
        <h1 class="display-5 mb-4">Servicios Especializados para Estudiantes</h1>
        <p class="mb-0">Explora nuestros servicios diseñados para ayudarte a superar los retos académicos y
            emocionales. Desde técnicas para manejar el estrés hasta apoyo para mejorar tus habilidades de
            estudio, estamos aquí para ti.
        </p>
    </div>
    <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Contactos externos e Institucionales</h4>
                    <p class="mb-4">Psicologa Institucional: 3158338995</p>
                    <p class="mb-4">Linea Amiga:(604) 4444448</p>

                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fa fa-subway fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Contacta con nosotras</h4>
                    <p class="mb-4"> ig: youcantellme.smw </p>
                    <p class="mb-4"> Contacta con nosotras: 3052602017</p>
                    <p class="mb-4"> Facebook: Maria Ballesteros</p>
                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fas fa-sitemap fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Agenda una cita</h4>
                    <p class="mb-4">Inicia sesión para solicitar una cita o solicitala directamente si ya
                        iniciaste sesión
                    </p>
                    <p class="mb-4"> Gracias por escogernos como tu aliado</p>
                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- medios de contacto End -->


<!-- importante Start -->
<div class="container-fluid feature overflow-hidden py-5">
<div class="container py-5">
    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="text-primary">IMPORTANTE</h4>
        <h1 class="display-5 mb-4">¿Qué es lo más importante para nosotras?</h1>
        <p class="mb-0"> La salud mental es una prioridad fundamental para nosotros. Nos comprometemos a
            proporcionar un entorno seguro y tranquilo donde puedas sentirte apoyado. Para ello, contamos con el
            respaldo de nuestra psicóloga, quien está disponible para ofrecerte el apoyo necesario. No dudes de
            contar con nosotros para cualquier necesidad relacionada con tu bienestar emocionar y agendamiento
            de cita.
        </p>
    </div>
</div>
<div class="row g-5 pt-5" style="margin-top: 6rem;">
    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <div class="feature-img RotateMoveLeft h-100" style="object-fit: cover;">
            <img src="img/-una-cita-con-psicolog-a-.png" class="img-fluid w-100 h-100" alt="">
        </div>
    </div>
    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
        <h4 class="text-primary">¡RECUERDA!</h4>
        <h1 class="display-5 mb-4">No estás solo, estas con nosotras</h1>
        <p class="mb-4">
            Recuerda que la oscuridad es solo un estado temporal; siempre hay una luz al final del túnel. No estás solo en este camino, y cada paso hacia adelante es una victoria. Aunque los desafíos puedan parecer grandes, tienes dentro de ti la fuerza para superarlos. Permítete buscar apoyo cuando lo necesites y confía en que este momento difícil también pasará. Cada avance, por pequeño que sea, es una prueba de tu resiliencia y de tu valor.
        </p>
    </div>
</div>
</div>
<!-- importante End -->







<!-- Footer Inicio -->
<div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
<div class="container py-5">
    <div class="row g-5 justify-content-center text-center">
        <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
                <h4 class="text-dark mb-4">Proyecto</h4>
                <a href="servicios.html"> Nuestros Servicios</a>
                <a href="1"> Blog y Noticias</a>
                <a href="sobrenosotros.html"> Sobre Nosotros</a>

            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-dark">Enlaces Rápidos</h4>
                <a href="contact.html"> Contáctanos</a>
                <a href="1"> Política de Privacidad</a>
                <a href="1"> Términos y Condiciones</a>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-dark">Servicios</h4>
                <a href="1"> Apoyo Psicológico</a>
                <a href="EstrategiasDMDE.html"> Estrategias de Manejo del Estrés</a>
                <a href="Tecnicasderelajacion.html"> Técnicas de Relajación</a>
                <a href="1"> Apoyo Académico</a>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-dark">Información de Contacto</h4>
                <a href="1"><i class="fas fa-envelope me-2"></i> cardonavalenciasara@gmail.com</a>
                <a href="1"><i class="fas fa-phone me-2"></i> 3239690101</a>
                <a href="1" class="mb-3"><i class="fas fa-print me-2"></i> 3229633103</a>
                <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share fa-2x text-secondary me-2"></i>
                    <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i
                            class="fab fa-facebook-f"></i></a>
                    <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i
                            class="fab fa-twitter"></i></a>
                    <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i
                            class="fab fa-instagram"></i></a>
                    <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i
                            class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- Footer Fin -->

<!-- Copyright Start -->
<div class="container-fluid copyright py-4">
<div class="container">
    <div class="row g-4 align-items-center">
        <div class="col-md-6 text-center text-md-start mb-md-0">
            <span class="text-white"><a href="1"><i class="fas fa-copyright text-light me-2"></i>You Can
                    Tell
                    Me</a>, All rights reserved.</span>
        </div>
        <div class="col-md-6 text-center text-md-end text-white">
            <!--/*** This website was lovingly designed and crafted for sharing insights. ***/-->
            <!--/*** If you want to collaborate or customize this site, feel free to get in touch. ***/-->
            Designed by <a class="border-bottom" href="1">You Can Tell Me Team</a> | Distributed with care.
        </div>
    </div>
</div>
</div>
<!-- Copyright End -->



<!-- Back to Top -->
<a href="1" aria-label="button" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
