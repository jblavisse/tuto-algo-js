/* 
2.2 Ecrire un programme qui demande un nombre à l’utilisateur, 
puis qui calcule et affiche le cube de ce nombre.

Indice: On peut multiplier grâce au symbole "*"
a = b*2


Version pseudo-code
---

Variable nb en Numérique
Variable msg en Caractères

Lire nb
msg ← nb x nb x nb
Ecrire msg
*/

let nb;
let msg;

nb = prompt("Entrez un nombre");
msg = nb*nb*nb;
alert(msg);