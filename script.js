// Create a container div
const divGridContainer = document.createElement('div');
divGridContainer.classList.add('pixel-container');
document.body.appendChild(divGridContainer);

// Create one div
// const pixelDiv = document.createElement('div');
// pixelDiv.classList.add('pixel-div');
// divGridContainer.appendChild(pixelDiv);

// Create 16 divs in a row
// let divRows = 16;
// for (i = 0; i < divRows; i++) {
//     const pixelDiv = document.createElement('div');
//     pixelDiv.classList.add('pixel-div');
//     divGridContainer.appendChild(pixelDiv);
// }

// Create 16 by 16 divs
const divRows = 16;
const divColumns = 16;

for (let i = 0; i < divRows; i++) {
    // Create a row container div
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    divGridContainer.appendChild(rowDiv);

    // Append 16 divs to the row container
    for (let j = 0; j < divColumns; j++) {
        const pixelDiv = document.createElement('div');
        pixelDiv.classList.add('pixel-div');
        rowDiv.appendChild(pixelDiv);
    }
}