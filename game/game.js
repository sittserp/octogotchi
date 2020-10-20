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

const hungry = setInterval(() => { eatFood(); }, 1000);

const starving = setInterval(() => { loseHealth(); }, 1000);

hungry;
starving;






