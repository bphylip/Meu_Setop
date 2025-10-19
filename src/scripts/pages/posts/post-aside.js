//Post Aside
class Popular extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                    <div class="card aside-card">

              <h3 class="headline headline-2 aside-title">
                <span class="span">Mais Lidas</span>
              </h3>

              <ul class="popular-list">

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/guia-de-compra-pc/pc-gm.webp"
                        width="64" height="64" loading="lazy" alt="Creating is a privilege but it’s also a gift"
                        class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/guia-de-compra-pc-gamer.html"
                          class="link hover-2">Guia de compra PC Gamer</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">24 Jun 2025</time>
                      </div>

                    </div>

                  </div>
                </li>


                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/como-escolher-placa-de-video-ideal//123.webp" width="64" height="64" loading="lazy"
                        alt="Being unique is better than being perfect" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/como-escolher-placa-de-video-ideal.html" class="link hover-2">Qual Placa
                          de
                          Vídeo Comprar? Veja Como Escolher Sua Placa de Vídeo!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/montando-computador-entenda-cada-peca/banner.jpg" width="64" height="64" loading="lazy"
                        alt="Every day, in every city and town across the country" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/montando-computador-entenda-cada-peca.html" class="link hover-2">Montando um Computador? Entenda Cada Peça e Escolha Certo!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/melhores-monitores-para-jogos-e-multitarefa/banner.avif" width="64" height="64" loading="lazy"
                        alt="Your voice, your mind, your story, your vision" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/melhores-monitores-para-jogos-e-multitarefa.html" class="link hover-2">Guia: Melhores monitores para jogos e multitarefa</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
                      </div>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/upgrade-pc-por-onde-comecar/banner.png" width="64" height="64" loading="lazy"
                        alt="Being unique is better than being perfect" class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/upgrade-pc-por-onde-comecar.html" class="link hover-2">Saiba a ordem certa para fazer upgrade no seu PC!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
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

              <h3 class="headline headline-2 aside-title">
                <span class="span">Recomendados</span>
              </h3>

              <ul class="popular-list">

                <li>
                  <div class="popular-card">

                    <figure class="card-banner img-holder" style="--width: 64; --height: 64;">
                      <img src="/src/assets/img/pages/posts/como-escolher-fonte-pc-gamer/banner.jpg"
                        width="64" height="64" loading="lazy" alt="Creating is a privilege but it’s also a gift"
                        class="img-cover">
                    </figure>

                    <div class="card-content">

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/como-escolher-fonte-pc-gamer.html"
                          class="link hover-2">Guia Definitivo:
                          Como Escolher a Fonte Perfeita para Seu PC!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">24 Jun 2025</time>
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

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/dual-channel-memoria-ram.html" class="link hover-2">Dual Channel em
                          Memória RAM: O que é e por que usar!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
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

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/Os-5-Principais-Tipos-de-Tela-de-Monitores.html" class="link hover-2">Os
                          5 Principais Tipos de Tela de Monitores</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
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

                      <h4 class="headline headline-4 card-title">
                        <a href="/src/pages/posts/tipos-de-teclado-guia-completo.html" class="link hover-2">Qual o Melhor
                          Tipo de Teclado para Você? Entenda Antes de Comprar!</a>
                      </h4>

                      <div class="warpper">
                        <p class="card-subtitle">15 mins read</p>

                        <time class="publish-date" datetime="2022-04-15">15 April 2022</time>
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