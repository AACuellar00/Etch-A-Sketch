const container = document.querySelector('#Body');
const gridDimension=16;
const gridRow=new Array(gridDimension);

for(let row=0;row<gridRow.length;row++){

    gridRow[row] = new Array(gridDimension);
    const gridCol= gridRow[row];
    const divRow = document.createElement("div");
    divRow.className="Row";
    container.appendChild(divRow);

    for(let col=0;col<gridCol.length;col++){
        const div = document.createElement("div");
        div.className="Box";
        div.addEventListener('mouseenter', () =>{
            div.style.backgroundColor="purple";
        });

        divRow.appendChild(div);
        gridCol[col]= div;
    }

}

