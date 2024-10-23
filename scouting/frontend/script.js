document.addEventListener('DOMContentLoaded', function() {
    const scoutNumber = document.getElementById('scoutNumber');
    const testNumber = document.getElementById('testNumber');
    const teamName = document.getElementById('teamName');
    const teamNumber = document.getElementById('teamNumber');
    const robotLength = document.getElementById('robotLength');
    const robotWidth = document.getElementById('robotWidth');
    const robotWeight = document.getElementById('robotWeight');
    const driveTrain = document.getElementById('drivetrain');
    const wheelType = document.getElementById('wheelType');
    const scoring = document.getElementById('scoring');
    const zonesCrossed = document.getElementById('zonesCrossed');
    const startingLocation = document.getElementById('startingLocation');
    const pathing = document.getElementById('pathing');
    const scoringAction = document.getElementById('scoringAction');
    const fouls = document.getElementById('fouls');
    const reliability = document.getElementById('reliablity');
    const misc = document.getElementById('misc');
    const button = document.getElementById('submit');

    button.addEventListener('click', function () {
        const data = {
            scoutNumber: scoutNumber.value,
            testNumber: testNumber.value,
            teamName: teamName.value,
            teamNumber: teamNumber.value,
            robotLength: robotLength.value,
            robotWidth: robotWidth.value,
            robotWeight: robotWeight.value,
            driveTrain: driveTrain.value,
            wheelType: wheelType.value,
            scoring: scoring.value,
            zonesCrossed: zonesCrossed.value,
            startingLocation: startingLocation.value,
            pathing: pathing.value,
            scoringAction: scoringAction.value,
            fouls: fouls.value,
            reliability: reliability.value,
            misc: misc.value
        };

        // Send data to the server
        fetch('http://192.168.1.165:3001/submit', {  // Updated to match server IP
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
