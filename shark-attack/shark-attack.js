import { getOctopus, setOctopus } from '../utils.js';

const octopus = getOctopus();

const winSpan = document.querySelector('#win-span');
const lossSpan = document.querySelector('#loss-span');
const drawSpan = document.querySelector('#draw-span');
const gamesPlayedSpan = document.querySelector('#games-played');

const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const mArrow = document.getElementById('middle-button');

function getRandomThrow() {
    let computerWeaponNumber = Math.ceil(Math.random() * 3);
    let computerWeapon;

    if (computerWeaponNumber === 1) {
        computerWeapon = 'rock';
    } else if (computerWeaponNumber === 2) {
        computerWeapon = 'paper';
    } else {
        computerWeapon = 'scissors';
    }
    return computerWeapon;
}

function didUserWin(player, computer) {
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return 'win';
    } else if (player === computer) {
        return 'draw';
    } else {
        return 'lose';
    }
}

function updateView() {
    winSpan.textContent = win;
    lossSpan.textContent = loss;
    drawSpan.textContent = draw;
    gamesPlayedSpan.textContent = gamesPlayed;
}

function finalResult() {
    if (win === 2) {
        octopus.hp = 6;
        octopus.food = 4;
        alert('You won! Full health, belly full, and back home!');
    }
    if (loss === 2 && octopus.hp > 3) {
        octopus.hp = 3;
        alert('You lost :(  Take your ball and go home.');
    }
    if (loss === 2 && octopus.hp <= 3) {
        octopus.hp--;
        alert('Shark Bite!! Game OVER.');
    } else {
        return;
    }
    setOctopus(octopus);
    window.location.href = '../game/index.html';
}

let win = 0;
let loss = 0;
let draw = 0;
let gamesPlayed = 0;


rArrow.addEventListener('click', () => {
    const computerWeapon = getRandomThrow();
    const playerWeapon = 'paper';
    // const playerChoice = playerWeapon.value;
    if (didUserWin(playerWeapon, computerWeapon) === 'win') {
        win++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'lose') {
        loss++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'draw') {
        draw++;
    }

    gamesPlayed++;

    updateView();

    finalResult();
});

lArrow.addEventListener('click', () => {
    const computerWeapon = getRandomThrow();
    const playerWeapon = 'rock';
    // const playerChoice = playerWeapon.value;
    if (didUserWin(playerWeapon, computerWeapon) === 'win') {
        win++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'lose') {
        loss++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'draw') {
        draw++;
    }

    gamesPlayed++;

    updateView();

    finalResult();
});

mArrow.addEventListener('click', () => {
    const computerWeapon = getRandomThrow();
    const playerWeapon = 'scissors';
    // const playerChoice = playerWeapon.value;
    if (didUserWin(playerWeapon, computerWeapon) === 'win') {
        win++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'lose') {
        loss++;
    }
    if (didUserWin(playerWeapon, computerWeapon) === 'draw') {
        draw++;
    }

    gamesPlayed++;

    updateView();

    finalResult();

});

