    async function getPhotographers() {
        // Récupére les données dans le json
        const response = await fetch("../../data/photographers.json");
        const data = await response.json();
        // Retourne le tableau photographers
        return ({
            photographers: data.photographers})
    }

    // Affiche les données des photographes
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer-section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    