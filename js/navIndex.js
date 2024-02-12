function generateNavIndex() {
    const navHTML = `<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id="titulo">EMPRENDEDORES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto nav-underline">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html" id="paginas">| Inicio - Emprendedores |</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="pages/EmpresasSV.html" id="paginas"> | Empresas de ES |</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="pages/EmpresasIT.html" id="paginas">| Empresas IT |</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
    return navHTML;
  }

  function generateFooter() {
    const footerHTML = `<section class="">
    <footer class="text-center text-white" style="background-color: #0a4275;">
      <div class="container p-4 pb-0">
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Perfil 1 - Fernando Morales </span>
            <button data-mdb-ripple-init type="button" class="btn btn-outline-light btn-rounded">
              Ver mas (mentira)
            </button>
          </p>
        </section>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);" target="_blank">
        © 2024 Copyright:
        <a class="text-white" href="https://www.youtube.com/watch?v=0tOXxuLcaog" target="_blank">Easter EGG</a>
      </div>
    </footer>
  </section>
    `;
    return footerHTML;
  }