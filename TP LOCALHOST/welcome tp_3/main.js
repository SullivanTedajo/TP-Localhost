// Déclaration des variables Boutons 
let premierBouton=document.getElementById("button-1");
let secondBouton=document.getElementById("button-2");
let troisiemeBouton=document.getElementById("button-3");
// Ecoute de l'évènement du Bouton 1
premierBouton.addEventListener("click", function(){
    alert("Vous avez appuyé sur le premier Bouton");
});
// Ecoute de l'évènement du Bouton 2
secondBouton.addEventListener("click", function(){
    alert("Vous avez appuyé sur le deuxième Bouton");
});
// Ecoute de l'évènement du Bouton 3
troisiemeBouton.addEventListener("click", function(){
    alert("Vous avez appuyé sur le troisième Bouton");
});