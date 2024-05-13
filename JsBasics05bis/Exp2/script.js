let today = new Date().getDay();
console.log(today);
let stringDay;

switch (today) {
  case 0:
    stringDay = "Dimanche";
    break;
  case 1:
    stringDay = "Lundi";
    break;
  case 2:
    stringDay = "Mardi";
    break;
  case 3:
    stringDay = "Mercredi";
    break;
  case 4:
    stringDay = "Jeudi";
    break;
  case 5:
    stringDay = "Vendredi";
    break;
  case 6:
    stringDay = "Samedi";
    break;
  default:
    console.log("Error!");
    break;
}

console.log(stringDay);

// Mettre à jour le contenu des éléments HTML avec les valeurs de today et stringDay
document.getElementById("today").textContent = today;
document.getElementById("stringDay").textContent = stringDay;
//gg