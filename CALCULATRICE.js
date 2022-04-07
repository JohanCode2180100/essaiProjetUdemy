//Creation du menu 1.Addition 2.Multiplication 3.Soustraction 4.Division
//Mettre dans une variable choix
//Verifier que l'utilisateur entre un nombre entre 1 et 4

do {
  var choix = Number(
    prompt(
      "1.Addition\n 2.soustraction \n 3.multiplication \n 4.division\n\n Quelle est votre choix ? "
    )
  );
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
  var nombre1 = Number(prompt("entreez le premier nombre ..."));
  var nombre2 = Number(prompt("entreez le deuxieme nombre ..."));
} while (isNaN(nombre1) || isNaN(nombre2));

function addition(){
  
}
