export const OCTOPUS = 'OCTOPUS';

export function setOctopus(octopus) {
    const stringyOctopus = JSON.stringify(octopus);
    localStorage.setItem(OCTOPUS, stringyOctopus);
}

export function getOctopus() {
    const stringyOctopus = localStorage.getItem(OCTOPUS);
    return JSON.parse(stringyOctopus);
}

export function noHp(octopus) {
    octopus = getOctopus();
    if (octopus.hp === 0) {
        return true;
    }
}