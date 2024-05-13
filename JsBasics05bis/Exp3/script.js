const animal = {
  name: "Lucky", 
  species: "Chat", 
  age: "3"
};

// Vérifie si le nom de l'animal est "Lucky" et affiche un message approprié
animal.name === "Lucky" ? console.log("Bienvenue Lucky !") : console.log("Mauvais chat détecté !");

// Mettre à jour le contenu des éléments HTML 
document.getElementById("name").textContent = animal.name;
document.getElementById("species").textContent = animal.species;
document.getElementById("age").textContent = animal.age;
