let age = parseInt(prompt("Entrez votre âge: "));

let permisDeConduire = prompt("Avez-vous un permis de conduire valide? (Oui/Non)").toLowerCase();


if (age >= 18 && (permisDeConduire === "oui" || permisDeConduire === "yes")) {
 console.log("Vous êtes autorisé(e) à louer une voiture.");
} else {
 console.log("Vous ne remplissez pas les conditions pour louer une voiture.");
}