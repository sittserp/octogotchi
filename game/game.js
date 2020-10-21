import { setOctopus, getOctopus, noHp, OCTOPUS } from '../utils.js';


// Set const----------------------------------------------------------------------------------------------------------------------------
const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-arrow');
// Hearts constants
const heartSix = document.getElementById('heart-six');
const heartFive = document.getElementById('heart-five');
const heartFour = document.getElementById('heart-four');
const heartThree = document.getElementById('heart-three');
const heartTwo = document.getElementById('heart-two');
const heartOne = document.getElementById('heart-one');
// Food Constants
const foodFour = document.getElementById('food-four');
const foodThree = document.getElementById('food-three');
const foodTwo = document.getElementById('food-two');
const foodOne = document.getElementById('food-one');

// Function stuff ---------------------------------------------------------------------------------------------------------------------
function eatFood() {
    const octopus = getOctopus();
    if (octopus.food > 0) {
        octopus.food--;
    }
    setOctopus(octopus);
}
function loseHealth() {
    const octopus = getOctopus();
    if (octopus.food === 0 && octopus.hp > 0) {
        octopus.hp--;
    }
    setOctopus(octopus);
}
function addFood() {
    const octopus = getOctopus();
    if (octopus.food < 4) {
        octopus.food++;
    }
    setOctopus(octopus);
}
function addHealth() {
    const octopus = getOctopus();
    if (octopus.hp < 6) {
        octopus.hp++;
    }
    setOctopus(octopus);
}

// -------------------------------------------------------------------------------------------------------------------------------------

// gets Octopus from local storage
const octopus = getOctopus();

// const currentOctopus = setInterval(() => { getOctopus(); }, 1000);
// octopus eats food every 1 second
const hungry = setInterval(() => { eatFood(); }, 1000);

// octopus loses health every 1 second
const starving = setInterval(() => { loseHealth(); }, 1000);

// const octoStatus = setInterval(() => { console.log(currentOctopus.hp, 'octoStatus'); }, 1000);
// checks hp of octopus on timed interval
const hpCheck = setInterval(() => { if (noHp(octopus)) { window.location.href = '../index.html'; } }, 1000);


hungry;
starving;

hpCheck;
console.log(hpCheck);


// currentOctopus;
// octoStatus;
// setInterval(() => { console.log(noHp(octopus), 'noHp'); }, 1000);
// const hpCheck = setInterval(() => {
//     if (octopus.hp === 0) {
//         window.location.href = '../index.html';
//     }
// }, 1000);

// Event Listerners for arrows ---------------------------------------------------------------------------------------------------------------------

rArrow.addEventListener('click', () => {
    addFood();
    addHealth();

});

function healthChange() {
    const octopus = getOctopus();
    if (octopus.hp === 6){
        document.getElementById('heart-six').src = '../assets/heartthree.png';
    } else if (octopus.hp === 5){
        document.getElementById('heart-six').src = '../assets/twohalfheart.png';
    } else if (octopus.hp === 4){
        document.getElementById('heart-six').src = '../assets/twoheart.png';
    } else if (octopus.hp === 3){
        document.getElementById('heart-six').src = '../assets/onehalfheart.png';
    } else if (octopus.hp === 2){
        document.getElementById('heart-six').src = '../assets/oneheart.png';
    } else if (octopus.hp === 1){
        document.getElementById('heart-six').src = '../assets/halfheart.png';
    }
}
function foodChange() {
    const octopus = getOctopus();
    if (octopus.food === 4){
        document.getElementById('food-four').src = '../assets/4-fishie-row.png';
    } else if (octopus.food === 3){
        document.getElementById('food-four').src = '../assets/3-fishie-row.png';
    } else if (octopus.food === 2){
        document.getElementById('food-four').src = '../assets/2-fishie-row.png';
    } else if (octopus.food === 1){
        document.getElementById('food-four').src = '../assets/1-fishie-row.png';
    }
}
// Need to create what it will look like if 0 fish

// Cant display 4 fish image after clicking button to add more fish.
// Maybe it gets rid of the element? Could need to make an empty image of fish to keep slot?


const healthCheck = setInterval(() => { healthChange(); }, 1000);
const foodCheck = setInterval(() => { foodChange(); }, 1000);

healthCheck;
foodCheck;