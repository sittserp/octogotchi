// import functions and grab DOM elements

import { setOctopus } from './utils.js';

const form = document.querySelector('form');


// initialize state

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    setOctopus({
        owner: data.get('name'),
        name: data.get('pet-name'),
        hp: 6,
        food: 4,
        fed: 0,
        lifetime: 0
    });

    window.location.href = './game/';

});