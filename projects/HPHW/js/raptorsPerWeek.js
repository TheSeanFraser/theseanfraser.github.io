var today = new Date();
var weekIndex = 500;
const bphListEl = document.getElementById("bphList");
const bphTextEl = document.getElementById("bphText");

let speciesList = ["Black Vulture", "Turkey Vulture","Osprey","Bald Eagle",
"Northern Harrier","Sharp-shinned Hawk","Cooper's Hawk",
"American Goshawk","Red-shouldered Hawk","Broad-winged Hawk",
"Red-tailed Hawk","Rough-legged Hawk","Golden Eagle",
"American Kestrel","Merlin","Peregrine Falcon", "TOTAL"];

let weekList = ["9/1", "9/8", "9/15", "9/22", "10/1", "10/8", "10/15",
"10/22", "11/1", "11/8", "11/15", "11/22"];


let birdsPerHourData = [
	[0, 0.4, 0.1, 0.5, 0.04, 1.4, 0.3, 0, 0.01, 1.8, 0.6, 0.01, 0, 0.2, 0.05, 0.04, 5.68],
	[0, 0.4, 0.2, 0.4, 0.2, 4.1, 0.3, 0, 0, 32, 1, 0.03, 0, 1.2, 0.1, 0.1, 39.96],
	[0, 2.2, 0.2, 0.4, 0.2, 7, 0.5, 0, 1.2, 22, 0.6, 0.01, 0, 1.8, 0.1, 0.1, 35.88],
	[0, 13, 0.1, 0.4, 0.4, 8, 0.3, 0, 0.1, 17, 1, 0.01, 0, 1.3, 0.1, 0.1, 41.74],
	[0, 19, 0.05, 0.1, 0.2, 2.4, 0.2, 0.01, 0.1, 0.5, 1, 0.00, 0, 0.3, 0.04, 0.1, 23.71],
	[0, 32, 0.05, 0.1, 0.2, 5, 0.3, 0.01, 0.2, 0.1, 2, 0.01, 0.01, 0.6, 0.05, 0.1, 41.32],
	[0, 52, 0.02, 0.3, 0.3, 6, 0.4, 0.05, 1.1, 0.01, 4, 0.03, 0.09, 0.3, 0.08, 0.1, 65.23],
	[0, 18, 0, 0.2, 0.2, 2, 0.2, 0.05, 1.1, 0.01, 9, 0.03, 0.11, 0.06, 0.03, 0.1, 30.78],
	[0.01, 1.9, 0, 0.04, 0.1, 0.3, 0.07, 0.01, 0.5, 0.01, 4, 0.04, 0.06, 0, 0.04, 0.02, 7.53],
	[0, 0.6, 0, 0.1, 0.05, 0.2, 0.1, 0.02, 0.2, 0.01, 4, 0.08, 0.06, 0, 0.04, 0.01, 5.69],
	[0, 0.01, 0, 0.04, 0.05, 0.04, 0.04, 0, 0.2, 0, 2, 0.08, 0.02, 0, 0.03, 0.02, 2.41],
	[0, 0, 0, 0.01, 0.01, 0.04, 0.04, 0.01, 0.05, 0.01, 0.46, 0.01, 0, 0, 0.01, 0.01, 0.70]
];

