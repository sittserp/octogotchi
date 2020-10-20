import { setOctopus, getOctopus, noHp, OCTOPUS } from '../utils.js';


// Set const----------------------------------------------------------------------------------------------------------------------------
const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-arrow');


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







