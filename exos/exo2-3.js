/*
2.3: Demander deux données à l'utilisateur et les stocker
dans deux variables.
Puis afficher ces deux données en permutées 

Ordinateur: Entrez deux données
utilisateur: 3 -> doit être stocké dans premiernombre
utilisateur: 17 -> doit être stocké dans deuxiemenombre

Faire en sorte que dans premiernombre, au lieu de 3 y a 17
Faire en sorte que dans deuxiemenombre, au lieu de 17 il y a 3

Afficher premiernombre deuxiemenombre

Indice -> Vous aurez besoin d'une troisième variable


Version pseudo-code
---

Variables a,b,c en Entier
Lire a
Lire b

# a=3 b=17 c=?
c←a      (a=3, b=17, c=3)
a←b      (a=17, b=17, c=3)
b←c      (a=17, b=3, c=3)
# a=17 b=3

Ecrire a
Ecrire b

*/

let a,b,c;

a = prompt("Entrez un premier nombre");
b = prompt("Entrez un deuxième nombre");

c=a;
a=b;
b=c;

alert("ERREUR, maintenant le 1er nombre vaut:" + a);
alert("ERREUR 2, maintenant le 2ème nombre vaut:" + b);

