<script>
    import '$lib/css/style.css';
   
    import { onMount } from 'svelte';
     
  
    let showSpinner = true;
  
    onMount(() => {
      setTimeout(() => {
        showSpinner = false;
      }, 1000); // Desaparecerá el spinner después de 1 segundo
    });
  </script>
  
  <svelte:head>
    <title>You Can Tell Me</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="psicología, apoyo, estudiantes, salud mental">
    <meta name="description" content="Plataforma para gestión de citas con psicólogos para estudiantes.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
  </svelte:head>
  
  {#if showSpinner}
    <div id="spinner" class="position-fixed w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  {/if}
  
  <!-- Navegación -->
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" class="navbar-brand p-0">
        <h1 class="display-6 text-primary m-0">
          <img src="/placeholder.svg?height=80&width=80" alt="Logo" style="width: 80px;">
          You Can Tell Me
        </h1>
      </a>
      <button aria-label="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a href="/" class="nav-item nav-link active">Inicio</a>
          <a href="/sobrenosotros" class="nav-item nav-link">Sobre Nosotros</a>
          <div class="nav-item dropdown">
            <a href="1" aria-label="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
            <div class="dropdown-menu m-0">
              <a href="/apoyopsicologico" class="dropdown-item">Apoyo Psicológico</a>
              <a href="/estrategias-dmde" class="dropdown-item">Estrategias de Manejo del Estrés</a>
              <a href="/tecnicas-de-relajacion" class="dropdown-item">Técnicas de Relajación</a>
            </div>
          </div>
          <a href="/contact" class="nav-item nav-link">¡Contáctanos!</a>
        </div>
      </div>
    </nav>
  </div>
  
  <!-- Breadcrumbs -->
  <div class="container-fluid bg-light py-5">
    <div class="container text-center py-5" style="max-width: 900px;">
      <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Nuestros Servicios</h3>
      <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li class="breadcrumb-item"><a href="/">Inicio</a></li>
        <li class="breadcrumb-item"><a href="1">aria-label="button"Páginas</a></li>
        <li class="breadcrumb-item active">Servicios</li>
      </ol>
    </div>
  </div>
  
  <!-- Servicios -->
  <div class="container-fluid feature overflow-hidden py-5">
    <div class="container py-5">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="text-primary">Nuestros Servicios</h4>
        <h1 class="display-5 mb-4">Servicios de Psicología para Estudiantes</h1>
        <p class="mb-0">
          Nuestra plataforma facilita la programación de citas de psicología para estudiantes y ofrece información útil para apoyarlos en su vida académica y personal.
        </p>
      </div>
      <div class="row g-4 justify-content-center text-center mb-5">
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
          <div class="text-center p-4">
            <div class="d-inline-block rounded bg-light p-4 mb-4">
              <i class="fas fa-brain fa-5x text-secondary"></i>
            </div>
            <a href="1" aria-label="button" class="h4">Apoyo Psicológico <i class="fa fa-long-arrow-alt-right"></i></a>
            <p class="mt-4 mb-0">Orientación y asesoramiento personalizado para estudiantes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <div class="container-fluid footer py-5">
    <div class="container py-5">
      <div class="row g-5 justify-content-center text-center">
        <div class="col-md-6 col-lg-6 col-xl-3">
          <h4 class="text-dark mb-4">Proyecto</h4>
          <a href="/servicios">Nuestros Servicios</a>
          <a href="1">aria-label="button"Blog y Noticias</a>
          <a href="/sobrenosotros">Sobre Nosotros</a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Botón volver arriba -->
  <a href="1" aria-label="button" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
  
  <style>
    :global(body) {
      font-family: 'Rubik', sans-serif;
    }
  
    .bg-light {
      background-color: #f8f9fa;
    }
  
    @keyframes pulse {
      0%, 100% { transform: scale(0.95); }
      70% { transform: scale(1); }
    }
  
    .footer {
      background-color: #f8f9fa;
    }
  
    .back-to-top { display: none; position: fixed; bottom: 25px; right: 25px; }
    .back-to-top:active { display: block; }
  </style>
  