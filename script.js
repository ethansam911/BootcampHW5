
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


function addColumn()
{
    let rows = document.getElementsByTagName("tr");
    console.log(rows);
    
    for(let i = 0; i< rows.length; i++)
    {
        let newCol = document.createElement('td');
        
        new.Col.onclick = function()
        {
            var newColor = document.getElementById("colorDropdown");
            var val = newColor.options[newColor.selectedIndex].value;
            this.style.backgroundColor = val;  
        }
        rows[i].appendChild(newCol);
    }
    amountOfColumns++;
}



//Remove a row from the grid
function removeRow()
{
//Remove a row from this 
//Grab the main grid 
let mainGrid = document.getElementById("main-grid");
let removeElement =  mainGrid.lastElementChild;

    if(removeElement ===null)
    {
        alert("You cannot remove a row");
    }
    else
    {
        mainGrid.removeChild(removeElement);
    }
//Decrement the number of rows
amountOfRows--;
}




