import { setOctopus, getOctopus, noHp, OCTOPUS } from '../utils.js';

const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-arrow');


// Function stuff
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


const hungry = setInterval(() => { eatFood(); }, 5000);

const starving = setInterval(() => { loseHealth(); }, 5000);

hungry;
starving;

// Arrows 

rArrow.addEventListener('click', () => {
    addFood();
    addHealth();
    
});





