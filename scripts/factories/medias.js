function mediaFactory(data) {
    const { title, likes, image } = data;

    const photo = `assets/photos/Photographers ID photos/${image}`;

    function getUserMedias() {
        const media = document.createElement( 'article' );
        media.innerHTML = `
            <img src="${photo}" alt="" onclick="openLightbox();currentSlide(1)">
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p>${likes}</p>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        `
        return (media);
    }

    return { title, likes, image, getUserMedias }
}