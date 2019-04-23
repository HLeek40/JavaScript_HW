// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

var populateTable = (data) => {
    tbody.html("");
    data.forEach(function (data) {
        console.log(data);
        var row = tbody.append("tr");
        Object.entries(data).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

populateTable(tableData);

// Select the submit button
var submit = d3.selectAll("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    populateTable(filteredData);
    console.log(filteredData);
})

