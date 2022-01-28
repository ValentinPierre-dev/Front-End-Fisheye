function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html?id=${id}">
                <img src="${picture}"/>
                <h2>${name}</h2>
                <p class="location">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            </a>
        `
        return (article);
    }

    function getUserHeader() {
        const section = document.querySelector(".photographer-header");
        section.innerHTML = `
            <div class="photographer-header__description">
                <h3>${name}</h3>
                <p class="photographer-header__location">${city}, ${country}</p>
                <p class="photographer-header__tagline">${tagline}</p>
            </div>
            <button class="photographer-header__contact-button" onclick="displayModal()">Contactez-moi</button>
            <img src="${picture}" alt="" class="photographer-header__photo">
        `
        return (section);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserHeader }
}