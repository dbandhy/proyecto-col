class SocialBarComponent extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="mt-5 mb-5 social-bar d-none d-md-flex">
				<div class="share-count">3.1K<span class="share-count">compartidos</span></div>
				<div class="container-social-icons">
					<div class="social-icon facebook"><i class="fab fa-facebook-f"></i></div>
					<div class="social-icon whatsapp"><i class="fab fa-whatsapp"></i></div>
					<div class="social-icon twitter"><i class="fab fa-twitter"></i></div>
					<div class="social-icon email"><i class="fas fa-envelope"></i></div>
				</div>
			</div>
    `
  }
}

customElements.define('social-bar-component', SocialBarComponent)