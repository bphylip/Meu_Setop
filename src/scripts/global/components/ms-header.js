class MSHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {
            const htmlResponse = await fetch('/src/assets/components-Draw/header.html');
            const html = await htmlResponse.text();

            const template = document.createElement('template');
            template.innerHTML = `
          <!-- Importa Font Awesome (ou ignora se já estiver global) -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
          <!-- Importa o CSS isolado do header -->
          <link rel="stylesheet" href="/src/styles/components/header.css">
  
          ${html}
        `;

            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.initHeaderScripts();

        } catch (error) {
            console.error('Erro ao carregar o componente <ms-header>:', error);
        }
    }

    initHeaderScripts() {
        let menu = this.shadowRoot.querySelector('#menu-btn');
        let navbar = this.shadowRoot.querySelector('.header .navbar');


        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        window.onscroll = () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        };
    }
}

// Define o elemento customizado
customElements.define('ms-header', MSHeader);