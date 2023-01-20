const canvas = document.getElementById('container');
const pxSize = 20;
const nRow = 15;
const nCol = 25;
createGrid(nRow, nCol);

function createGrid(nRow, nCol) {

    canvas.style.gridTemplateColumns = `repeat(${nCol}, 1fr)`;
    canvas.style.width = `${nCol * pxSize}px`;
    canvas.style.height = `${nRow * pxSize}px`;

    for(let i=0; i < nRow; i++) {
        for(let j=0; j < nCol; j++) {
            let square = canvas.appendChild(document.createElement('div'));
            square.style.height = `${pxSize}px`;
            square.style.width = `${pxSize}px`;
            square.classList.add('square');
        }
    }
}

