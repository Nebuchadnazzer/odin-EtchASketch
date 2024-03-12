// Create a button asking for grid size
const popUpButton = document.createElement('button');
popUpButton.classList.add('pop-up-button');
popUpButton.textContent = "grid size";
document.body.prepend(popUpButton);

// Checks user input if greater than 100
function checkGridSize(gridSize) {
    return gridSize <= 100 ? gridSize : handleClick();
}

let divRows = 0;
let divColumns = 0;
let divGridContainer;

function handleClick() {
    const gridSize = Number(window.prompt("Enter grid size (maximum of 100): "));
    checkGridSize(gridSize);
    divRows = gridSize;
    divColumns = gridSize;

    // Remove existing grid container
    if (divGridContainer) {
        document.body.removeChild(divGridContainer)
    }

    // Create a container div
    divGridContainer = document.createElement('div');
    divGridContainer.classList.add('pixel-container');
    document.body.appendChild(divGridContainer);

    // Calculate the total width needed for the grid
    const pixelSize = 20;
    const totalWidth = divColumns * pixelSize;
    divGridContainer.style.width = `${totalWidth}px`;

    for (let i = 0; i < divRows; i++) {
        // Create a row container div
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        divGridContainer.appendChild(rowDiv);

        // Append divColumns divs to the row container
        for (let j = 0; j < divColumns; j++) {
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel-div');
            pixelDiv.style.width = `${pixelSize}px`;
            pixelDiv.style.height = `${pixelSize}px`;
            rowDiv.appendChild(pixelDiv);
        }
    }
}

popUpButton.addEventListener('click', handleClick);