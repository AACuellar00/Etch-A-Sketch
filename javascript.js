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
    let gridRow=new Array(gridDimension);

    for(let row=0;row<gridRow.length;row++){

        gridRow[row] = new Array(gridDimension);
        const gridCol= gridRow[row];
        const divRow = document.createElement("div");
        divRow.className="Row";
        containerB.appendChild(divRow);
    
        for(let col=0;col<gridCol.length;col++){
            const div = document.createElement("div");
            div.style.border="1px solid black";
            div.style.color="white";
            let num=1080/gridDimension;
            div.style.height=`${num}px`;
            div.style.width=`${num}px`;
            div.addEventListener('mouseenter', () =>{
                div.style.backgroundColor="purple";
            });
    
            divRow.appendChild(div);
            gridCol[col]= div;
        }
    
    }
}



