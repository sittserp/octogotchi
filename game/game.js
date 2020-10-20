import { setOctopus, getOctopus, noHp, OCTOPUS } from '../utils.js';

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

const octopus = getOctopus();
// const currentOctopus = setInterval(() => { getOctopus(); }, 1000);

const hungry = setInterval(() => { eatFood(); }, 1000);

const starving = setInterval(() => { loseHealth(); }, 1000);

// const octoStatus = setInterval(() => { console.log(currentOctopus.hp, 'octoStatus'); }, 1000);

const hpCheck = setInterval(() => { if (noHp(octopus)) { window.location.href = '../index.html'; } }, 1000);


hungry;
starving;
// currentOctopus;
// octoStatus;


// setInterval(() => { console.log(noHp(octopus), 'noHp'); }, 1000);

hpCheck;

console.log(hpCheck);

// const hpCheck = setInterval(() => {
//     if (octopus.hp === 0) {
//         window.location.href = '../index.html';
//     }
// }, 1000);

// hpCheck;





