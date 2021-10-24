let text = prompt("What is the text you would like to search?");


let sensorWord = prompt("What word would you like to censor?");

let newWord = prompt("What would you like to replace that word with?");

function wordToSensor(theText, sensor) {
    counter = 0;
    for (let i = theText.indexOf(sensor); i < theText.length; i++) {
        let firstChar = theText.indexOf(sensor);
        if (firstChar !== -1) {
        theText = theText.slice(0, firstChar) + newWord + theText.slice(firstChar + sensor.length);
        counter ++;
        }
    }
    return theText;
    return counter;
}
let newText = wordToSensor(text, sensorWord);

console.log(newText);
console.log(`This word occured ${counter} time/s.`);