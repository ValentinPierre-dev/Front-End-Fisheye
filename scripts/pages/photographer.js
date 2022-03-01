let mediaArray = [];

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

function openContactForm(photographer) {
    const contactForm = photographerFactory(photographer).getContactForm();
}

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
    mediaArray = []
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
}

// Décrémentation de like
function likesMoins(id) {
    const mediaToUpdate = mediaArray.find(m => m.id === id);
    mediaToUpdate.likesMoins();
    const totalLikes = document.getElementById('total-likes');
    totalLikes.innerHTML = +totalLikes.innerHTML - 1;
}

// Ouvre la lightbox
function openLightbox(id) {
    document.addEventListener('keyup', keyPress)
    const lightbox = lightboxFactory(mediaArray, id)
    lightbox.displayLightbox()
}

// Passe à l'image suivante
function nextImage(id) {
    const next = lightboxFactory(mediaArray, id)
    next.displayNext()
}

// Passe à l'image précédente
function prevImage(id) {
    const next = lightboxFactory(mediaArray, id)
    next.displayPrev()
}

// Ferme la lightbox
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const body = document.querySelector('body');
    lightbox.classList.add('fadeOut')
    window.setTimeout(() => {
        body.removeChild(lightbox);
    }, 500)
    document.removeEventListener('keyup', keyPress)
}

// Navigation au clavier dans la lightbox
function keyPress(e) {
    if (e.key === 'Escape') {
        closeLightbox()
    }
    else if (e.key === 'ArrowLeft') {
        prevImage()
    }
    else if (e.key === 'ArrowRight') {
        nextImage()
    }
}

// Tri par popularité
function sortByPop() {
    mediaArray.sort(function compare(a, b){
        if (a.likes < b.likes)
            return 1;
        if (a.likes > b.likes)
            return -1;
        return 0;
    })
    const portfolio = document.querySelector(".portfolio")
    portfolio.innerHTML=""
    displayMedias(mediaArray)
    console.log(mediaArray)
    
}

// Tri par date
function sortByDate() {
    mediaArray.sort(function compare(a, b){
        if (a.date < b.date)
            return 1;
        if (a.date > b.date)
            return -1;
        return 0;
    })
    const portfolio = document.querySelector(".portfolio")
    portfolio.innerHTML=""
    displayMedias(mediaArray)
    console.log(mediaArray)
}

// Tri par titre
function sortByTitle() {
    mediaArray.sort(function compare(a, b){
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
        return 0;
    })
    const portfolio = document.querySelector(".portfolio")
    portfolio.innerHTML=""
    displayMedias(mediaArray)
    console.log(mediaArray)
}

// Initialise toutes les données précédentes pour les afficher
async function init() {
    const { photographer, medias } = await getData();
    displayData(photographer);
    displayInfos(photographer);
    openContactForm(photographer);
    displayMedias(medias);
    displayLikes(medias);
    console.log(photographer);
    console.log(mediaArray);
};

init();

