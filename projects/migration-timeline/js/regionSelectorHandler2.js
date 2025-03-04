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

function load_home() {
     document.getElementById("spring-table").innerHTML='<object type="text/html" data="https://numbirds.ca/projects/migration-timeline/data/spring/CA-ON-TO.html" ></object>';
}

console.log("DONE");




