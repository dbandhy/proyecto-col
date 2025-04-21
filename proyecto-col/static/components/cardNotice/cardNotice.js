class CardNoticeComponent extends HTMLElement {
  static get observedAttributes() {
    return ['orientation','distribution', 'category','news','author','subtitle','image','classnames'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'orientation') {
      this.orientation = newValue;
      this.render();
    }
    if (name === 'distribution') {
      this.distribution = newValue;
      this.render();
    }
    if (name === 'category') {
      this.category = newValue;
      this.render();
    }
    if (name === 'news') {
      this.news = newValue;
      this.render();
    }
    if (name === 'author') {
      this.author = newValue;
      this.render();
    }
    if (name === 'subtitle') {
      this.subtitle = newValue;
      this.render();
    }
    if (name === 'image') {
      this.image = newValue;
      this.render();
    }
    if (name === 'classnames') {
      this.classnames = newValue;
      this.render();
    }
  }

  set orientation (val) {
    this._orientation = val
    this.render()
  }
  get orientation () {
    return this._orientation
  }

  set distribution (val) {
    this._distribution = val
    this.render()
  }
  get distribution () {
    return this._distribution
  }

  set classnames (val) {
    this._classnames = val
    this.render()
  }
  get classnames () {
    return this._classnames
  }

  set news(val) {
    this._news = val;
    this.render();
  }
  get news() {
    return this._news
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="card-news orientation-${this.orientation} distribution-${this.distribution} ${this.classnames}">
        <img src="${this.image}" alt="news">
        <div class="news-content">
          <span class="category">${this.category}</span>
          <span class="title">${this.news}</span>
          <span>Leer más</span>
          <span class="author">${this.author}</span>
          ${this.subtitle? `<span>La ayuda a quien lo necesita no solo beneficia a una persona comunidades</span>` : ''}
        </div>
      </div>
    `
  }
}

customElements.define('card-notice-component', CardNoticeComponent)