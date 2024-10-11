const teamName = document.getElementById('teamName');
const teamNumber = document.getElementById('teamNumber');
const robotLength = document.getElementById('robotLength');
const robotWidth = document.getElementById('robotWidth');
const robotWeight = document.getElementById('robotWeight');
const drivetrain = document.getElementById('drivetrain');
const wheelType = document.getElementById('wheelType');

const scoring=document.getElementById('scoring');
const zonesCrossed = document.getElementById('zonesCrossed');
const startingLocation = document.getElementById('zonesCrossed');
const pathing = document.getElementById('pathing');
const scoringAction = document.getElementById('scoringAction');
const fouls = document.getElementById('fouls');
const reliablity = document.getElementById('reliablity');
const misc = document.getElementById('misc');


const button = document.getElementById('submit');


button.addEventListener('click', function () {
    console.log(teamName.value)
    console.log(teamNumber.value)
    console.log(robotLength.value)
    console.log(robotWidth.value)
    console.log(robotWeight.value)
    console.log(drivetrain.value)
    console.log(wheelType.value)
    console.log(scoring.value)
    console.log(zonesCrossed.value)
    console.log(startingLocation.value)
    console.log(pathing.value)
    console.log(scoringAction.value)
    console.log(fouls.value)
    console.log(reliablity.value)
    console.log(misc.value)
});
