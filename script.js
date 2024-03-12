// Create a button asking for grid size
const popUpButton = document.createElement('button');
popUpButton.classList.add('pop-up-button');
popUpButton.textContent = "enter grid size";
document.body.prepend(popUpButton);

// Checks user input if greater than 100
function checkGridSize(gridSize) {
    return gridSize <= 100 ? gridSize : handleClick();
}

let divRows = 0;
let divColumns = 0;
let pixelSize = 20;
let divGridContainer;
let redValue;
let greenValue;
let blueValue;

function getArrGiiBeeValues () {
    const value = Math.floor(Math.random() * 256);
    return value
}

// Hover effect
function applyHoverEffect(element) {
    element.addEventListener('mouseenter', () => {
        redValue = getArrGiiBeeValues();
        greenValue = getArrGiiBeeValues();
        blueValue = getArrGiiBeeValues();
        element.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = '';
    });
}

function handleClick() {
    const gridSize = Number(window.prompt("Enter grid size (maximum of 100): "));
    checkGridSize(gridSize);
    divRows = gridSize;
    divColumns = gridSize;

    // Remove existing grid container
    if (divGridContainer) {
        document.body.removeChild(divGridContainer)
    }

    // Create grid container
    divGridContainer = document.createElement('div');
    divGridContainer.classList.add('pixel-container');
    document.body.appendChild(divGridContainer);

    // Calculate the total width needed for the grid
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
    // Apply hover effect through javascript
    const pixelDivs = document.querySelectorAll('.pixel-div');
    pixelDivs.forEach(pixelDiv => {
        applyHoverEffect(pixelDiv);
    });
}

popUpButton.addEventListener('click', handleClick);

// Stacking effect
