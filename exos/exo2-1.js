/* 
2.1 Ecrire un programme qui demande son prénom à l'utilisateur, 
et qui lui répond par un charmant « Bonjour » suivi du prénom 
dans une fenêtre modale. 
On aura ainsi le dialogue suivant :

machine : Quel est votre prénom ?
utilisateur : Marie-Cunégonde
machine : Bonjour, Marie Cunégonde !


Version pseudocode
---

Variables firstname, msg en Caractères

Lire firstname
msg ← "Bonjour, " + firstname
Ecrire msg
*/

let firstname, msg;

firstname = prompt("Quel est votre prénom?");
msg = "Bonjour, " + firstname;
alert(msg);