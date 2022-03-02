// Factory dédiée aux photographes

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    // Construit la card du photographe pour l'index
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html?id=${id}" aria-label="${name}">
                <img src="${picture}" alt"${name}"/>
                <h2 aria-describedby="${name}">${name}</h2>
            </a>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>
            
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
            <button class="photographer-header__contact-button" onclick="displayModal()" aria-label="Contact Me">Contactez-moi</button>
            <img src="${picture}" alt="${name}" class="photographer-header__photo">
        `
        return (section);
    }

    // Construit le bandeau descriptif du photographe
    function getContactForm() {
        const modal = document.getElementById("modal_bg");
        modal.innerHTML = `
        <div id="contact_modal" class="modal_bg" aria-labelledby="contact_name">
          <div class="modal">
            <header>
              <h2 id="contact_name">Contactez-moi</br>${name}</h2>
              <img src="assets/icons/close.svg" id="closemd" onclick="closeModal()" tabindex ="-1"/>
            </header>
            <form onsubmit="sendModal(event)">
              <div>
                <label for="firstname">Prénom</label>
                <input class="text-control" type="text" id="firstname" name="firstname"  /><br>
              </div>
              <div>
                <label for="lastname">Nom</label>
                <input class="text-control" type="text" id="lastname" name="lastname" /><br>
              </div>
              <div>
                <label for="email">E-mail</label>
                <input class="text-control" type="email" id="email" name="email"/><br>
              </div>
              <div>
                <label for="message">Votre message</label>
                <textarea class="text-control" id="message" name="message" ></textarea><br>
              </div>
              <button class="contact_button" aria-label="Send" id="send" >Envoyer</button>
            </form>
          </div>
        </div>
        `
        return (modal);
    }

    // Construit la partie tarif de la barre fixe
    function getUserInfo() {
        const info = document.querySelector(".infos");
        const prix = document.createElement("p");
        prix.innerText = `${price} / jour`
        info.appendChild(prix);

        return (info);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserHeader, getUserInfo, getContactForm }
}