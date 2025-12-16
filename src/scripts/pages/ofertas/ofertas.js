// Dados dos Produtos
const productsData = [
    {
        id: "monitor-lg-LG24GS60F-B",
        category: "Monitores",
        title: "Monitor Gamer LG UltraGear 24”",
        description: "24GS60F-B IPS Full HD 180Hz 1ms (GtG) NVIDIA® G-SYNC® AMD FreeSync™ HDR10 sRGB 99% HDMI DisplayPort",
        price: "778,00",
        image: "/src/assets/img/pages/ofertas/Products/monitor-lg-LG24GS60F-B.webp",
        badge: "MAIS VENDIDO",
        rating: 4.9
    },
    {
        id: "monitor-Samsung-OdysseyG30",
        category: "Monitores",
        title: "Monitor Samsung Odyssey G30",
        description: "LS24BG300ELMZD 24\" Full HD Va 144Hz FreeSync Preto",
        price: "697,30",
        image: "/src/assets/img/pages/ofertas/Products/monitor-Samsung-OdysseyG30.webp",
        badge: "MAIS VENDIDO",
        rating: 4.8
    },
    {
        id: "monitor-Alienware-Aw3423dwf",
        category: "Monitores",
        title: "Monitor Gamer Curvo Alienware",
        description: "Alienware Qd-oled De 34\" Aw3423dwf",
        price: "6719,00",
        image: "/src/assets/img/pages/ofertas/Products/monitor-Alienware-Aw3423dwf.webp",
        badge: "EM PROMOÇÃO",
        rating: 5.0
    },
    {
        id: "monitor-lg-22mp410-b",
        category: "Monitores",
        title: "Monitor LG Gamer 21.5'",
        description: "Full Hd 75hz Freesync 22mp410-b.awzm Cor Preto 127/220V",
        price: "519,90",
        image: "/src/assets/img/pages/ofertas/Products/monitor-lg-22mp410-b.webp",
        badge: "MAIS VENDIDO",
        rating: 4.9
    },
    {
        id: "monitor-Samsung-Odyssey-G40-25",
        category: "Monitores",
        title: "Monitor Samsung Odyssey G40 25\"",
        description: "Preto, Full HD, IPS, 240Hz, 1ms, HDMI, FreeSync Premium, G-Sync",
        price: "1399,00",
        image: "/src/assets/img/pages/ofertas/Products/monitor-Samsung-Odyssey-G40-25.webp",
        badge: "EM PROMOÇÃO",
        rating: 4.9
    },
    {
        id: "AMD-Ryzen-5-5600gt",
        category: "Processador",
        title: "Processador Amd Ryzen 5 5600gt",
        description: "Processador Amd Ryzen 5 5600gt Am4 3.6ghz - 100-100001488box",
        price: "802,90",
        image: "/src/assets/img/pages/ofertas/Products/AMD-Ryzen-5-5600gt.webp",
        badge: "EM PROMOÇÃO",
        rating: 4.9
    },
    {
        id: "AMD-Ryzen-7-7800X3D",
        category: "Processador",
        title: "Processador gamer AMD Ryzen 7 7800X3D",
        description: "AMD Ryzen 7 7800X3D 100-100000910WOF de 8 núcleos e 5GHz com gráfico integrado",
        price: "2500,00",
        image: "/src/assets/img/pages/ofertas/Products/AMD-Ryzen-7-7800X3D.webp",
        badge: "RECOMENDADO",
        rating: 4.9
    },
    {
        id: "NVIDIA-Rtx-5060TI-16gb",
        category: "Placa de vídeo",
        title: "Galax Rtx 5060 Ti 16gb",
        description: "Placa De Vídeo Galax Rtx 5060 Ti 16gb Black Gddr7 128 Bits",
        price: "3533,07",
        image: "/src/assets/img/pages/ofertas/Products/NVIDIA-Rtx-5060TI-16gb.webp",
        badge: "MAIS VENDIDO",
        rating: 4.9
    },
    {
        id: "NVIDIA-Rtx-5070-12gb",
        category: "Placa de vídeo",
        title: "Gigabyte Rtx 5070 Windforce",
        description: "Placa De Vídeo Gigabyte Rtx 5070 Windforce Oc Sff 12gb",
        price: "4819,00",
        image: "/src/assets/img/pages/ofertas/Products/NVIDIA-Rtx-5070-12gb.webp",
        badge: "EM PROMOÇÃO",
        rating: 5.0
    },
    {
        id: "16gb-kingston-fury",
        category: "Memória RAM",
        title: "Memória Ddr4 Kingston Fury",
        description: "Memória Ddr4 Kingston Fury Beast 16gb 3200mhz para PC",
        price: "429,14",
        image: "/src/assets/img/pages/ofertas/Products/16gb-kingston-fury.webp",
        badge: "RECOMENDADO",
        rating: 5
    },
    {
        id: "8gb-kingston-fury-DDR5",
        category: "Memória RAM",
        title: "Memória Kingston Fury Beast 8gb Ddr5",
        description: "Memória Ram Kingston Fury Beast 8gb Ddr5, 5600mhz Cl40",
        price: "276,18",
        image: "/src/assets/img/pages/ofertas/Products/8gb-kingston-fury-DDR5.webp",
        badge: "PROMOÇÃO",
        rating: 4.7
    },

];

