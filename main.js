//Assigning runners a random race # from 0-1000
let raceNumber = Math.floor(Math.random() * 1000);

//Setting the registration time to early(true) or late(false) using Boolean Value
let registrationTime = Boolean;

let runnersAge = '18';
 
//Control flow checking if adult registered early (true) and is an adult
if ((runnersAge) >= 18 && registrationTime === true) {
    raceNumber = raceNumber + 1000;
} else if ((runnersAge) > 18 && registrationTime === false) {
    raceNumber = raceNumber;
}

//Control flow checking age and registration time to determine race time and displaying it in the console
if ((runnersAge) >= 18 && registrationTime === true) {
    console.log(`Runner number ${raceNumber} you will start at 9:30 am`);
} else if ((runnersAge) >= 18 && registrationTime === false) {
    console.log(`Runner number ${raceNumber} you will start at 11 am`);
} else if ((runnersAge) < 18) {
    console.log(`Runner number ${raceNumber}, children start running at 12:30 p.m.!`);
}
