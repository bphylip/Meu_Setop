//Post Aside
class Popular extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                    <div class="card aside-card">

              <h2 class="headline headline-2 aside-title">
                <span class="span">Mais Lidas</span>
              </h2>

              <ul class="popular-list">

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/guia-de-compra-pc/pc-gm.webp"
                        width="64" height="64" loading="lazy" alt="Banner ilustrativo artigo"
                        class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/guia-de-compra-pc-gamer.html"
                          class="link hover-2">Guia de compra PC Gamer</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">20 mins read</p>

                        <time class="publish-date" datetime="2025-09-11">11 set 2025</time>
                      </div>

                    </div>

                  </div>
                </li>


                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/como-escolher-placa-de-video-ideal//123.webp" width="64" height="64" loading="lazy"
                        alt="Banner ilustrativo artigo" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/como-escolher-placa-de-video-ideal.html" class="link hover-2">Qual Placa
                          de
                          Vídeo Comprar? Veja Como Escolher Sua Placa de Vídeo!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-08-08">08 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/montando-computador-entenda-cada-peca/banner.jpg" width="64" height="64" loading="lazy"
                        alt="Banner ilustrativo artigo" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/montando-computador-entenda-cada-peca.html" class="link hover-2">Montando um Computador? Entenda Cada Peça e Escolha Certo!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-08-22">22 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/melhores-monitores-para-jogos-e-multitarefa/banner.avif" width="64" height="64" loading="lazy"
                        alt="Banner ilustrativo artigo" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/melhores-monitores-para-jogos-e-multitarefa.html" class="link hover-2">Guia: Melhores monitores para jogos e multitarefa</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">10 mins read</p>

                        <time class="publish-date" datetime="2025-08-06">06 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/upgrade-pc-por-onde-comecar/banner.png" width="64" height="64" loading="lazy"
                        alt="Banner ilustrativo artigo" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/upgrade-pc-por-onde-comecar.html" class="link hover-2">Saiba a ordem certa para fazer upgrade no seu PC!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-08-01">01 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

              </ul>

            </div>
          
        `;
    }
}

customElements.define('ms-popular-post', Popular);


class RecomendationPost extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                    <div class="card aside-card">

              <h2 class="headline headline-2 aside-title">
                <span class="span">Recomendados</span>
              </h2>

              <ul class="popular-list">

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/como-escolher-fonte-pc-gamer/banner.jpg"
                        width="64" height="64" loading="lazy" alt="Banner ilustrativo artigo"
                        class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/como-escolher-fonte-pc-gamer.html"
                          class="link hover-2">Guia Definitivo:
                          Como Escolher a Fonte Perfeita para Seu PC!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-08-25">25 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>


                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/dual-channel-memoria-ram/banner.jpg" width="64" height="64" loading="lazy"
                        alt="Dual Channel em
                        Memória RAM: O que é e por que usar" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/dual-channel-memoria-ram.html" class="link hover-2">Dual Channel em
                          Memória RAM: O que é e por que usar!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-08-15">15 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/Os-5-Principais-Tipos-de-Tela-de-Monitores/banner.png" width="64" height="64" loading="lazy"
                        alt="Os
                        5 Principais Tipos de Tela de Monitores" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/Os-5-Principais-Tipos-de-Tela-de-Monitores.html" class="link hover-2">Os
                          5 Principais Tipos de Tela de Monitores</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">20 mins read</p>

                        <time class="publish-date" datetime="2025-08-29">29 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/tipos-de-teclado-guia-completo/banner.png" width="64" height="64" loading="lazy"
                        alt="Qual o Melhor
                        Tipo de Teclado para Você? Entenda Antes de Comprar!" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h3 class="headline headline-4 card-title">
                        <a href="/posts/tipos-de-teclado-guia-completo.html" class="link hover-2">Qual o Melhor
                          Tipo de Teclado para Você? Entenda Antes de Comprar!</a>
                      </h3>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2025-05-11">11 ago 2025</time>
                      </div>

                    </div>

                  </div>
                </li>


              </ul>

            </div>
          
        `;
    }
}

customElements.define('ms-recomendation-post', RecomendationPost);