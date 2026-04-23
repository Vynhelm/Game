function jouer(choixJoueur) {
    const options = ["pierre", "feuille", "ciseaux"];
    const choixOrdi = options[Math.floor(Math.random() * 3)];

    let resultat = "";

    if (choixJoueur === choixOrdi) {
        resultat = "Égalité ! L'ordinateur avait aussi " + choixOrdi;
    } else if (
        (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
        (choixJoueur === "feuille" && choixOrdi === "pierre") ||
        (choixJoueur === "ciseaux" && choixOrdi === "feuille")
    ) {
        resultat = "Tu gagnes ! L'ordinateur avait " + choixOrdi;
    } else {
        resultat = "Tu perds ! L'ordinateur avait " + choixOrdi;
    }

    document.getElementById("resultat").textContent = resultat;
}
