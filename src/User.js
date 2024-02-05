class User {
    // Constructeur de la classe User avec des paramètres pour initialiser les propriétés
    constructor(nameTitle, nameFirst, nameLast, locationCity, locationCountry, dobAge, email, pictureLarge) {
        // Initialiser les propriétés de l'instance avec les valeurs fournies
        this.nameTitle = nameTitle;
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.locationCity = locationCity;
        this.locationCountry = locationCountry;
        this.dobAge = dobAge;
        this.email = email;
        this.pictureLarge = pictureLarge;

        // Appeler une méthode privée pour générer l'élément HTML représentant l'utilisateur
        this.element = this.#generateUserElement();

        // Ajouter un événement de clic à l'élément utilisateur
        this.addClickEvent();
    }

    // Propriété privée pour suivre l'état de présence de l'utilisateur
    isPresent = false; // Défaut à false

    // Méthode privée pour générer l'élément HTML représentant l'utilisateur
    #generateUserElement() {
        const user = document.createElement("div");
        user.classList.add("user");
        user.setAttribute("data-present", this.isPresent);

        // Générer le contenu HTML de l'élément utilisateur
        const html = `
            <img src="${this.pictureLarge}">
            <div class="user--info">
                <h1>${this.nameTitle} ${this.nameFirst} ${this.nameLast}</h1>
                <p>${this.dobAge} years old</p>
                <p>${this.locationCity}, ${this.locationCountry}</p>
            </div>
            <a href="mailto:${this.email}">
                <span class="mail">✉️</span>
            </a>
        `;

        // Ajouter le contenu HTML à l'élément utilisateur
        user.innerHTML = html;

        return user;
    }

    // Méthode pour ajouter un événement de clic à l'élément utilisateur
    addClickEvent() {
        this.element.addEventListener("click", () => {
            this.togglePresence();
        });
    }

    // Méthode pour inverser l'état de présence de l'utilisateur et mettre à jour l'interface
    togglePresence() {
        this.isPresent = !this.isPresent;
        this.element.setAttribute("data-present", this.isPresent);
        this.element.classList.toggle("present", this.isPresent);
    }

    // Méthode pour ajouter l'élément utilisateur au parent spécifié
    render(parentElement) {
        parentElement.appendChild(this.element);
    }
}

// Exporter la classe User pour qu'elle puisse être utilisée ailleurs
export default User;
