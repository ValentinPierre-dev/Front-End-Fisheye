// Factory dédiée aux médias

function mediaFactory(data) {
    let { title, likes, image, id, video, date } = data;

    const photo = `assets/photos/Photographers ID photos/${image}`;
    const movie = `assets/photos/Photographers ID photos/${video}`;

    // Incrémentation des likes
    function likesPlus() {
        const heartToggler = document.getElementById('hearts-'+id);
        heartToggler.innerHTML = `<i class="fas fa-heart heartsChanger--heart full" onclick="likesMoins(${id})"></i>`;
        likes++;
        document.getElementById('likes-'+id).innerText = likes;
        
    }

    // Décrémentation des likes
    function likesMoins() {
        const heartToggler = document.getElementById('hearts-'+id);
        heartToggler.innerHTML = `<i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})"></i>`;
        likes--;
        document.getElementById('likes-'+id).innerText = likes;
    }

    // Construit la section portfolio
    function getUserMedias() {
        const media = document.createElement( 'article' );
        const imageOrVideo = movie.indexOf("mp4");
        if (imageOrVideo !== -1){
            media.innerHTML = `
            <video class="photos" onclick="openLightbox(${id})">
                <source src="${movie}#t=0.1" alt="${title}">
            </video>
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p class="photo-likes" id="likes-${id}">${likes}</p>
                    <div class="heartsChanger" id="hearts-${id}">
                        <i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})"></i>
                    </div>  
                </div>
            </div>
        `
        } else {
            media.innerHTML = `
            <img src="${photo}" class="photos" alt="${title}" onclick="openLightbox(${id})">
            <div class="portfolio__caption">
                <h4>${title}</h4>
                <div class="portfolio__caption--likes">
                    <p id="likes-${id}">${likes}</p>
                    <div class="heartsChanger" id="hearts-${id}">
                        <i class="far fa-heart heartsChanger--heart empty" onclick="likesPlus(${id})"></i>
                    </div>
                </div>
            </div>
        `
        }

        return (media);
    }



    return { title, likes, image, video, getUserMedias, likesPlus, likesMoins, id, date }
}