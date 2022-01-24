function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html">
                <img src="${picture}"/>
                <h2>${name}</h2>
                <p class="location">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
            </a>
        `
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}