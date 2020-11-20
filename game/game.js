import { setOctopus, getOctopus, noHp } from '../utils.js';

const eatSound = new Audio('../sounds/chewing-breadstick.wav');
const feedSound = new Audio('../sounds/slap.mp3');
const heartSound = new Audio('../sounds/heartbeat.wav');
const healthUpSound = new Audio('../sounds/health-up.wav');

// Set const----------------------------------------------------------------------------------------------------------------------------
const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-button');

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
        heartSound.play();
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
        healthUpSound.play();
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
const hungry = setInterval(() => { eatFood(); }, 3000);

// octopus loses health every 1 second
const starving = setInterval(() => { loseHealth(); }, 3000);

// octopus loses health every 5 seconds
const sickness = setInterval(() => { getSick(); }, 10000);

// const octoStatus = setInterval(() => { console.log(currentOctopus.hp, 'octoStatus'); }, 1000);
// checks hp of octopus on timed interval
const hpCheck = setInterval(() => { if (noHp(octopus)) { window.location.href = '../results/'; } }, 1000);

const stopWatch = setInterval(() => { addLifetime(); }, 1000);


stopWatch;
hungry;
starving;
sickness;
hpCheck;

// Event Listerners for arrows ---------------------------------------------------------------------------------------------------------------------

rArrow.addEventListener('click', () => {
    addFood();
});

lArrow.addEventListener('click', () => {
    addHealth();
});

mArrow.addEventListener('click', () => {
    window.location.href = '../shark-attack/index.html';
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

const heartImages = [
    '../assets/halfheart.png',
    '../assets/oneheart.png',
    '../assets/onehalfheart.png',
    '../assets/twoheart.png',
    '../assets/twohalfheart.png',
    '../assets/heartthree.png',
];

function healthChange() {
    const octopus = getOctopus();

    document.getElementById('heart-three').src = heartImages[octopus.hp - 1];
}

const fishImages = [
    '../assets/no-fishie.png',
    '../assets/one-fishie-row.png',
    '../assets/two-fishie-row.png',
    '../assets/three-fishie-row.png',
    '../assets/four-fishie-row.png',
];

function foodChange() {
    const octopus = getOctopus();
    
    document.getElementById('food-four').src = fishImages[octopus.food];
}

const healthCheck = setInterval(() => { healthChange(); }, 200);
const foodCheck = setInterval(() => { foodChange(); }, 200);

// no need for these, but i can see the linet gets mad without them, and it's nice to use variables to label processes
healthCheck;
foodCheck;

function sickOcto() {
    const octopus = getOctopus();
    const skullOcto = document.getElementById('skull-octo');
    
    skullOcto.style.display = octopus.hp > 2 ? 'none' : 'block';
}

const sickCheck = setInterval(() => { sickOcto(); }, 100);

sickCheck;

