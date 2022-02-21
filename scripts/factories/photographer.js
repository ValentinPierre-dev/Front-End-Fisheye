// Factory dédiée aux photographes

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    // Construit la card du photographe pour l'index
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html?id=${id}">
                <img src="${picture}" alt"${name}"/>
                <h2>${name}</h2>
                <p class="location">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            </a>
        `
        return (article);
    }

    // Construit le bandeau descriptif du photographe
    function getUserHeader() {
        const section = document.querySelector(".photographer-header");
        section.innerHTML = `
            <div class="photographer-header__description">
                <h3>${name}</h3>
                <p class="photographer-header__location">${city}, ${country}</p>
                <p class="photographer-header__tagline">${tagline}</p>
            </div>
            <button class="photographer-header__contact-button" onclick="displayModal()">Contactez-moi</button>
            <img src="${picture}" alt="${name}" class="photographer-header__photo">
        `
        return (section);
    }

    // Construit la partie tarif de la barre fixe
    function getUserInfo() {
        const info = document.querySelector(".infos");
        const prix = document.createElement("p");
        prix.innerText = `${price} / jour`
        info.appendChild(prix);

        return (info);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserHeader, getUserInfo }
}