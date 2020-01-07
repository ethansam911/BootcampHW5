
var amountOfRows = 1;
var amountOfColumns = 1;
var holdDown = false;


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
        //Add event listener for newly added cells
        newRow.appendChild(cell);
    }
    mainGrid.appendChild(cell);
    amountOfRows++;
}


function removeRow()
{
    let mainGrid = document.getElementById("main-grid");
    let removeElement = mainGrid.lastElementChild;

    if (removeElement === null) 
    {
        alert("You can't remove a row");
    } 
    else 
    {
        mainGrid.removeChild(removeElement);
    }
    amountOfRows--;
}

function addColumn() {
    let rows = document.getElementsByTagName("tr");
    console.log(rows);

    for (var i = 0; i < rows.length; i++) {
        console.log('row');

        let newCol = document.createElement('td');
       

        //Add event listener to newly added cells
        newCol.onclick = function () {
            var newColor = document.getElementById("colorDropdown");
            var val = newColor.options[newColor.selectedIndex].value;
            this.style.backgroundColor = val;
        }

        rows[i].appendChild(newCol);
    }

    amountOfColumns++;
}

function removeColumn()
{
let rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) 
    {
        let elemToRemove = rows[i].lastElementChild;
        rows[i].removeChild(elemToRemove);
    }
amountOfColumns--;
}


function fillAllColors()
{
    let table = document.getElementById("main-grid");
    //If table is not empty
    if(table !==null)
    {
        for(let i = 0, row; row = table.rows[i]; i++)
        {
            for(let j = 0, col; col = row.cells[j]; j++)
            {
                var newColor = document.getElementById("colorDropdownMenu"); 
                var value = newColor.options[newColor.selectedIndex].value;
                row.cells[j].style.backgroundColor = val;
            }
        }
    }
}








