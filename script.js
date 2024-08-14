
function createGrid(size) {
    const container = document.querySelector("#container")
    document.getElementById('container').innerHTML = '';

    
    boxHeight = 100/size


    for (let i = 0; i < (size ** 2); i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.style.height = `${boxHeight}%`
        newDiv.style.flex = `1 0 ${boxHeight}%`
        container.append(newDiv);
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", handleHover)
    });

}

colourMode = false;


function handleHover(event) {
    const gridItem = event.target;
    if (colourMode){
        gridItem.classList.add("activeColour")
        gridItem.style.backgroundColor = getRandomColour();
        

    } else {
        gridItem.classList.add("active");
    }
    
}

function toggleColourMode() {
    colourMode = !colourMode;
    clearGrid();

    const button = document.getElementById("colour");
    if (colourMode) {
        button.style.backgroundColor = "rgb(68, 31, 52)";  
    } else {
        button.style.backgroundColor = ""; 
    }
}

document.getElementById("colour").addEventListener("click", toggleColourMode);


function clearGrid() {
    document.querySelectorAll('.grid-item').forEach(div => {
        div.classList.remove('active');
        div.classList.remove('activeColour');
        
        div.style.backgroundColor = "";
    });
}

function getRandomColour() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function newGridFunction() {
    const userInput = prompt("Please choose a positive integer less or equal to than 100.");
    const number = parseInt(userInput, 10);
    if (isNaN(number) || number < 1 || number > 100) {
        alert("Error: Please enter a positive integer less than 100.");
    } else {
        clearGrid();
        createGrid(number);
    }
}


// new grid button event listener
document.getElementById("new").addEventListener("click", newGridFunction);

//clear grid button event listener
document.getElementById("clear").addEventListener("click", clearGrid);


//Initial grid setup

createGrid(16);

