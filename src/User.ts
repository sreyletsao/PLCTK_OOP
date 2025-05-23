import { Authenticatable } from "./Authenticatable";

export abstract class User implements Authenticatable {
  constructor(public username: string, public email: string) {}

  // Simulated overloading using optional parameter
  login(username: string, password?: string): boolean {
    if (password) {
      console.log(`Logging in with username: ${username}`);
    } else {
      console.log(`Logging in with email: ${username}`);
    }
    return true;
  }

  // Abstract method to be overridden
  abstract getRole(): string;
}