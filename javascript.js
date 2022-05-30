const containerA = document.querySelector('#Head');
const containerB = document.querySelector('#Body');
let gridDimension=20;

const theSlider = document.getElementById("myRange");

createGrid();

theSlider.oninput = function() {
    while(containerB.lastChild){
        containerB.removeChild(containerB.lastChild);
    }
    gridDimension=parseInt(this.value);
    containerA.textContent=`${gridDimension}x${gridDimension}`;
    createGrid();
  }

function createGrid(){
    containerB.setAttribute("style", `grid-template-columns: repeat(${gridDimension}, 2fr); grid-template-rows: repeat(${gridDimension}, 2fr);`);
    for(let i=0;i<gridDimension*gridDimension;i++){
        const div=document.createElement("div");
        div.style.backgroundColor="white";
        div.style.border="1px solid black";
        div.addEventListener('mouseenter', () =>{
            div.style.backgroundColor="purple";
        });
        containerB.appendChild(div);
    }
}



