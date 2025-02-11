import {players} from '../'

/**
 * 
 * @param {Number} playerPoints min points to win the round
 */
export const computerTurn = (playerPoints) => {
    const computer = players.computer;
    console.log('Computer is playing');
    do {
        computer.addCard();

        // console.log({menor21: [playerPoints <= 21], menorPuntosPlayer: [computer.points < playerPoints],bloqPlaying:  [!computer.blockPlaying()]});
    } while (playerPoints <= 21 &&
    computer.points < playerPoints &&
        !computer.blockPlaying())
};

