export { requestCard, cardValue, createCardImg as createCardImg};

const CARD_ASSETS_POINTER = './public/assets/cards/';

/**
 * 
 * @param {Array<String>} gameDeck 
 * @returns {String} return a card as text
*/
const requestCard = (gameDeck) => {
    // console.log(gameDeck);
    let response = gameDeck.length === 0 ?
        (() => { throw new Error('No more cards in deck')})() :
        (() => {
            let card = gameDeck.pop()
            // usedDeck.push(card);
            return card;
        });
    return response();
};

/**
 * 
 * @param {String} card 
 * @returns {Number} card value as int 
 */
const cardValue = (card) => {
    // console.log(card)
    const value = card.substring(0, card.length - 1)
    // console.log({value});
    return !isNaN(value) ? //First handle generic case
        (value * 1) : // Convert to number
        (value === 'A' ? 11 : 10)
        || 0; // Case is not parsed correctly
};

/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} card image to append to the hand 
 */
const createCardImg = (card) => {
    const cardRef = document.createElement('img');
    cardRef.setAttribute('class', 'card');
    cardRef.setAttribute('src', `${CARD_ASSETS_POINTER}${card}.png`);
    return cardRef;
};
