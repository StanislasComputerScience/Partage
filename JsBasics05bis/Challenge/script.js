let a = prompt("Entrez un nombre");
let b = prompt("Entrez un nombre");
let c = prompt("Entrez un nombre");

let str;

if (a == b && b == c) {
  str = "The three variables are the same";
} else if (a == b || a == c || b == c) {
  str = "Two of the variables are the same";
} else {
  str = "All variables are differents";
}

console.log(a);

// Mettre à jour le contenu des éléments HTML
document.getElementById("a").textContent = a;
document.getElementById("b").textContent = b;
document.getElementById("c").textContent = c;
document.getElementById("str").textContent = str;
