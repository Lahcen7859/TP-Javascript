//Question 1 Idlahcen Lahcen

let lien= document.querySelector("nav a"); //On crée une variable "lien" qui stocke le premier élement "a" du "nav"

lien.href= "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"; //On modifie son "href" afin qu'il pointe vers le site officiel

//Question 2

let texte= document.querySelector('input[type="text"]'); //On sélectionne le input de type texte du html qu'on stock dans la variable "texte"

let bouton= document.querySelector('input[type="button"]');//On sélectionne le input de type button du html qu'on stock dans la variable "bouton"

bouton.onclick= function(){ //Lorsque que l'utilisateur clique sur le bouton, la fonction éxecute le code ci-dessous

    if (texte.value !=="Oui" && texte.value !=="Non"){ //On vérifie si le contenu du texte n'est pas "Oui" ET n'est pas "Non"

        texte.value= "Il faut mettre Oui ou Non"; //Si la condition est vérifiée, le contenu du texte prend immédiatement la phrase "Il faut mettre Oui ou Non"
    }
};

//Question 3

let choix1 = document.getElementById("choix1");//On sélectionne l'id du premier bouton radio qu'on stock dans une variable "choix1"

let choix2= document.getElementById("choix2");//On sélectionne l'id du deuxième bouton radio qu'on stock dans une variable "choix2"

let choix3= document.getElementById("choix3");//On sélectionne l'id du troisième bouton radio qu'on stock dans une variable "choix3"

choix1.nextSibling.nodeValue= "HP";//On modifie le noeud suivant l'input radio du premier bouton, qui est le noeud texte "Choix N°1", par "HP"

choix2.nextSibling.nodeValue= "Casque";//On modifie le noeud suivant l'input radio du deuxième bouton, qui est le noeud texte "Choix N°2", par "Casque"

choix3.nextSibling.nodeValue= "Bluetooth";//On modifie le noeud suivant l'input radio du troisième bouton, qui est le noeud texte "Choix N°3", par "Bluetooth"

//Question 4

let allradios = document.querySelectorAll('input[type="radio"]');//On crée une variable "allradios" qui stock tous les boutons radios du html

let volumetexte= document.querySelector('input[type="range"]').nextSibling;//On crée une variable "volume" qui stock le texte qu'on veut modifier...
                                                                          //...et qui se trouve juste après le input range du html
allradios.forEach(function(radio) { //Pour chaque bouton radio, on éxecute la fonction ci-dessous
    radio.onclick = function() {

        if (this.value == "1") {
            volumetexte.nodeValue = " Volume HP";//Bouton radio 1
        }
        if (this.value == "2") {
            volumetexte.nodeValue = " Volume Casque";//Bouton radio 2
        }
        if (this.value == "3") {
            volumetexte.nodeValue = " Volume Bluetooth";//Bouton radio 3
        }
    };
});

//Question 5

let volume= document.querySelector('input[type="range"]');//On stock la barre du volume dans une variable "volume"

let affichage= volume.nextSibling.nextSibling.nextSibling;//On crée cette variable qui va remplacer le "0" arbitraire du html ...
                                                          //...par la valeur du volume en temps réel
volume.max= 100;//Le max passe de "11" à "100"

volume.oninput=function(){//Lorsque l'utilisateur bouge le curseur, la fonction s'éxecute

    console.log("Valeur maximum du volume : " + this.max);//Affichage dans la console

    affichage.nodeValue= this.value;//La valeur du volume change en fonction du curseur
};

//Question 6

let mute= document.querySelector('input[type="checkbox"]');//Variable "mute" qui contient la case à cocher

mute.previousSibling.nodeValue= "Mute";//On modifie le noeud texte qui est antécedent à "mute"

//Question 7

mute.onclick=function(){//Lorsue l'utilisateur clique sur le case, la fonction s'éxecute

    if(this.checked){
        volume.disabled= true; //Si l'utilisateur coche la case, le volume n'est plus accessible
    }
    else{
        volume.disabled= false; //Sinon il ne se passe rien 
    }
};

//Question 8

let header = document.querySelector("header");//On crée une variable "header" qui correspond au header du html

let image = document.createElement('img');//On crée une variable "image" qui sera de type image

image.src=" https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";//Initialisation de l'image (identique au TP)

image.style.width= "200px",//On modifie un peu sa largeur

header.appendChild(image);//On le rajoute à la fin du header

//Question 9

let date= document.querySelector('input[type="date"]');//On récupère l'année choisie qu'on stock dans une variable "date"

console.log("La date :" + date.value);//On l'affiche dans la console

//Question 10

let barreune = document.querySelector('progress');//On récupere la barre de prgression

let barredeux= document.querySelector('meter');//On récupère la deuxième

barreune.value = 0;
                    //On les réinitialise à zéro
barredeux.value = 0;

let intervalle = setInterval(function(){//Pour cahque intervalle de 1000ms (1s), les barres se remplissent de 5%
    if(barreune.value < barreune.max){
        barreune.value +=5;
    }
    if(barredeux.value < barredeux.max){
        barredeux.value +=5;
    }
}, 1000);

//Partie Convertisseur

