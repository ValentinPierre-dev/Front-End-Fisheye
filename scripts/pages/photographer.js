const mediaArray = [];

async function getData() {

    // Récupère l'id du photographe via l'url
    const id = +window.location.href.split("=")[1];

    // Récupère les données du json
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();

    // Retourne les données du photographe en fonction de son id
    return ({
        photographer: data.photographers.find(p => p.id === id),
        medias: data.media.filter(m => m.photographerId === id)
    })
}

// Affiche le descriptif du photographe
async function displayData(photographer) {
    const photographerModel = photographerFactory(photographer).getUserHeader();
};

// Affiche la barre fixe des likes et tarifs du photographe
async function displayInfos(photographer) {
    const photographerInfo = photographerFactory(photographer).getUserInfo();
};

// Construit la partie likes de la barre fixe
function getUserLikes(totalLikes) {
    const infoLikes = document.querySelector(".infos__likes");
    const total = document.createElement("p");
    total.setAttribute('id', 'total-likes');
    total.innerText = `${totalLikes}`;
    infoLikes.appendChild(total);
    }

// Affiche le nombre total de like du photographe
async function displayLikes(media) {
    const sumall = media.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
    getUserLikes(sumall);
    console.log(sumall); 
};

// Affiche le portfolio du photographe
async function displayMedias(medias) {
    const portfolioSection = document.querySelector(".portfolio");

    medias.forEach((media) => {
        const portfolioModel = mediaFactory(media);
        mediaArray.push(portfolioModel)
        const userPortfolio = portfolioModel.getUserMedias();
        portfolioSection.appendChild(userPortfolio);
    });
};

// Incrémentation de like
function likesPlus(id) {
    const mediaToUpdate = mediaArray.find(m => m.id === id);
    mediaToUpdate.likesPlus();
    const totalLikes = document.getElementById('total-likes');
    totalLikes.innerHTML = +totalLikes.innerHTML + 1;
    /*const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.innerHTML = "";
    mediaArray.forEach((media) => {
           const userPortfolio = media.getUserMedias();
           portfolioSection.appendChild(userPortfolio);
       });*/
}

// Décrémentation de like
function likesMoins(id) {
    const mediaToUpdate = mediaArray.find(m => m.id === id);
    mediaToUpdate.likesMoins();
    const totalLikes = document.getElementById('total-likes');
    totalLikes.innerHTML = +totalLikes.innerHTML - 1;
    /*const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.innerHTML = "";
    mediaArray.forEach((media) => {
           const userPortfolio = media.getUserMedias();
           portfolioSection.appendChild(userPortfolio);
       });*/
}


function openLightbox(id) {
    const lightbox = lightboxFactory(mediaArray, id)
    lightbox.displayLightbox()
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const body = document.querySelector('body');
    lightbox.classList.add('fadeOut')
    window.setTimeout(() => {
        body.removeChild(lightbox);
    }, 500)
}



// Initialise toutes les données précédentes pour les afficher
async function init() {
    const { photographer, medias } = await getData();
    displayData(photographer);
    displayInfos(photographer);
    displayMedias(medias);
    displayLikes(medias);
    console.log(photographer);
    console.log(medias);
};

init();

