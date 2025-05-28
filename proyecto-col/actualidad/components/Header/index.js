class ActualidadHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="main-header-qualifiers">
      <header class="header">
        <!-- Barra superior -->
        <div class="top-bar">
          <div class="top-links">
            <a href="#"><i class="fa fa-futbol"></i><p class="logo-texto">&nbsp;Partidos Hoy</p></a>
            <a href="#"><i class="fa fa-film"></i><p class="logo-texto">&nbsp;Cartelera</p></a>
            <a href="#"><i class="fa fa-map"></i><p class="logo-texto">&nbsp;Colombianos en USA</p></a>
          </div>
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-tiktok"></i>
          </div>
        </div>
        
        <!-- Carrousel Text Responsive -->
        <div class="carrousel-text">
          <div class="content">
            <span>Noche de velitas</span>
            <div></div>
            <span>Ingrid Karina</span>
            <div></div>
            <span>Racionamiento de Agua</span>
          </div>
        </div>

        <!-- Cabecera principal -->
        <div class="main-header">
          <div class="left-container d-flex align-items-center">
            <button class="menu-toggle">☰</button>
            <div class="desktop-news-btn d-none d-md-flex align-items-center">
              <span class="red-dot">●</span>
              <span>NOTICIAS</span>
            </div>
          </div>
          
          <h1 class="mx-md-auto text-md-center">
            <img src="/assets/icons/colombia-com-footer.png" alt="Logo Colombia.com">
          </h1>
          
          <!-- Botón ESPECIAL para desktop -->
          <button class="campain-btn d-none d-md-block">ESPECIAL</button>

          <!-- Iconos para móvil -->
          <div class="top-links d-flex d-md-none">
            <a href="#"><i class="fa fa-futbol"></i></a>
            <a href="#"><i class="fa fa-film"></i></a>
            <a href="#"><i class="fa fa-map"></i></a>
          </div>
        </div>

        <!-- Contenedor de botones (NOTICIAS y ESPECIAL) -->
        <div class="menu-logo d-flex d-md-none">
          <button class="news-btn">NOTICIAS</button>
          <button class="campain-btn">ESPECIAL</button>
          <div class="deplegable">
            <span>ACTUALIDAD</span>
            <i class="fa fa-angle-down"></i>
          </div>
        </div>

        <!-- Menú de navegación -->
        <nav class="menu">
          <div class="menu-links">
            <a itemprop="cine" href="/cine">FÚTBOL</a>
            <a itemprop="cartelera" href="#">ELIMINATORIAS</a>
            <a itemprop="proximos" href="#">LIGA BETPLAY</a>
            <a itemprop="actores" href="#">SELECCIÓN</a>
            <a itemprop="salas" href="#">COLOMBIANOS</a>
            <a itemprop="trailes" href="#">PARTIDOS HOY</a>
          </div>
          <div class="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="button" class="fa fa-search" aria-label="Buscar"></button>
          </div>
        </nav>

        <!-- Flyer/Banner -->
        <div class="flyer">
          <img class="flyer" src="/assets/img/flyer-desk.png" alt="flyer">
        </div>

        <!-- Menú desplegable móvil -->
        <nav class="mobile-menu">
          <a href="#">CINE</a>
          <a href="#">CARTELERA</a>
          <a href="#">PRÓXIMOS ESTRENOS</a>
          <a href="#">ACTORES Y ACTRICES</a>
          <a href="#">SALAS</a>
          <a href="#">TRAILES</a>
          <a href="#">NOTICIAS</a>
        </nav>
      </header>
    </div>  
    `;
  }
}

customElements.define('actualidad-header', ActualidadHeader);