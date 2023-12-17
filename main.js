const sudoku = [
  [0, 5, 0, 7, 8, 0, 0, 0, 0],
  [0, 0, 8, 2, 3, 0, 7, 5, 6],
  [2, 7, 4, 6, 1, 0, 0, 3, 9],
  [0, 4, 0, 9, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 2, 0, 9, 8],
  [0, 0, 2, 0, 0, 3, 1, 0, 7],
  [0, 0, 0, 0, 0, 7, 0, 1, 0],
  [4, 3, 0, 0, 0, 0, 9, 0, 5],
  [1, 0, 9, 3, 0, 0, 0, 0, 0],
];
let tableau = [...sudoku];

function resoudre(tableau) {
  let position = prochaineCaseVide(tableau);
  if (position === null) {
    return true;
  } else {
    for (let nb = 1; nb < 10; nb++) {
      if (estValide(tableau, nb, position[0], position[1])) {
        tableau[position[0]][position[1]] = nb;
        if (resoudre(tableau)) {
          return true;
        }
      } else {
        tableau[position[0]][position[1]] = 0;
      }
    }
    //si le sudoku n'est pas faisable
    return false;
  }
}

function estValide(tableau, nb, ligne, colonne) {
  // Extraire et tester la ligne
  const valeursLigne = tableau[ligne];
  for (let i = 0; i < valeursLigne.length; i++) {
    if (valeursLigne[i] === nb) {
      return false;
    }
  } //Extraire et tester la colonne
  const valeursColonne = [];
  for (let i = 0; i < tableau.length; i++) {
    valeursColonne.push(tableau[i][colonne]);
  }
  for (let j = 0; j < valeursColonne.length; j++) {
    if (valeursColonne[j] === nb) {
      return false;
    }
  } // Extraire et tester la région
  ligneInit = Math.floor(ligne / 3) * 3;
  colonneInit = Math.floor(colonne / 3) * 3;
  for (let i = ligneInit; i < ligneInit + 3; i++) {
    for (let j = colonneInit; j < colonneInit + 3; j++) {
      if (tableau[i][j] === nb) {
        return false;
      }
    }
  }
  return true;
}

function prochaineCaseVide(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      if (tableau[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}

function afficherTable(sudoku) {
  const tableElement = document.createElement("table");
  const windowElement = document.querySelector(".sudoku-window");
  tableElement.classList.add("sudoku-table");
  for (let i = 0; i < sudoku.length; i++) {
    const row = document.createElement("tr");
    row.dataset.id = `row-${i + 1}`;
    for (let j = 0; j < sudoku[i].length; j++) {
      const cellule = document.createElement("td");
      cellule.dataset.id = `cell-${j + 1}`;
      cellule.textContent = sudoku[i][j] !== 0 ? sudoku[i][j] : "";
      if (Math.floor(j / 3) * 3 === 3 && Math.floor(i / 3) * 3 !== 3) {
        cellule.classList.add("region-color");
      } else if (Math.floor(j / 3) * 3 !== 3 && Math.floor(i / 3) * 3 === 3) {
        cellule.classList.add("region-color");
      }
      row.appendChild(cellule);
    }
    tableElement.appendChild(row);
  }
  windowElement.appendChild(tableElement);
}

afficherTable(sudoku);
if (resoudre(tableau)) {
    afficherTable(tableau);
}