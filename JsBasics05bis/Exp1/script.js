// /*
//     🐦 DAVID Bruno Twitter profile 🐦

//     🏁 Please take this quick challenge and rename carefully all the variable, and fix this broken code by assigning the correct 
//     variable keyword you have learned in the quest.
//     ex: const name = "David";

//   */

// const name = "David"; // ✅ Good!
// const lastName = "Bruno"; // ❌ the keyword to declare the variable is missing

// // à partir d'ici j'utilise la Upper Camel Case

// let Biography =
//   "Hi, I'm David Bruno from SF, I like to cook and meet new people."; // ❌ the variable name is not explicit. (this is David's biography)

// const LinkProfilPicture = "http://www.go.com/davif.png"; // ❌ the variable name is not explicit and the keyword is missing (this is David's profile picture)

// let Address = "San Francisco"; // ❌ the variable name is not explicit and the keyword is missing (try to guess what "San Francisco" could refer to)

// let Followers = 109; // ❌ the keyword to declare the variable is missing
// var Following = 200; // ❌ the keyword to declare the variable is missing

// // 🏁 Exercise 02 - David is following one more account increment the total of following account

// Following++;

// Écris un programme qui demande à l'utilisateur son nom et son âge.
//Vérifie si le nom est égal à "Bob" et si l'âge est égal à 30.
//Si les deux conditions sont vérifiées, affiche "Welcome", sinon "Go away".
//Essaie d'optimiser les prompts : ne demande pas l'âge si le nom n'est pas celui attendu.
let userName = prompt("What's your name?");
let userAge;

if (userName === "Bob") {
  userAge = prompt("How old are you");
  // Utilisez l'opérateur strict (===) pour comparer les nombres.
  if (userAge === "30") {
    console.log("You're welcome sir ;)");
  } else {
    console.log("Go away, punk !");
  }
} else {
  console.log("Go away, bloddy morron !");
}
