import { getOctopus, setOctopus } from '../utils.js';

// haha very nice code reuse!

const octopus = getOctopus();
const punchSound = new Audio('../sounds/punch.mp3');

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
    if (win === 10) {
        octopus.hp = 6;
        octopus.food = 4;
        alert('You punched that SHARKS FACE SO GOOooOOD! FULL HEALTH, FULL FOOD!');
        setOctopus(octopus);
        window.location.href = '../game/index.html';
    }
    if (loss === 20 && octopus.hp > 3) {
        octopus.hp = 3;
        alert('You SUCK, LITERALLY, YOU HAVE SUCKERS! HEALTH TO 1.5 HEARTS!');

    }
    if (loss === 15 && octopus.hp <= 3) {
        octopus.hp--;
        alert('Shark BAIT OOOOO AH AH, -1 HEALTH');
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
    punchSound.play();
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
    punchSound.play();
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
    punchSound.play();
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


