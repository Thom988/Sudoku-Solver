# Sudoku-Solver

## Overview

This application is designed to solve a Sudoku grid using a backtracking algorithm with recursion.

- 'Tableau' is the variable representing the matrix or initial grid.
- The 'resoudre()' function initiates the search for the next empty cell, denoted by a value of 0.
- The algorithm iterates through numbers from 1 to 9, inserting a valid option into the 'tableau' grid and calling the 'resoudre(tableau)' method recursively.
- If a cell cannot contain any number, the function returns false.

The algorithm traverses branches of possibilities until it finds the solution. The term 'backtracking' describes the backward movement if the algorithm is stuck on a branch. It tests all possible combinations until finding the correct one.

The front-end part of this solver visualizes the algorithm's traversal.

## Note

/!\ This may not be the most optimized algorithm for solving a Sudoku grid, and there's room for improvement.
