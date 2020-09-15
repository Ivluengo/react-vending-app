import {v4 as uuidv4} from 'uuid';

import coin2 from '../assets/img/coin2.png';
import coin1 from '../assets/img/coin1.png';
import coin50 from '../assets/img/coin50.png';
import coin20 from '../assets/img/coin20.png';
import coin10 from '../assets/img/coin10.png';

export const coins = [
   {
      id: uuidv4(),
      coinValue: 2,
      coinImg: coin2,
      coinSize: 15,
   },
   {
      id: uuidv4(),
      coinValue: 1,
      coinImg: coin1,
      coinSize: 12,
   },
   {
      id: uuidv4(),
      coinValue: 0.5,
      coinImg: coin50,
      coinSize: 14,
   },
   {
      id: uuidv4(),
      coinValue: 0.2,
      coinImg: coin20,
      coinSize: 10,
   },
   {
      id: uuidv4(),
      coinValue: 0.1,
      coinImg: coin10,
      coinSize: 8,
   },
];