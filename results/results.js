import { getOctopus } from '../utils.js';

const deadTime = document.getElementById('dead-time');
const deadFood = document.getElementById('dead-food');
const middleButton = document.getElementById('middle-button');

const octopus = getOctopus();

deadTime.textContent = `${octopus.name} survived for ${octopus.lifetime} seconds!`;
deadFood.textContent = `${octopus.name} ate ${octopus.fed} fish!`;

middleButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'n') {
        // nice use of the keyboard even listener!
        localStorage.clear();
        window.location.href = '../index.html';
    }
});

