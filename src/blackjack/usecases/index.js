// Intermediate file so main index doesn't grow so much 

import createDeck from './deck';
export {createDeck};
export {requestCard, cardValue, createCardImg} from './cards';
export {computerTurn} from './computer';


//Should have its own import from inside the folder but for only one class this is just enough
export { Player } from '../classes/player';