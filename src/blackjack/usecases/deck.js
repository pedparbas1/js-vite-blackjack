/**
 * @param {Array<String>} colors
 * @param {Array<String>} figures
 * @returns {Array<String>} returns a new array of cards;
*/

export default (colors, figures) =>
    shuffle_FisherYates(createDeck(colors, figures));

const createDeck = (colors, figures) => {
    if (!colors || colors.length === 0) throw new Error('Card colors are mandatory');
    if (!figures || figures.length === 0) throw new Error('Card must have figures');

    let deck = [];
    for (let color of colors) {
        //Add all 
        for (let i = 2; i < 11; i++) {
            deck.push(`${i}${color}`);
        }
        //Add 4 special figures to deck 
        for (let figure of figures) {
            deck.push(`${figure}${color}`)
        }
    }
    return deck;
};


const shuffle_FisherYates = (array) => {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};