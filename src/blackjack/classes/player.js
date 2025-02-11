import { cardValue, requestCard, createCardImg} from '../usecases'


export class Player {
    /**
     * 
     * @param {HTMLElement} pointDisplayer 
     * @param {HTMLElement} cardHolder 
     * @param {Array<String>} deck 
     */
    constructor(pointDisplayer, cardHolder, deck) {
        this.pointDisplayer = pointDisplayer;
        this.cardHolder = cardHolder;
        this.deck = deck;
        this.points = 0;

        this.addCard = () => {
            let card = requestCard(this.deck), 
                cardVal = cardValue(card),
                cardRef = createCardImg(card);

            // console.log(this.deck);

            this.cardHolder.append(cardRef);
            this.points += cardVal;
            this.pointDisplayer.innerText = this.points;
        };

        this.hasLost = () => this.points > 21;

        this.reset = (deck) => {
            this.deck = deck;
            this.points = 0;
            this.pointDisplayer.innerText = this.points;
            this.cardHolder.innerHTML = '';
        };

        this.blockPlaying = () => {
            if (this.points > 21) {
                console.warn('Your points are higher than 21');
                return true;
            }

            if (this.points === 21) {
                console.warn('21 That is great');
                return true;
            }

            return false;
        };
    }
};
