const grilleDepart = [
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
let tableau = [...grilleDepart];
let cmpt = 0;

function resoudre(tableau) {
  cmpt += 50;
  let position = prochaineCaseVide(tableau);
  if (position === null) {
    return true;
  } else {
    for (let nb = 1; nb < 10; nb++) {
      if (estValide(tableau, nb, position[0], position[1])) {
        tableau[position[0]][position[1]] = nb;
        setTimeout(() => {
          actualiserCellule(position[0], position[1], nb);
          colorierCellule(position[0], position[1]);
        }, cmpt);
        if (resoudre(tableau)) {
          return true;
        }
      } else {
        tableau[position[0]][position[1]] = 0;
        setTimeout(() => {
          actualiserCellule(position[0], position[1], 0);
          retablirCouleurCellule(position[0], position[1]);
        }, cmpt);
      }
    }
    //si la case n'est pas faisable
    // ICI : remettre la couleur de la case par defaut (blanc ou gris)
    tableau[position[0]][position[1]] = 0;
        setTimeout(() => {
          actualiserCellule(position[0], position[1], 0);
          retablirCouleurCellule(position[0], position[1]);
        }, cmpt);
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

function afficherGrilleDepart() {
  const windowElement = document.querySelector(".sudoku-window");
  //windowElement.innerHTML = "";
  const tableElement = document.createElement("table");
  tableElement.classList.add("sudoku-table");
  for (let i = 0; i < grilleDepart.length; i++) {
    const row = document.createElement("tr");
    row.dataset.id = `row-${i + 1}`;
    for (let j = 0; j < grilleDepart[i].length; j++) {
      const cellule = document.createElement("td");
      cellule.dataset.id = `cell-${j + 1}`;
      cellule.textContent = grilleDepart[i][j] !== 0 ? grilleDepart[i][j] : "";
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

function actualiserCellule(ligne, colonne, nb) {
  const cellElem = document.querySelector(
    `tr[data-id=row-${ligne + 1}] td[data-id=cell-${colonne + 1}]`
  );

  if (nb === 0) {
    cellElem.textContent = "";
  } else {
    cellElem.textContent = nb;
  }
}

function colorierCellule(ligne, colonne) {
  const cellElem = document.querySelector(
    `tr[data-id=row-${ligne + 1}] td[data-id=cell-${colonne + 1}]`
  );
  cellElem.setAttribute("style", "background-color:rgba(16, 219, 118, 0.3)"); // vert
  //cellElem.setAttribute("style", "background-color:rgba(255, 201, 24, 0.234)"); // orange-jaune

}

function retablirCouleurCellule(ligne, colonne) {
  const cellElem = document.querySelector(
    `tr[data-id=row-${ligne + 1}] td[data-id=cell-${colonne + 1}]`
  );
  if (Math.floor(colonne / 3) * 3 === 3 && Math.floor(ligne / 3) * 3 !== 3) {
    cellElem.setAttribute("style", "background-color: rgba(0, 0, 0, 0.1)");
  } else if (Math.floor(colonne / 3) * 3 !== 3 && Math.floor(ligne / 3) * 3 === 3) {
    cellElem.setAttribute("style", "background-color: rgba(0, 0, 0, 0.1)");  
  } else {
    cellElem.setAttribute("style", "background-color: none"); 
  }
}


afficherGrilleDepart();
setTimeout( () => {
  resoudre(tableau);
}, 2000)

