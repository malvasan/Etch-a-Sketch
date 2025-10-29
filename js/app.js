const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#newGrid")

function createGrid(numberSquares = 16){
    for (let i = 0; i < numberSquares; i++) {
        let div = document.createElement("div");
        div.classList.toggle("flex-container");
        for (let o = 0; o < numberSquares; o++) {
            let square = document.createElement("div");
            square.classList.toggle("square");
            square.style.height = `${960 / numberSquares}px`;
            square.addEventListener('mouseover',(e)=>{
                square.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
            })
            div.appendChild(square);
        }
        container.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", createGrid(16));

button.addEventListener("click", (e)=>{
    const userInput = prompt("How big should I be?");
    const numberValue = parseInt(userInput);

    if(isNaN(numberValue)){
        console.log("It should be a number.")
    }else{
        if(numberValue > 100 || numberValue < 1){
            console.log("The biggest number is 100")
        }else{
            container.innerHTML = '';
            createGrid(numberValue);
        }
        
    }

})