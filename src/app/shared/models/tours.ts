import { Destination } from './destination';

export class Tours {
  id: number;
  title: string;
  description: string;
  price: string;
  numberDays: string;
  image: string;
  destination: Destination[];

  constructor(tours: Tours) {
    Object.assign(this, tours);
  }
}
