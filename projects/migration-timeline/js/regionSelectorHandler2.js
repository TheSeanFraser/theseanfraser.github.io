var regionListResponse;
var torontoListResponse;

fetch('https://numbirds.ca/projects/migration-timeline/res/regions_complete.json')
    .then(response => response.json())
    .then(text=> regionListResponse = text)
    .then((response) => {
        this.updateSelectorList();
        });


function updateSelectorList()
{
    var selector = document.getElementById("regionSelector");

    for(var i = 0; i < Object.keys(regionListResponse).length; i++){
        var opt = Object.keys(regionListResponse)[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selector.appendChild(el);
    }

}

fetch('https://numbirds.ca/projects/migration-timeline/data/spring/CA-ON-TO.json')
    .then(response => response.json())
    .then(text=> torontoListResponse = text)
    .then((response) => {
        this.populateSpringDateTable();
        });

function populateSpringDateTable(){
    var spring_tbody = document.getElementById("spring_date_list_body");

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
    
}

// fetch('https://numbirds.ca/projects/migration-timeline/data/fall/CA-ON-TO.json')
//     .then(response => response.json())
//     .then(text=> torontoListResponse = text)
//     .then((response) => {
//         this.populateFallDateTable();
//         });

// function populateFallDateTable(){
//     var fall_tbody = document.getElementById("fall_date_list_body");

//     for(var i = 0; i < Object.keys(torontoListResponse).length; i++){
//         var tr = document.createElement("tr");
//         var td_date = document.createElement("td");
//         var td_species = document.createElement("td");
//         var date = torontoListResponse[i][0]
//         var species = torontoListResponse[i][1];
//         td_date.textContent = date;
//         td_date.value = date;
//         td_species.textContent = species;
//         td_species.value = species;
//         tr.appendChild(td_date);
//         tr.appendChild(td_species)
//         fall_tbody.appendChild(tr)
//     }
// }

