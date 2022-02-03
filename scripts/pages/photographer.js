//Mettre le code JavaScript lié à la page photographer.html
const mediaArray = [];
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
    const photographerModel = photographerFactory(photographer).getUserHeader();
};

async function displayInfos(photographer) {
    const photographerInfo = photographerFactory(photographer).getUserInfo();
};

async function displayMedias(medias) {
    const portfolioSection = document.querySelector(".portfolio");
    const lightboxSection = document.getElementById("lightbox-content");

    medias.forEach((media) => {
        const portfolioModel = mediaFactory(media);
        mediaArray.push(portfolioModel)
        const userPortfolio = portfolioModel.getUserMedias();
        portfolioSection.appendChild(userPortfolio);

        const userLightbox = portfolioModel.getLightbox();
        lightboxSection.appendChild(userLightbox);
    });
};

async function displayLikes(media) {
    const sumall = media.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
    const photographerLikes = mediaFactory(media).getUserLikes(sumall);
    console.log(sumall); 
};

async function init() {
    // Récupère les datas des photographes
    const { photographer, medias } = await getData();
    displayData(photographer);
    displayInfos(photographer);
    displayMedias(medias);
    displayLikes(medias)
    console.log(photographer)
    console.log(medias)
};

init();

function likesPlus(id) {
 const mediaToUpdate = mediaArray.find(m => m.id === id)
 mediaToUpdate.likesPlus()
 const portfolioSection = document.querySelector(".portfolio");
 portfolioSection.innerHTML = "";
 mediaArray.forEach((media) => {
        const userPortfolio = media.getUserMedias();
        portfolioSection.appendChild(userPortfolio);
    });
}
   
