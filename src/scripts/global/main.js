// Importação global dos componentes
import '/src/scripts/global/components/ms-header.js';
import '/src/scripts/global/components/ms-footer.js'






//footer

// class Footer extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//                 <section class="footer">

//         <div class="box-container">

//             <div class="box">
//                 <h3>Acesso rápido</h3>
//                 <a class="links" href="/index.html">home</a>
//                 <a class="links" href="articles.html">artigos</a>
//                 <a class="links" href="ofertas.html">Ofertas</a>
//                 <!-- <a class="links" href="#about">Sobre</a> -->
//             </div>




//             <!-- <div class="box">
//                 <h3>Lorem what</h3>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//                 <p> Lorem : <i> 7:00 - 10:30pm </i> </p>
//             </div> -->

//             <div class="box">
//                 <h3>Fale conosco</h3>
//                 <p> <i class="fas fa-phone"></i> (14) 99796-7335 </p>
//                 <p> <i class="fas fa-envelope"></i> omeusetop@gmail.com </p>
//                 <p> <i class="fas fa-map"></i> São Paulo, Brasil </p>
//                 <div class="share">
//                     <a href="https://www.youtube.com/@MeuSetop" class="fab fa-youtube"></a>
//                     <a href="https://www.instagram.com/meusetop/" class="fab fa-instagram"></a>
//                     <a href="https://www.tiktok.com/@meusetop" class="fab fa-tiktok"></a>
//                     <a href="https://x.com/MeuSetop" class="fa-brands fa-x-twitter"></a>

//                 </div>
//             </div>

//             <div class="box">
//                 <h3>Novidades</h3>
//                 <p>Increva-se para receber novidades e ofertas</p>
//                 <form action="">
//                     <input type="email" name="" class="email" placeholder="Insira seu E-mail" id="">
//                     <input type="submit" value="subscribe" class="btn">
//                 </form>
//             </div>

//         </div>

//     </section>
//         `;
//     }
// }

// customElements.define('ms-footer', Footer);



// Loader Draw 

class msload extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <div class="load" id="preloader">
                    <div class="bars-common bar-one"></div>
                    <div class="bars-common bar-two"></div>
                    <div class="bars-common bar-three"></div>

                    <div class="squares-common square-one"></div>
                    <div class="squares-common square-two"></div>
                    </div>
        `;
    }
}

customElements.define('pre-loader', msload);


// Pre-loader config

window.onload = function () {

    const load = document.querySelector('#preloader')

    document.querySelector('#preloader').classList.add('loader-Fade-Out');
    setTimeout(() => {
        load.remove();
    }, "1100");


}



//WhatsApp banner

class WaBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                        <div class="ms-card-whatsapp">
                  <div class="ms-card-whatsapp__icon">
                    <img src="/src/assets/img/global/sm2.svg" alt="MeuSetop">
                  </div>
                
                  <div class="ms-card-whatsapp__content">
                    <strong>O MeuSetop está no WhatsApp!</strong>
                    <p>Entre no canal e acompanhe ofertas, notícias e dicas de tecnologia.</p>
                  </div>
                
                  <a href="#"
                    id="wa-group" 
                     class="ms-card-whatsapp__button link" 
                     target="_blank" rel="noopener">
            
                     <i class="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
        `;
    }
}

customElements.define('ms-wa-banner', WaBanner);


//credit

class Credit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="credit"> Created by <span>bphylip</span> | © All Rights Reserved </div>
        `;
    }
}

customElements.define('ms-credit', Credit);




// go top btn 

const goTopBtn = document.querySelector('.goTop');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "block"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})



// Scroll Reveal Home 

const homeSR = ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 100,
    // reset: true,
    // //Animations repeat
})



homeSR.reveal(`.blogs-slider, .heading, .banner, .features, .review`, { origin: 'bottom' })
homeSR.reveal(`.SrImg`, { origin: 'left', delay: 100 })
homeSR.reveal(`.SrContent`, { origin: 'right', delay: 100 })


// Scroll Reveal Articles 

const articlesSR = ScrollReveal({
    origin: 'top',
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 300,
})

// articlesSR.reveal(`.recent-post-card`, { origin: 'bottom', delay: 50 })
articlesSR.reveal(`.popular-post, .aside-card`, { origin: 'right', duration: 1000, delay: 100 })


// Scroll Reveal Posts 

const postSR = ScrollReveal({
    // origin: 'top',
    distance: '80px',
    duration: 1500,
    delay: 200,
    reset: false,
})




postSR.reveal(`.titleSR`, { origin: 'left', duration: 1000, delay: 100 })
postSR.reveal(`.sub-titleSR`, { origin: 'right', duration: 1000, delay: 100 })
postSR.reveal(`.popular-post, .aside-card`, { origin: 'right', duration: 1000, delay: 100, reset: false })
// postSR.reveal(`.recent-post-card`, { origin: 'bottom', delay: 200 })
postSR.reveal(`.postSr, .faq`, { origin: 'bottom', delay: 10, viewFactor: 0.1 })












