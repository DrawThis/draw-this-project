<script>
import '$lib/css/style.css';
</script>


<script context="module">
    export async function load() {
      return {
        props: {
          // Puedes cargar datos aquí si lo necesitas
        }
      };
    }
    import { onMount } from 'svelte';
  
    let showSpinner = true;
  
    onMount(() => {
      setTimeout(() => {
        showSpinner = false;
      }, 1000);
    });
  
    // Control del estado de las páginas activas
    let activePage = 'inicio';  // Control de la página activa
  </script>
  
  <svelte:head>
    <title>You can tell me</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
  </svelte:head>
  
  {#if showSpinner}
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {/if}
  
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" class="navbar-brand p-0">
        <h1 class="display-6 text-primary m-0">
          <img src="/placeholder.svg?height=80&width=80" alt="Logo" style="width: 80px; height: auto;">
          You can tell me
        </h1>
      </a>
      <button aria-label="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a href="/" class="nav-item nav-link" class:active={activePage === 'inicio'} on:click={() => activePage = 'inicio'}>Inicio</a>
          <a href="/sobrenosotros" class="nav-item nav-link" class:active={activePage === 'sobrenosotros'} on:click={() => activePage = 'sobrenosotros'}>Sobre Nosotros</a>
          <div class="nav-item dropdown">
            <a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
            <div class="dropdown-menu m-0">
              <a href="/apoyopsicologico" class="dropdown-item" class:active={activePage === 'apoyopsicologico'} on:click={() => activePage = 'apoyopsicologico'}>Apoyo Psicológico</a>
              <a href="/estrategias-dmde" class="dropdown-item" class:active={activePage === 'estrategias-dmde'} on:click={() => activePage = 'estrategias-dmde'}>Estrategias de Manejo del Estrés</a>
              <a href="/tecnicas-de-relajacion" class="dropdown-item" class:active={activePage === 'tecnicas-de-relajacion'} on:click={() => activePage = 'tecnicas-de-relajacion'}>Técnicas de Relajación</a>
            </div>
          </div>
          <a href="/contact" class="nav-item nav-link" class:active={activePage === 'contact'} on:click={() => activePage = 'contact'}>¡Contáctanos!</a>
        </div>
      </div>
    </nav>
  </div>
  
  <main>
    <div class="container-fluid bg-breadcrumb">
      <ul class="breadcrumb-animation">
        {#each Array(10) as _, index (index)}
          <li></li>
        {/each}
      </ul>
      <div class="container text-center py-5" style="max-width: 900px;">
        <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Estrategias de manejo del estrés</h3>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item"><a href="1">Páginas</a></li>
          <li class="breadcrumb-item"><a href="1">Estrategias de manejo del estrés</a></li>
        </ol>
      </div>
    </div>
  
    <div class="container-fluid feature overflow-hidden py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
          <h4 class="text-primary">Manejo del Estrés</h4>
          <h1 class="display-5 mb-4">¿QUÉ ES EL ESTRÉS?</h1>
          <p class="mb-0">
            El estrés es la reacción natural del cuerpo ante situaciones desafiantes o demandantes. Puede
            afectar tanto a jóvenes como a adultos en diferentes aspectos de la vida, como los estudios, el
            trabajo o la vida personal. Aprender a manejar el estrés es esencial para mantener un equilibrio
            saludable.
          </p>
        </div>
      </div>
    </div>
  </main>
  
  <footer class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <!-- Pie de página similar al que tienes en tu código -->
  </footer>
  
  <div class="container-fluid copyright py-4">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-md-6 text-center text-md-start mb-md-0">
          <span class="text-white"><a href="1"><i class="fas fa-copyright text-light me-2"></i>You Can Tell Me</a>, All rights reserved.</span>
        </div>
        <div class="col-md-6 text-center text-md-end text-white">
          Designed by <a class="border-bottom" href="1">You Can Tell Me Team</a> | Distributed with care.
        </div>
      </div>
    </div>
  </div>
  
  <a href="1" aria-label="button" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
  
  <style>
    :global(body) {
      font-family: 'Rubik', sans-serif;
    }
  
    .bg-breadcrumb {
      background-color: #f8f9fa;
    }
  
    .breadcrumb-animation {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }
  
    .breadcrumb-animation li {
      width: 10px;
      height: 10px;
      background-color: #007bff;
      margin: 0 5px;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }
  
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
      }
    }
  
    .footer {
      background-color: #f8f9fa;
    }
  
    .copyright {
      background-color: #007bff;
    }
  
    .back-to-top {
      position: fixed;
      bottom: 25px;
      right: 25px;
      display: none;
    }
  
    .back-to-top:active {
  display: block !important;
}


  </style>
  