const body = document.querySelector('body'); // Reference vers la section qui va contenir nos données JSON formatées

// Création d'une variable contenant l'adresse de notre site contenant le fichier JSON
//let requestURL = 'https://raw.githubusercontent.com/samgagnon7/420-4C5-LL-BD-et-securite-des-applications-eleve/main/film_solution.json';
//let requestURL = 'http://localhost:49880/weatherforecast';
//let requestURL = 'https://raw.githubusercontent.com/jflevis/FilmsJsonLab2/main/film.json';
let requestURL = 'film.json';

// Création d'une requête
let request = new XMLHttpRequest();
// Ouverture de la requête
request.open('Get', requestURL);
// Indiquer que c'est une requête JSON
request.responseType = 'json';
// Envoyer la requête
request.send();
// Associer une fonction de rappel pour le traitement des données expédiées par le serveur
request.onload = maFonctionCallBack;

/////////////////////////////////////////
// Section des fonctions
/////////////////////////////////////////

// Fonction de rappel pour la requête  XMLHttpRequest
function maFonctionCallBack() {
  const jsonObj = this.response;   // Emmagasiner les données JSON dans une variable
  let listFilm = jsonObj;
  for (var i = 0; i < listFilm.length; i++) {
    const filmDiv = document.createElement('div');
    let film = listFilm[i];
    construireEntete(film, filmDiv);
    // Appel de la fonction qui vas créer une entête et un paragraphe html
    afficherVedette(film, filmDiv);
    body.appendChild(filmDiv);
  }
}

// Fonction pour construire l'entête de notre page
function construireEntete(film, filmDiv) {
  const header = document.createElement('header');

  // Créer un entête élément de type h1(l'élément est créé mais non associer a notre page pour le moment)
  const myH1 = document.createElement('h1');
  // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1
  myH1.textContent = film['titre'];
  // Assigner(associer) notre entête à l'entête de notre page HTML
  header.appendChild(myH1);

  const h2TotalUSA = document.createElement('h2');
  h2TotalUSA.textContent = "Total USA: " + film['totalUSA'];
  header.appendChild(h2TotalUSA);

  const h2TotalMonde = document.createElement('h2');
  h2TotalMonde.textContent = "Total Monde: " + film['totalMonde'];
  header.appendChild(h2TotalMonde);

  const h3 = document.createElement('h3');
  h3.textContent = "Description: " + film['description'];
  header.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.textContent = "Budget: " + film['budget'];
  header.appendChild(h4);

  const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe
  myPara1.textContent = 'Directeur: ' + film['directeur'] + ' // Auteur: ' + film['auteur']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
  header.appendChild(myPara1);

  const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date
  myPara2.textContent = 'Date: ' + film['date']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
  header.appendChild(myPara2);

  filmDiv.appendChild(header);
}

// Fonction pour afficher les informations sur le film
function afficherVedette(film, filmDiv) {
  const section = document.createElement('section');

  const Vedette = film['vedette']; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau heroes 
  // Récupérer les éléments du tableau Vedette pour remplir notre page html
  for (var i = 0; i < Vedette.length; i++) {
    const myArticle = document.createElement('article');// Pour chaque vedette, créer un article ('article'), une entête h2 ('h2'), 1 paragraphe ('p')
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');

    myH2.textContent = Vedette[i].Nom; // Utiliser la valeur de la propriété JSON 'Nom' retourné par le serveur pour initialiser le texte de notre entête h2
    myPara1.textContent = 'Personnage: ' + Vedette[i].personnage + '\n age: ' + Vedette[i].age; // Utiliser la valeur de la propriété JSON 'Personnage' retourné par le serveur pour initialiser le paragraphe

    // Assigner(associer) l'entête myH2 et le paragraphes myPara1 à l'article myArticle
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);

    filmDiv.appendChild(myArticle); // Associer notre article a notre section de la page HTML
  }
}