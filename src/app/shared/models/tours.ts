import { Destination } from './destination';

export class Tours {
  id: number;
  title: string;
  description: string;
  price: string;
  numberDays: string;
  image: string;
  destination: Destination[];

  constructor(input: Tours) {
    Object.assign(this, input);
  }
}
