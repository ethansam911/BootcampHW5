
let amountOfRows = 1;
let amountOfColumns = 1;

function addRow() 
{
    //Append a row to this
    //Grab the main grid
    let mainGrid = document.getElementById("main-grid");
    //Make the row that we want to populate and append to the tables
    let newRow = document.createElement("tr");

    //Populate the row with "squares" or cells aka TD elements;
    for (let i = 0; i < amountOfColumns; i++) 
    {
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;
}


function removeRow()
{
//Remove a row from this 
//Grab the main grid 
let mainGrid = document.getElementById("main-grid");


}



