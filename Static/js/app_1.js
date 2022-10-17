// code that builds the HTML table and fills it with data from data.js

// import the data from data.js
// type the following to declare a variable, tableData, using const
const tableData = data; 

// Reference the HTML table using d3 
var tbody = d3.select("tbody"); 

//iterate through the array of objects in our data file and then append them to a table row.
function buildTable(data) {
    // first clear the data
    tbody.html("");
    //Now that we have the start of a clean table, let's apply the forEach function.

    // create another function specifically for building the table. 
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table body
        let row = tbody.append("tr");
        // The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table.
            let cell = row.append("td");
            // add the values
            cell.text(val); 

            }
        );

    });

}

// add a function to respond to a user clicking the HTML button, using D3 (data driven documents)
function handleClick() {
    let date = d3.select("#datetime").property("value");

    // Now we need to set a default filter and save it to a new variable. 
    let filteredData = tableData;

    // The next step is to check for a date filter using an if statement.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);