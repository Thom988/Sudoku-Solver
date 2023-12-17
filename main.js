const sudoku = [
  [0, 7, 9, 3, 2, 1, 6, 8, 0],
  [5, 0, 0, 6, 4, 7, 0, 1, 9],
  [1, 0, 0, 0, 8, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 2, 0, 0, 9, 3, 8, 5, 1],
  [8, 0, 0, 0, 0, 2, 4, 0, 0],
  [0, 1, 0, 2, 0, 4, 5, 6, 0],
  [6, 0, 0, 0, 5, 0, 3, 4, 0],
  [0, 0, 4, 0, 3, 6, 0, 0, 7],
];
// rappel : se lit (ligne,colonne);

function resolve(sudoku) {
  let tableau = Array.from(sudoku);
  let regions = [];
  for (let i = 0; i <= 6; i = i + 3) {
    for (let j = 0; j <= 6; j = j + 3) {
      regions.push(extraireRegion(tableau, i, j));
    }
  }
  tableau = remplir(regions, tableau);
}

function remplir(regions, tableau) {

}

function testPrensenceNb(matrice, nb) {
  let bool = false;
  if (matrice[0][0] !== undefined) {

    for (let i = 0; i < matrice.length; i++) {
      for (let j = 0; j < matrice[i].length; j++) {
        if (matrice[i][j] === nb) {
          bool = true;
        }
      }
    }
  } else {
    for (let i = 0; i < matrice.length; i++) {
      if (matrice[i] === nb) {
        bool = true;
      }
    }
  }
  return bool;
}

function extraireRegion(tableau, ligneDepart, colonneDepart) {
  let region = [];
  for (let i = ligneDepart; i < ligneDepart + 3; i++) {
    let ligne = [];
    for (let j = colonneDepart; j < colonneDepart + 3; j++) {
      ligne.push(tableau[i][j]);
    }
    region.push(ligne);
  }
  return region;
}

function extraireColonne(tableau, colonneDepart) {
  const colonne = [];
  for (let i = 0; i < tableau.length; i++) {
    colonne.push(tableau[i][colonneDepart]);
  }
  return colonne;
}

function afficherTable(sudoku) {
  const table = document.querySelector("#sudoku-table");
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

    table.appendChild(row);
  }
}

resolve(sudoku);
afficherTable(sudoku);
