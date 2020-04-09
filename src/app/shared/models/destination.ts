import { Tours } from './tours';

export class Destination {
  id: number;
  title: string;
  description: string;
  pays: string;
  ville: string;
  image: string;
  tours: Tours[];

  constructor(destination: Destination) {
    Object.assign(this, destination);
  }
}
