class MSFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {
            const htmlResponse = await fetch('/src/assets/components-Draw/footer.html');
            const html = await htmlResponse.text();

            const template = document.createElement('template');
            template.innerHTML = `
          <!-- Importa Font Awesome (ou ignora se já estiver global) -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
          <!-- Importa o CSS isolado do footer -->
          <link rel="stylesheet" href="/src/styles/components/footer.css">
          <link rel="stylesheet" href="/src/styles/components/button.css">
  
          ${html}
        `;

            this.shadowRoot.appendChild(template.content.cloneNode(true));

        } catch (error) {
            console.error('Erro ao carregar o componente <ms-footer>:', error);
        }
    }

}

// Define o elemento customizado
customElements.define('ms-footer', MSFooter);