import { setOctopus, getOctopus, noHp } from '../utils.js';

const eatSound = new Audio('../sounds/chewing-breadstick.wav');
const feedSound = new Audio('../sounds/slap.wav');
const heartSound = new Audio('../sounds/heartbeat.wav');

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
        eatSound.play();
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

function getSick() {
    const octopus = getOctopus();
    if (octopus.hp > 0) {
        octopus.hp--;
        heartSound.play();
    }
    setOctopus(octopus);
}

function addFood() {
    const octopus = getOctopus();
    if (octopus.food < 4) {
        octopus.food++;
        feedSound.play();
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
// 30 and 70 heart sound
// gets Octopus from local storage
const octopus = getOctopus();

// const currentOctopus = setInterval(() => { getOctopus(); }, 1000);
// octopus eats food every 1 second
const hungry = setInterval(() => { eatFood(); }, 1000);

// octopus loses health every 1 second
const starving = setInterval(() => { loseHealth(); }, 1000);

// octopus loses health every 5 seconds
const sickness = setInterval(() => { getSick(); }, 5000);

// const octoStatus = setInterval(() => { console.log(currentOctopus.hp, 'octoStatus'); }, 1000);
// checks hp of octopus on timed interval
const hpCheck = setInterval(() => { if (noHp(octopus)) { window.location.href = '../results/'; } }, 1000);

const stopWatch = setInterval(() => { addLifetime(); }, 1000);


stopWatch;
hungry;
starving;
sickness;

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
});

lArrow.addEventListener('click', () => {
    addHealth();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'f') {
        addFood();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'm') {
        addHealth();
    }
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

const healthCheck = setInterval(() => { healthChange(); }, 100);
const foodCheck = setInterval(() => { foodChange(); }, 100);


healthCheck;
foodCheck;

