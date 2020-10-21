import { setOctopus, getOctopus, noHp } from '../utils.js';


// Set const----------------------------------------------------------------------------------------------------------------------------
const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-arrow');
// Function stuff ---------------------------------------------------------------------------------------------------------------------
function eatFood() {
    const octopus = getOctopus();
    if (octopus.food > 0) {
        octopus.food--;
        octopus.fed++;
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

function addLifetime() {
    const octopus = getOctopus();
    octopus.lifetime++;
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
const hpCheck = setInterval(() => { if (noHp(octopus)) { window.location.href = '../results/'; } }, 1000);

const stopWatch = setInterval(() => { addLifetime(); }, 1000);


stopWatch;
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
    if (octopus.hp === 6) {
        document.getElementById('heart-three').src = '../assets/heartthree.png';
    } else if (octopus.hp === 5) {
        document.getElementById('heart-three').src = '../assets/twohalfheart.png';
    } else if (octopus.hp === 4) {
        document.getElementById('heart-three').src = '../assets/twoheart.png';
    } else if (octopus.hp === 3) {
        document.getElementById('heart-three').src = '../assets/onehalfheart.png';
    } else if (octopus.hp === 2) {
        document.getElementById('heart-three').src = '../assets/oneheart.png';
    } else if (octopus.hp === 1) {
        document.getElementById('heart-three').src = '../assets/halfheart.png';
    }
}
function foodChange() {
    const octopus = getOctopus();
    if (octopus.food === 4) {
        document.getElementById('food-four').src = '../assets/four-fishie-row.png';
    } else if (octopus.food === 3) {
        document.getElementById('food-four').src = '../assets/three-fishie-row.png';
        console.log('../assets/3-fishie-row.png')
    } else if (octopus.food === 2) {
        document.getElementById('food-four').src = '../assets/two-fishie-row.png';
    } else if (octopus.food === 1) {
        document.getElementById('food-four').src = '../assets/one-fishie-row.png';
    } else if (octopus.food === 0) {
        document.getElementById('food-four').src = '../assets/no-fishie.png';
    }
}
// Need to create what it will look like if 0 fish

// Cant display 4 fish image after clicking button to add more fish.
// Maybe it gets rid of the element? Could need to make an empty image of fish to keep slot?


const healthCheck = setInterval(() => { healthChange(); }, 10);
const foodCheck = setInterval(() => { foodChange(); }, 10);

healthCheck;
foodCheck;