// Gerar as Estrelas de Avaliação (Rating)
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Ícone de estrela completa
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fa fa-star" aria-hidden="true"></i>';
    }

    // Meia estrela
    if (hasHalfStar) {
        starsHtml += '<i class="fa fa-star-half-o" aria-hidden="true"></i>'; // Usando fa-star-half-o ou similar
    }

    // Estrelas vazias para completar 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }

    return starsHtml;
}

// Cria o model HTML do Card
function createProductCardHTML(product) {
    const numericPrice = parseFloat(product.price.replace(',', '.'));
    //Formatar o número no padrão BRL
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(numericPrice);

    //Separar o preço formatado em partes (após a formatação)
    const priceWithoutCurrency = formattedPrice.replace(/R\$\s*/, '');
    const priceParts = priceWithoutCurrency.split(',');
    const integerPart = priceParts[0]; // Ex: "1.200"
    const decimalPart = priceParts.length > 1 ? priceParts[1] : '00'; // Ex: "50"

    const stars = generateStars(product.rating);

    return `
        <div class="product-card">
            <a href="#" id="${product.id}" class="link" target="_blank" rel="nofollow sponsored">
                ${product.badge ? `<div class="badge">${product.badge}</div>` : ''}
                <div class="product-tumb">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-details">
                    <span class="product-catagory">${product.category}</span>
                    <h2>${product.title}</h2>
                    <!-- <p>${product.description}</p> -->

                    <div class="rgb-divider"></div>
                    <div class="product-bottom-details">
                        <div class="product-price">R$ ${integerPart},<small>${decimalPart}</small></div>
                        <div class="product-links">
                            ${stars}
                        </div>
                    </div>
                </div>
                <div class="buyBtn">
                    <h3>Aproveitar</h3>
                </div>
            </a>
        </div>
    `;
}

//criando função de shuffle card.
function shuffleArray(productsData) {
    let currentIndex = productsData.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [productsData[currentIndex], productsData[randomIndex]] = [
            productsData[randomIndex], productsData[currentIndex]];
    }

    return productsData;
}

//Injeta os Cards no HTML e Sincroniza os Links
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list');
    let allCardsHtml = '';

    const shuffledProducts = shuffleArray(productsData);

    shuffledProducts.forEach(product => {
        allCardsHtml += createProductCardHTML(product);
    });

    if (productContainer) {

        productContainer.innerHTML = allCardsHtml;

        if (typeof updateProductLinks === 'function') {
            updateProductLinks();
        } else {
            console.error("A função global updateProductLinks() não foi encontrada. Verifique se o arquivo links.js foi carregado antes deste.");
        }

    } else {
        console.error("Container de produtos com id 'product-list' não encontrado.");
    }
});
