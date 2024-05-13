// Declare and define three variables using a numerical value

// * If the three variables are equal, display "The three variables are the same" in the console
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
// * If the variables are all different display "all variables are different" in the console

let a = prompt("Entrez un nombre"); // 5
let b = prompt("Entrez un nombre"); // 5
let c = prompt("Entrez un nombre"); // 2

let str;

if (a == b) {
  if (b == c) {
    str = "The three variables are the same";
  } else if (b == c) {
    str = "two variables are the same";
  } else {
    str = "All variables are different";
  }
} else {
  str = "Two of the variables are the same";
}
console.log(A);

// Mettre à jour le contenu des éléments HTML
document.getElementById("a").textContent = a;
document.getElementById("b").textContent = b;
document.getElementById("c").textContent = c;
document.getElementById("str").textContent = str;
