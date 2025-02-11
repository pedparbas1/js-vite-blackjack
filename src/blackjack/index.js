import '../style.css';
import { createDeck, computerTurn, Player } from './usecases';

export let players = {player: undefined, computer: undefined};

const myModule = (() => {
    'use strict'

    const COLORS = ['S', 'H', 'C', 'D'],
        FIGURES = ['A', 'J', 'Q', 'K'];

    //Usa la misma direccion de memoria??
    let [deck, usedDeck, gameDeck] = [[], [], [],];


    const removeChild = (tag) => {
        tag.innerHTML = '';
    };
    
    //Page configuration
    const btnAskCard = document.getElementById('btn-askCard'),
        btnStopHand = document.getElementById('btn-stopHand'),
        btnNewGame = document.getElementById('btn-newGame'),
        playerCards = document.getElementById('player-cards'),
        computerCard = document.getElementById('computer-cards'),
        [playerPointsDisplay, computerPointsDisplay] =
            [...document.getElementsByTagName('small')],
        player = new Player(playerPointsDisplay, playerCards, gameDeck),
        computer = new Player(computerPointsDisplay, computerCard, gameDeck);

        players = {player:player, computer: computer};


    const MESSAGES = (pPoints, cPoints) => ([
        { condition: pPoints === 21 && cPoints === 21, message: 'You TIED! both you and the computer have 21 ' },
        { condition: pPoints === cPoints, message: 'You TIED! both you and the computer have the same points: ' + pPoints },
        { condition: pPoints > 21, message: 'Computer Won! you exceeded 21: ' + pPoints },
        { condition: cPoints > 21, message: 'You WON! computer exceeded 21: ' + cPoints },
        { condition: pPoints < cPoints, message: 'Computer Won!' },
        { condition: cPoints < pPoints, message: 'You WON' },
    ]);

    const computeWinner = (playerPoints, computerPoints) => {
        console.log({ playerPoints, computerPoints });
        btnAskCard.disabled = true;
        btnStopHand.disabled = true;

        for (let condition of MESSAGES(playerPoints, computerPoints)) {
            if (condition.condition) {
                alert(condition.message);
                return;
            }
        }

        console.log('Unexpected result!');
    }

    //Events
    btnAskCard.addEventListener('click', () => {

        player.addCard();
        !player.blockPlaying() ? {} :
            (() => {
                btnAskCard.disabled = true;
                btnStopHand.disabled = true;
                computerTurn(player.points);

                setTimeout(() => {
                    computeWinner(player.points, computer.points);
                }, 50);
            })();
    });

    btnNewGame.addEventListener('click', () => {
        btnAskCard.disabled = false;
        btnNewGame.disabled = false;
        btnStopHand.disabled = false;
        
        startTurn();
    });

    btnStopHand.addEventListener('click', () => computerTurn(player.points));

    //Game start logic
    const startTurn = () => {
        deck = createDeck(COLORS, FIGURES);
        gameDeck = [...deck];

        player.reset(gameDeck);
        computer.reset(gameDeck);

    };

    startTurn();

    return {
        initGame: startTurn,
    };
})();
