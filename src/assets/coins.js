import { v4 as uuidv4 } from 'uuid';

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
      coinName: "two",
      coinSize: 100,
   },
   {
      id: uuidv4(),
      coinValue: 1,
      coinImg: coin1,
      coinName: "one",
      coinSize: 80,
   },
   {
      id: uuidv4(),
      coinValue: 0.5,
      coinImg: coin50,
      coinName: "fifty",
      coinSize: 90,
   },
   {
      id: uuidv4(),
      coinValue: 0.2,
      coinImg: coin20,
      coinName: "twenty",
      coinSize: 70,
   },
   {
      id: uuidv4(),
      coinValue: 0.1,
      coinImg: coin10,
      coinName: "ten",
      coinSize: 60,
   },
];