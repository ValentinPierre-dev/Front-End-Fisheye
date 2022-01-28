//Mettre le code JavaScript lié à la page photographer.html

async function getData() {
    // Penser à remplacer par les données récupérées dans le json
    const id = +window.location.href.split("=")[1];
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographer: data.photographers.find(p => p.id === id),
        medias: data.media.filter(m => m.photographerId === id)
    })
}

async function displayData(photographer) {
    const photographersSection = document.querySelector(".photographer-header");
    const photographerModel = photographerFactory(photographer);
    const userHeader = photographerModel.getUserHeader();
    photographersSection.appendChild(userHeader);
};

async function displayMedias(medias) {
    const portfolioSection = document.querySelector(".portfolio");

    medias.forEach((media) => {
        const portfolioModel = mediaFactory(media);
        const userPortfolio = portfolioModel.getUserMedias();
        portfolioSection.appendChild(userPortfolio);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographer, medias } = await getData();
    displayData(photographer);
    displayMedias(medias);
    console.log(photographer)
    console.log(medias)
    console.log(window.location.href.split("=")[1])
};

init();
