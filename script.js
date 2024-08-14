
function createGrid(size) {
    const container = document.querySelector("#container")
    document.getElementById('container').innerHTML = '';

    // squareSize = 70/size;
    boxHeight = 100/size


    for (let i = 0; i < (size ** 2); i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        // newDiv.style.height = `${squareSize}vh`;
        // newDiv.style.width = `${squareSize}vw`;
        newDiv.style.height = `${boxHeight}%`
        newDiv.style.flex = `1 0 ${boxHeight}%`
        container.append(newDiv);
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", handleHover)
    });

}

function handleHover(event) {
    const gridItem = event.target;
    gridItem.classList.add("active");
}



function newGridFunction() {
    const userInput = prompt("Please choose a positive integer less or equal to than 100.");
    const number = parseInt(userInput, 10);
    if (isNaN(number) || number < 1 || number > 100) {
        alert("Error: Please enter a positive integer less than 100.");
    } else {
        document.querySelectorAll('div.active').forEach(div => {
            div.classList.remove('active');
        });
        createGrid(number);
    }
    }


// button event listener
document.getElementById("btn").addEventListener("click", newGridFunction);

//Initial grid setup

createGrid(16);