let idealBirdsPerHourData = [
	[0.00, 0.81, 0.35, 0.92, 0.10, 5.03, 0.39, 0.00, 0.02, 5.18, 1.08, 0.00, 0.00, 0.74, 0.08, 0.03, 14.73],
	[0.00, 1.51, 0.39, 0.73, 0.61, 13.33, 0.51, 0.00, 0.03, 81.61, 1.67, 0.07, 0.00, 3.05, 0.28, 0.14, 103.93],
	[0.00, 6.59, 0.59, 1.16, 0.64, 18.19, 1.07, 0.00, 4.52, 76.17, 1.64, 0.00, 0.02, 4.64, 0.36, 0.21, 115.78],
	[0.00, 25.57, 0.13, 0.92, 0.75, 16.45, 0.56, 0.01, 0.16, 35.60, 2.10, 0.01, 0.00, 2.93, 0.17, 0.18, 85.55],
	[0.00, 36.38, 0.06, 0.21, 0.69, 6.62, 0.46, 0.00, 0.12, 0.46, 2.54, 0.00, 0.02, 1.04, 0.08, 0.46, 49.13],
	[0.00, 122.14, 0.04, 0.32, 0.47, 14.11, 0.68, 0.02, 0.65, 0.12, 8.79, 0.00, 0.04, 1.12, 0.18, 0.23, 148.89],
	[0.00, 91.16, 0.03, 0.47, 0.51, 13.22, 0.75, 0.06, 2.38, 0.03, 9.78, 0.09, 0.18, 0.66, 0.13, 0.19, 119.65],
	[0.00, 29.57, 0.00, 0.34, 0.38, 4.37, 0.52, 0.07, 2.23, 0.02, 20.23, 0.10, 0.23, 0.15, 0.03, 0.09, 58.33],
	[0.01, 3.08, 0.00, 0.08, 0.11, 0.75, 0.14, 0.00, 1.00, 0.00, 13.40, 0.07, 0.19, 0.00, 0.05, 0.05, 18.95],
	[0.00, 1.31, 0.00, 0.15, 0.09, 0.55, 0.13, 0.06, 0.52, 0.01, 8.94, 0.18, 0.18, 0.00, 0.07, 0.04, 12.25],
	[0.00, 0.03, 0.00, 0.05, 0.14, 0.08, 0.11, 0.00, 0.11, 0.00, 3.22, 0.05, 0.03, 0.00, 0.03, 0.00, 3.84],
	[0.00, 0.00, 0.00, 0.00, 0.00, 0.13, 0.07, 0.01, 0.10, 0.03, 1.28, 0.04, 0.00, 0.00, 0.00, 0.01, 1.70]
];

console.log(today.getMonth());
console.log(today.getDate());

// Check if month is September
if ( today.getMonth() == 8){
	if (today.getDate() < 8){
		weekIndex = 0;
	} else if (today.getDate() < 15){
		weekIndex = 1;
	} else if (today.getDate() < 21){
		weekIndex =2;
	} else {
		weekIndex = 3;
	}
// Check if month is October
} else if (today.getMonth() == 9){
	if (today.getDate() < 8){
		weekIndex = 4;
	} else if (today.getDate() < 15){
		weekIndex = 5;
	} else if (today.getDate() < 21){
		weekIndex = 6;
	} else {
		weekIndex = 7;
	}
// Check if month is November
} else if (today.getMonth() == 10){
	if (today.getDate() < 8){
		weekIndex = 8;
	} else if (today.getDate() < 15){
		weekIndex = 9;
	} else if (today.getDate() < 21){
		weekIndex = 10;
	}
	else {
		weekIndex = 11;
	}
}
console.log(weekIndex);


if(weekIndex == 500){
	// Out of hawk watching season
	bphTextEl.innerHTML = "During the hawk watching season, this section will be updated to show the week's average number of birds per hour by species."
	bphListEl.innerHTML = "";
} else {
	// In hawk watching season, update week's birds per hour
	bphTextEl.innerHTML = "Based on HMANA's Hawk Count data, listed below are the average number of each species you might see per hour this week. <b>The bolded number was calculated using the ideal winds and times of day.";
	bphListEl.innerHTML = "";
	data = [];

	for(i = 0; i < birdsPerHourData[weekIndex].length; i++){
		curBird = {'species':speciesList[i], 'bph':birdsPerHourData[weekIndex][i], 'bphi':idealBirdsPerHourData[weekIndex][i]};
		if(birdsPerHourData[weekIndex][i] != 0){
			data.push(curBird);
		}

	}

	data.sort(function(first, second) {return second.bph - first.bph;});

	for(i = 0; i < data.length; i++){
		console.log(data[i].species + " " + data[i].bph);
		var liEl = document.createElement("li");
		liEl.innerHTML = data[i].species + ": " + data[i].bph + " <b>(" + data[i].bphi + ")</b> birds/hr" ;
		bphListEl.appendChild(liEl);

	}

}