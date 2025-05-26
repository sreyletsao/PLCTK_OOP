export abstract class Person {
  constructor(public name: string, public address: string) {}

  getName(): string {
    return this.name;
  }
}
