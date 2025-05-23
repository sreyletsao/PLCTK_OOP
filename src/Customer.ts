import { User } from "./User";

export class Customer extends User {
  override login(username: string, password?: string): boolean {
    console.log(`Customer login - username: ${username}`);
    return true;
  }

  getRole(): string {
    return "Customer";
  }
}