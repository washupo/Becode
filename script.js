// Fonction pour fermer la barre latérale
function closeNav() {
  // Définir la largeur de la barre latérale à "0", la masquant
  document.getElementById("mySidebar").style.width = "0";
  // Rétablir la marge gauche du contenu principal à "0" pour compenser la fermeture de la barre latérale
  document.getElementById("main").style.marginLeft = "0";
}

// Fonction pour ouvrir la barre latérale
function openNav() {
  // Définir la largeur de la barre latérale à "250px", l'affichant
  document.getElementById("mySidebar").style.width = "250px";

  // Déplacer la marge gauche du contenu principal de "250px" pour faire de la place à la barre latérale ouverte
  document.getElementById("main").style.marginLeft = "250px";
}
