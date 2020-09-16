import { v4 as uuidv4 } from 'uuid';

import cola from '../assets/img/cola.jpg';
import lemon from '../assets/img/lemon.jpg';
import orange from '../assets/img/orange.jpg';
import sprite from '../assets/img/sprite.jpg';
import energy from '../assets/img/energy.jpg';
import water from '../assets/img/water.jpg';

export const products = [
   {
      id: uuidv4(),
      productValue: 1.5,
      productImg: cola,
      productName: 'cola',
      productDesc: 'Can of Cola',
   },
   {
      id: uuidv4(),
      productValue: 1.5,
      productImg: lemon,
      productName: 'lemon',
      productDesc: 'Can of Lemon Drink',
   },
   {
      id: uuidv4(),
      productValue: 1.5,
      productImg: orange,
      productName: 'orange',
      productDesc: 'Can of Orange Drink',
   },
   {
      id: uuidv4(),
      productValue: 1.2,
      productImg: sprite,
      productName: 'sprite',
      productDesc: 'Can of Lemon Soda Drink',
   },
   {
      id: uuidv4(),
      productValue: 2.2,
      productImg: energy,
      productName: 'energy',
      productDesc: 'Can of Energy Drink',
   },
   {
      id: uuidv4(),
      productValue: 0.8,
      productImg: water,
      productName: 'water',
      productDesc: 'Bottle of pure Water',
   },
];