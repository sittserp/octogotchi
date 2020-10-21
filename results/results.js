import { getOctopus } from '../utils.js';

const deadTime = document.getElementById('dead-time');
const deadFood = document.getElementById('dead-food');

const octopus = getOctopus();

deadTime.textContent = `${octopus.name} survived for ${octopus.lifetime} seconds!`;
deadFood.textContent = `${octopus.name} ate ${octopus.fed} fish`;

console.log(octopus);

