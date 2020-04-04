export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
