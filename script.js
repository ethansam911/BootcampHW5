
var amountOfRows = 1;
var amountOfColumns = 1;
//If true, latch is on and user is able to draw
var holdDown = false;
var color = "blue";


/***** CELL CONSTRUCTOR *****/
function cellConstructor() {
    var cell = document.createElement("td");
    cell.classList.add("colorless");
    cell.addEventListener("click", paintCell);
    return cell;
} 

/***** PAINTING EVENTS *****/
//applies the current color to the target of an event
function paintCell(event) {
    //shorter name for long property
    var classes = event.target.classList;
    //remove old color
    classes.remove(classes.item(0));
    //add new color
    classes.add(color);
    event.target.style.backgroundColor = color;
}

//Resets the color of a cell (element)
function clearCell(cell) {
    cell.classList.remove(cell.classList.item(0));
    cell.classList.add("colorless");
    cell.style.backgroundColor = "";
}

document.getElementById("colorDropdownMenu").addEventListener("change", function(event) {
    let c = event.target;
    color = c.options[c.selectedIndex].value;
});

/***** GRID SIZE BUTTONS *****/

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
        newRow.appendChild(cellConstructor());
    }
    mainGrid.appendChild(newRow);
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
        rows[i].appendChild(cellConstructor());
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
    //Set table to main-grid elementId
    let table = document.getElementById("main-grid");
    //If table is not empty aka null, iterate through the cells
    if(table !==null)
    {
        for(let i = 0, row; row = table.rows[i]; i++)
        {
            for(let j = 0, col; col = row.cells[j]; j++)
            {
                var newColor = document.getElementById("colorDropdownMenu"); 
                var val = newColor.options[newColor.selectedIndex].value;
                row.cells[j].style.backgroundColor = val;
            }
        }
    }
}

function fillUnfilledColors() {
    var colorless = document.getElementsByClassName("colorless");
    while(colorless.length > 0) 
    {
        paintCell({target: colorless[0]});
    }
}








