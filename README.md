Cette application est destinée à résoudre une grille de sudoku en utilisant le backtracking.
=> récursivité :    ...resoudre(resoudre(resoudre(resoudre(tableau))))...
Tableau étant la variable représentant la matrice ou grille de départ.
#1) La fonction resoudre() lance la recheche de la prochaine case à remplir, case dont la valeur vaut 0.
#2) On parcourt les chiffres x de 1 à 9.
#3) Si x est possible, on insert x à la grille 'tableau' et on appelle la méthode resoudre(tableau) => (récursivité)
#4) si aucun des chiffres n'est possible, return 'false'

Ainsi, l'algorythme parcourt des branches de possibilités pour arriver à la résolution de la grille. 
Le terme backtracking est utilisé pour définir le retour en arrière (return false) si l'algorythme est bloqué sur une branche. 
Comme il teste toutes les combinaisons possibles, la méthode est dite de force brute.

/!\ : Ce n'est certainement pas l'algorythme le plus optimisé pour résoudre une grille de sudoku



