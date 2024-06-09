// Array com as informações das marcas
const carBrands = [
    {
        name: "Alfa Romeo",
        logoSrc: "/img/logos/alfaromeo.png",
        description: "A Alfa Romeo é uma fabricante de automóveis de luxo e alto desempenho da Itália, conhecida por seu estilo elegante e engenharia esportiva. Fundada em 1910 em Milão, a marca tem um longo histórico de competir em competições de carros, incluindo Fórmula 1 a mesma já conquistou vários títulos nas décadas de 1950 e 1970.",
        models: {
            hatchback: [
                { name: "MiTo", imgSrc: "/img/alfa_romeos/MiTo.png" },
                { name: "Giulietta", imgSrc: "/img/alfa_romeos/Giulietta.png" }
            ],
            suv: [
                { name: "Stelvio", imgSrc: "/img/alfa_romeos/Stelvio.png" },
                { name: "Stelvio Quadrifoglio", imgSrc: "/img/alfa_romeos/Stelvio_Quadrifoglio.png" },
                { name: "Tonale", imgSrc: "/img/alfa_romeos/Tonale.png" }
            ],
            sportcar: [
                { name: "4C", imgSrc: "/img/alfa_romeos/4C.png" },
                { name: "8C Competizion", imgSrc: "/img/alfa_romeos/8C_Competizion.png" }
            ]
        }
    },
    {
        name: "Audi",
        logoSrc: "/img/logos/audi.png",
        description: "Audi é uma fabricante de automóveis de luxo alemã, conhecida por seus veículos de alta qualidade, tecnologia avançada e design elegante.",
        models: {
            hatchback: [
                { name: "A2", imgSrc: "/img/audi/A2.png" },
                { name: "RS3", imgSrc: "/img/audi/RS3.png" },
                { name: "RS6", imgSrc: "/img/audi/RS6.png" }
            ],
            sedan: [
                { name: "A4", imgSrc: "/img/audi/A4.png" },
                { name: "A6", imgSrc: "/img/audi/A6.png" }
            ],
            suv: [
                { name: "RS Q8", imgSrc: "/img/audi/RSQ8.png" },
                { name: "E-Tron", imgSrc: "/img/audi/E-Tron.png" }
            ],
            sportcar: [
                { name: "TTS", imgSrc: "/img/audi/TTS.png" }
            ]
        }
    },
    // Adicione mais marcas conforme necessário
];

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const brandName = urlParams.get('brand');

    const conteudo = generateHTML(brandName);
    if (conteudo) {
        document.getElementById('conteudo').innerHTML = conteudo;
    }
});

function generateHTML(brandName) {
    const brand = carBrands.find(brand => brand.name.toLowerCase() === brandName.toLowerCase());
    if (brand) {
        // Lista de categorias de modelos suportadas
        const modelCategories = ['hatchback', 'sedan', 'suv', 'sportcar', 'coupe'];

        // Geração dinâmica das seções de modelos
        const sectionsHTML = modelCategories.map(category => {
            return brand.models[category] ? generateSectionHTML(capitalizeFirstLetter(category), brand.models[category]) : '';
        }).join('');

        return `
            <img id="logoesq" src="${brand.logoSrc}">
            <h1 class="neon">${brand.name}</h1>
            <img id="logodir" src="${brand.logoSrc}">
            <p>${brand.description}</p>
            ${sectionsHTML}
        `;
    } else {
        window.location.href = 'error.html';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateSectionHTML(sectionTitle, models) {
    return `
        <div id="${sectionTitle.toLowerCase()}">
            <h3 class="neonsub">${sectionTitle}:</h3>
            <div class="image">
                ${models.map(model => `
                    <div class="gallery">
                        <a href="comparador.html?model=${model.name}"><img src="${model.imgSrc}"></a>
                        <p class="desc">${model.name}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
