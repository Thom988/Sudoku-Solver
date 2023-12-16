const sudoku = [
    [0,7,9,3,2,1,6,8,0],
    [5,0,0,6,4,7,0,1,9],
    [1,0,0,0,8,0,7,0,4],
    [0,0,0,0,0,0,0,0,0],
    [7,2,0,0,9,3,8,5,1],
    [8,0,0,0,0,2,4,0,0],
    [0,1,0,2,0,4,5,6,0],
    [6,0,0,0,5,0,3,4,0],
    [0,0,4,0,3,6,0,0,7],
];
// rappel : se lit (ligne,colonne);

function resolve(sudoku) {
    const tableau = Array.from(sudoku);


}

function afficherTable(sudoku) {
    const table = document.querySelector("#sudoku-table");
    for (let i=0; i<sudoku.length; i++) {
        const row = document.createElement("tr");
        row.dataset.id = `row-${i+1}`;
        for (let j=0; j<sudoku[i].length; j++) {
            const cellule = document.createElement("td");
            cellule.dataset.id = `cell-${j+1}`;
            cellule.textContent = sudoku[i][j] !== 0 ? sudoku[i][j] : "";
            row.appendChild(cellule);
        }
        console.log(row);
        table.appendChild(row);
    }
}

resolve(sudoku);
afficherTable(sudoku);
