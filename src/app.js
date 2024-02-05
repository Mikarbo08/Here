// Importer la classe User depuis le fichier User.js
import User from "./User.js";

// Fonction asynchrone pour récupérer des utilisateurs aléatoires depuis l'API
const getRandomUser = async () => {
    const randomUser = `https://randomuser.me/api/?results=20`;
    const response = await fetch(randomUser);
    const data = await response.json();
    return data.results;
};

// Sélectionner le conteneur principal dans le document HTML
const container = document.querySelector("main");
let users; // Déclarer la variable à l'extérieur de la fonction pour qu'elle soit accessible globalement

// Fonction asynchrone pour afficher les utilisateurs
const displayUsers = async () => {
    // Récupérer les données des utilisateurs aléatoires
    const usersData = await getRandomUser();

    // Créer des instances de la classe User pour chaque utilisateur
    users = usersData.map(userData => {
        // Extraire les données nécessaires de l'objet utilisateur
        const { name, location, dob, email, picture } = userData;

        // Créer une instance de la classe User avec les données extraites
        return new User(
            name.title,
            name.first,
            name.last,
            location.city,
            location.country,
            dob.age,
            email,
            picture.large
        );
    });

    // Trier les utilisateurs par ordre alphabétique du nom de famille
    users.sort((a, b) => {
        const lastNameA = a.nameLast.toLowerCase();
        const lastNameB = b.nameLast.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
    });

    // Afficher les utilisateurs dans le conteneur principal
    users.forEach(user => {
        user.render(container);
    });
};

// Sélectionner les boutons de tri dans le document HTML
const sortByNameButton = document.getElementById("sort--name");
const sortByAgeButton = document.getElementById("sort--age");

// Ajouter des écouteurs d'événements pour les boutons de tri
sortByNameButton.addEventListener("click", () => {
    // Trier les utilisateurs par ordre alphabétique du nom de famille
    users.sort((a, b) => {
        const lastNameA = a.nameLast.toLowerCase();
        const lastNameB = b.nameLast.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
    });

    // Mettre à jour le contenu du conteneur principal
    updateMain();

    // Mettre en surbrillance le bouton sélectionné et désélectionner l'autre
    toggleSelectedButton(sortByNameButton, sortByAgeButton);
});

sortByAgeButton.addEventListener("click", () => {
    // Trier les utilisateurs par âge
    users.sort((a, b) => a.dobAge - b.dobAge);

    // Mettre à jour le contenu du conteneur principal
    updateMain();

    // Mettre en surbrillance le bouton sélectionné et désélectionner l'autre
    toggleSelectedButton(sortByAgeButton, sortByNameButton);
});

// Fonction pour mettre en surbrillance le bouton sélectionné et désélectionner l'autre
const toggleSelectedButton = (selectedButton, otherButton) => {
    selectedButton.classList.add("selected");
    otherButton.classList.remove("selected");
};

// Fonction pour mettre à jour le contenu du conteneur principal
const updateMain = () => {
    container.innerHTML = "";

    // Afficher à nouveau chaque utilisateur dans le conteneur principal
    users.forEach((user) => {
        user.render(container);
    });
};

// Exécuter la fonction displayUsers() pour afficher les utilisateurs initiaux
displayUsers();
