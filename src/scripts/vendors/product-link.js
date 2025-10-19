
// Array of objects mapping product IDs to new href links
const productLinks = [
    { id: 'bphylip-profile-img', href: 'https://www.youtube.com/' },


    // Monitores
    { id: 'monitor-lg-LG24GS60F-B', href: 'https://mercadolivre.com/sec/2R4BM7T' },
    { id: 'monitor-Samsung-OdysseyG30', href: 'https://mercadolivre.com/sec/21kbbcq' },
    { id: 'monitor-Alienware-Aw3423dwf', href: 'https://mercadolivre.com/sec/1ktpDpy' },
    { id: 'monitor-lg-22mp410-b', href: 'https://mercadolivre.com/sec/1mE6WFd' },
    { id: 'monitor-AOC-22B35HM2', href: 'https://mercadolivre.com/sec/2nG9SVF' },
    { id: 'monitor-Samsung-T350', href: 'https://mercadolivre.com/sec/25k6rJR' },
    { id: 'monitor-LG-24MS500-B', href: 'https://mercadolivre.com/sec/2qib3C1' },
    { id: 'monitor-LG-24GS60F-B', href: 'https://mercadolivre.com/sec/2R4BM7T' },
    { id: 'monitor-AOC-24g4p', href: 'https://mercadolivre.com/sec/1iWDPZe' },
    { id: 'monitor-AOC-HERO-QUAD', href: 'https://mercadolivre.com/sec/12ktB4t' },
    { id: 'monitor-Aoc-Destiny-25', href: 'https://mercadolivre.com/sec/1naxYgA' },
    { id: 'monitor-Samsung-Odyssey-G40-25', href: 'https://mercadolivre.com/sec/1PopFXC' },


    // Processador
    { id: 'AMD-Ryzen-5-5600gt', href: 'https://mercadolivre.com/sec/2ckuS8R' },
    { id: 'AMD-Ryzen-5-5500', href: 'https://mercadolivre.com/sec/1nBX8GV' },
    { id: 'AMD-Ryzen-7-5700x', href: 'https://mercadolivre.com/sec/1SPtj7z' },
    { id: 'AMD-Ryzen-5-7600', href: 'https://mercadolivre.com/sec/2EitN6P' },
    { id: 'AMD-Ryzen-7-7800X3D', href: 'https://mercadolivre.com/sec/2YuZEdm' },
    { id: 'INTEL-CORE-5-I5-12400F', href: 'https://mercadolivre.com/sec/2LEnrZU' },

    // Placa de vídeo
    { id: 'AMD-Radeon-RX-6600', href: 'https://mercadolivre.com/sec/2J71e6v' },
    { id: 'NVIDIA-Rtx-5060-8gb', href: 'https://mercadolivre.com/sec/1gdZE5A' },
    { id: 'NVIDIA-Rtx-5060TI-16gb', href: 'https://mercadolivre.com/sec/2qadWAw' },
    { id: 'NVIDIA-Rtx-5070-12gb', href: 'https://mercadolivre.com/sec/1wwhzqR' },

    // Cooler
    { id: 'Air-Deepcool-Ag400', href: 'https://mercadolivre.com/sec/2j7EnuL' },

    // Water Cooler
    { id: 'WC-Deepcool-LE240V2', href: 'https://mercadolivre.com/sec/2Jm98ys' },


    // Placas mãe
    { id: 'mb-Asus-TUF-GAMING-B650M-PLUS', href: 'https://mercadolivre.com/sec/2Ae2msA' },//específico
    { id: 'mb-h610m-t', href: 'https://s.shopee.com.br/AUijbwAgcv' }, //generico
    { id: 'mb-A520M', href: 'https://s.shopee.com.br/1BB4VG7hWx' }, //generico Gigabyte A520m K V2
    { id: 'Gigabyte-A520m-K-V2', href: 'https://mercadolivre.com/sec/2CUWDyx' },
    { id: 'Gigabyte-H610', href: 'https://mercadolivre.com/sec/1qq462M' }, //Intel
    { id: 'Gigabyte-b550m', href: 'https://mercadolivre.com/sec/11RcTRX' }, //AMD
    { id: 'Gigabyte-b650m', href: 'https://mercadolivre.com/sec/1ymsP3r' }, //AMD

    //Memória RAM
    { id: '2x8-XPG', href: 'xxx' },//específico
    { id: 'kit-2x16-kingston-fury-DDR5', href: 'https://mercadolivre.com/sec/1qhV3YW' }, //específico
    { id: '16gb-kingston-fury', href: 'https://mercadolivre.com/sec/2AJkqLy' }, //específico
    { id: '8gb-kingston-fury-DDR5', href: 'https://mercadolivre.com/sec/1eBH7ZE' }, //específico
    { id: 'XPG-8gb-gammix', href: 'https://mercadolivre.com/sec/2FtJK8r' },

    // Armazenamento
    { id: 'kingston-nv3-500gb', href: 'https://mercadolivre.com/sec/1xuKHqM' },
    { id: 'WD-1TB', href: 'https://mercadolivre.com/sec/1FA5kLK' },

    // Fonte
    { id: 'MSI-magA600DN-600W', href: 'https://mercadolivre.com/sec/1QSWYJs' },
    { id: 'GAMEMAX-Gp650-650W', href: 'https://mercadolivre.com/sec/11tf4EK' },
    { id: 'COOLER-MASTER-850W', href: 'https://mercadolivre.com/sec/2E2pw6h' },


    // Gabinete






];


// Function to update product links
function updateProductLinks() {
    // Select all relevant elements (links and cards)
    const productElements = document.querySelectorAll('.link');

    // Loop through each element
    productElements.forEach(element => {
        // Get the product ID from the data-id attribute
        const productId = element.getAttribute('id');

        // If the product ID exists, find the corresponding href in the array
        if (productId) {
            const product = productLinks.find(p => p.id === productId);
            if (product) {
                // If the element is a link, update the href attribute
                if (element.tagName === 'A') {
                    element.setAttribute('href', product.href);
                }
                // If the element is a card, create a link and append it
                // else if (element.classList.contains('product-card')) {
                //     const link = document.createElement('a');
                //     link.href = product.href;
                //     link.textContent = 'View Product';
                //     element.appendChild(link); 
                //     // Append the link to the card
                // }
            }
        }
    });
}

// Call the function to update the links
document.addEventListener('DOMContentLoaded', updateProductLinks);