<script>
    import '$lib/css/style.css';
    

    // No se necesitan scripts específicos, ya que las bibliotecas de JS serán manejadas globalmente
  </script>
  
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
    <a href="/" class="navbar-brand p-0">
      <h1 class="display-6 text-primary m-0">
        <img src="/img/una-mariposa-de-lado.png" alt="Logo" style="width: 80px; height: auto;"> 
        You Can Tell Me
      </h1>
    </a>
    <button class="navbar-toggler" aria-label="button"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0">
        <a href="/" class="nav-item nav-link active">Inicio</a>
        <a href="/sobrenosotros" class="nav-item nav-link">Sobre Nosotros</a>
        <div class="nav-item dropdown">
          <a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
          <div class="dropdown-menu m-0">
            <a href="/apoyopsicologico" class="dropdown-item active">Apoyo Psicológico</a>
            <a href="/estrategias" class="dropdown-item">Estrategias de Manejo del Estrés</a>
            <a href="/tecnicas" class="dropdown-item">Técnicas de Relajación</a>
          </div>
        </div>
        <a href="/contact" class="nav-item nav-link active">¡Contáctanos!</a>
      </div>
    </div>
  </nav>
  
  <!-- Header -->
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
      <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">¡Contáctanos!</h3>
      <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li class="breadcrumb-item"><a href="/">Inicio</a></li>
        <li class="breadcrumb-item"><a href="1">Páginas</a></li>
        <li class="breadcrumb-item active text-primary">Contactos</li>
      </ol>
    </div>
  </div>
  
  <!-- Contact Form -->
  <div class="container-fluid contact py-5">
    <div class="container py-5">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="text-primary mb-4">Contáctanos</h4>
        <h1 class="display-5 mb-4">Ponte en Contacto Con Nosotros</h1>
        <p class="mb-0">Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estamos aquí para atenderte y resolver tus inquietudes.</p>
      </div>
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <h2 class="display-5 mb-2">Formulario de Contacto</h2>
          <form>
            <div class="row g-3">
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input type="text" class="form-control" id="name" placeholder="Tu Nombre" required>
                  <label for="name">Tu Nombre</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input type="email" class="form-control" id="email" placeholder="Tu Correo Electrónico" required>
                  <label for="email">Tu Correo Electrónico</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input type="tel" class="form-control" id="phone" placeholder="Teléfono" required>
                  <label for="phone">Tu Teléfono</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input type="text" class="form-control" id="project" placeholder="Proyecto">
                  <label for="project">Tu Proyecto</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input type="text" class="form-control" id="subject" placeholder="Asunto" required>
                  <label for="subject">Asunto</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Deja un mensaje aquí" id="message" style="height: 160px" required></textarea>
                  <label for="message">Mensaje</label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100 py-3">Enviar Mensaje</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div class="d-flex align-items-center mb-4">
            <div class="bg-light d-flex align-items-center justify-content-center mb-3" style="width: 90px; height: 90px; border-radius: 50px;">
              <i class="fa fa-home fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Dirección</h4>
              <p class="mb-0">Sede Principal Cll 40 #105 - 36</p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-4">
            <div class="bg-light d-flex align-items-center justify-content-center mb-3" style="width: 90px; height: 90px; border-radius: 50px;">
              <i class="fa fa-phone-alt fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Móviles</h4>
              <p class="mb-0">+57 323 969 0101</p>
              <p class="mb-0">+57 301 234 5678</p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-4">
            <div class="bg-light d-flex align-items-center justify-content-center mb-3" style="width: 90px; height: 90px; border-radius: 50px;">
              <i class="fa fa-envelope-open fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Correo Electrónico</h4>
              <p class="mb-0">cardonavalenciasara@gmail.com</p>
              <p class="mb-0">est.sara.cardona.valencia@carlosvieco.edu.co</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="me-4">
              <div class="bg-light d-flex align-items-center justify-content-center" style="width: 90px; height: 90px; border-radius: 50px;">
                <i class="fas fa-share fa-2x text-primary"></i>
              </div>
            </div>
            <div class="d-flex">
              <a aria-label="button" class="btn btn-lg-square btn-primary rounded-circle me-2" href="1"><i class="fab fa-facebook-f"></i></a>
              <a aria-label="button" class="btn btn-lg-square btn-primary rounded-circle mx-2" href="1"><i class="fab fa-twitter"></i></a>
              <a aria-label="button" class="btn btn-lg-square btn-primary rounded-circle mx-2" href="1"><i class="fab fa-instagram"></i></a>
              <a aria-label="button" class="btn btn-lg-square btn-primary rounded-circle mx-2" href="1"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <footer class="container-fluid footer py-5">
    <div class="container py-5">
      <div class="row g-5 justify-content-center text-center">
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="text-dark mb-4">Proyecto</h4>
            <a href="/servicios">Nuestros Servicios</a>
            <a href="1">Blog y Noticias</a>
            <a href="/sobrenosotros">Sobre Nosotros</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Enlaces Rápidos</h4>
            <a href="/contact">Contáctanos</a>
            <a href="1">Política de Privacidad</a>
            <a href="1">Términos y Condiciones</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Servicios</h4>
            <a href="1">Apoyo Psicológico</a>
            <a href="/estrategias">Estrategias de Manejo del Estrés</a>
            <a href="/tecnicas">Técnicas de Relajación</a>
            <a href="1">Apoyo Académico</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Información de Contacto</h4>
            <a href="mailto:cardonavalenciasara@gmail.com"><i class="fas fa-envelope me-2"></i> cardonavalenciasara@gmail.com</a>
            <a href="tel:+573239690101"><i class="fas fa-phone me-2"></i> +57 323 969 0101</a>
            <div class="d-flex justify-content-center align-items-center">
              <i class="fas fa-share fa-2x text-secondary me-2"></i>
              <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i class="fab fa-facebook-f"></i></a>
              <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i class="fab fa-twitter"></i></a>
              <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i class="fab fa-instagram"></i></a>
              <a aria-label="button" class="btn-square btn btn-primary rounded-circle mx-1" href="1"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Copyright -->
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
  
  <!-- Back to Top -->
  <a href="1" aria-label="button" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
  