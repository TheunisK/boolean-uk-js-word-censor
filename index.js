let text = "Lorem, ipsum dolor sit amet, Lorem adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


let sensorWord = "Lorem";

function wordToSensorWithBeep(theText, sensor) {
    for (let i = theText.indexOf(sensor); i < theText.length; i++) {
        let firstChar = theText.indexOf(sensor);
        if (firstChar !== -1) {
        theText = theText.slice(0, firstChar) + "BEEP" + theText.slice(firstChar + sensor.length);
        }
    }
    return theText;
}
let newText = wordToSensorWithBeep(text, sensorWord);

console.log(newText);