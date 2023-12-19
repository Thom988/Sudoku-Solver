Cette application est destinée à résoudre une grille de sudoku en utilisant le backtracking.
=> récursivité :    ...resoudre(resoudre(resoudre(resoudre(tableau))))...
Tableau étant la variable représentant la matrice ou grille de départ.
1) La fonction resoudre() lance la recheche de la prochaine case à remplir, case dont la valeur vaut 0.
2) On parcourt les chiffres x de 1 à 9.
3) Si x est possible, on insert x à la grille 'tableau' et on appelle la méthode resoudre(tableau) => (récursivité)
4) si x n'est pas possible, on return false

Ainsi, l'algorythme parcourt des branches de possibilités pour arriver à la résolution de la grille. 
Le terme backtracking est utilisé pour définir le retour en arrière si l'algorythme est bloqué sur une branche de possibilité. 
Comme il teste toutes les combinaisons possibles, la méthode est dite de force brute.

/!\ : Ce n'est certainement pas l'algorythme le plus optimisé pour résoudre une grille de sudoku



