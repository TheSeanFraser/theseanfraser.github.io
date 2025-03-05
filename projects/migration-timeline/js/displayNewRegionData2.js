var path = 'https://numbirds.ca/projects/migration-timeline/data/';
var selectRegionButton = document.getElementById("selectRegionButton");
var region_response;
var date_list_response, date_list_json;
console.log(path);
console.log("TESTAROO");

function populateDatesInTable(region_response)
{
    var region_code = region_response[document.getElementById("regionSelector").value];
	var spring_source = path + "/spring/"+ region_code + '.html';
	var fall_source = path + "/fall/"+ region_code + '.html';

	fetch(spring_source)
        .then(response => response.json())
        .then(text => date_list_response = text)
        .then((response) => {
            addSpringTable();
            });

    // fetch(fall_source)
    //     .then(response => response.json())
    //     .then(text => date_list_response = text)
    //     .then((response) => {
    //         addFallTable();
    //         });
}

function addSpringTable(data){
    var tbody = document.getElementById("spring_date_list_body");

    for( species in torontoListResponse){
        var mass_arriv_date = torontoListResponse[species][0];
        var peak_date = torontoListResponse[species][1];
        var peak_over_date = torontoListResponse[species][2];

        var tr = document.createElement("tr");
        var td_mass_arriv_date = document.createElement("td");
        var td_species = document.createElement("td");
        var td_peak_date = document.createElement("td");
        var td_peak_over_date = document.createElement("td");


        td_mass_arriv_date.textContent = mass_arriv_date;
        td_mass_arriv_date.value = mass_arriv_date;
        td_peak_date.textContent = peak_date;
        td_peak_date.value = peak_date;
        td_peak_over_date.textContent = peak_over_date;
        td_peak_over_date.value = peak_over_date;

        td_species.textContent = species;
        td_species.value = species;

        tr.appendChild(td_species)
        tr.appendChild(td_mass_arriv_date);
        tr.appendChild(td_peak_date);
        tr.appendChild(td_peak_over_date);
        spring_tbody.appendChild(tr)
}

function addFallTable(data){
    var tbody = document.getElementById("fall_date_list_body");

    // Add each row of the data to its own table element
    for(var i = 0; i < date_list_response.length; i++){
        var tr = document.createElement("tr");
        var td_date = document.createElement("td");
        var td_species = document.createElement("td");
        var date = date_list_response[i][0]
        var species = date_list_response[i][1];
        td_date.textContent = date;
        td_date.value = date;
        td_species.textContent = species;
        td_species.value = species;
        tr.appendChild(td_date);
        tr.appendChild(td_species)
        tbody.appendChild(tr)
    }
}

var regionSelect = document.getElementById("regionSelector");
regionSelect.onchange = function (){updateLists()};
function updateLists() {
    console.log("Button clicked");
	var region = document.getElementById("regionSelector").value;

    // Clear the tables for the new data
	var table = document.getElementById("spring_date_list_body");
	table.innerHTML = "";
	table = document.getElementById("fall_date_list_body");
	table.innerHTML = "";

	fetch('https://numbirds.ca/projects/migration-timeline/res/regions_complete.json')
	.then(response => response.json())
    .then(text => region_response = text)
    .then((response) => {
        populateDatesInTable(region_response);
        });
}
