#Sudoku-Solver

##This application is designed to solve a Sudoku grid using backtracking => Recursion
'Tableau' is the variable representing the matrix or initial grid.
The 'resoudre()' function initiates the search for the next empty cell, a cell with a value of 0.
We iterate through the numbers x from 1 to 9.
If x is a valid option, we insert x into the 'tableau' grid and call the 'resoudre(tableau)' method => (recursion).
If the cell cannot contain any number, the function returns false.

Thus, the algorithm traverses branches of possibilities until it reaches the solution of the grid.
The term 'backtracking' is used to describe the backward movement if the algorithm is stuck on a branch of possibility.
As it tests all possible combinations until finding the correct one.

The front-end part of this solver visualizes the algorithm's traversal.

/!\ This is certainly not the most optimized algorithm for solving a Sudoku grid and best description of it"
