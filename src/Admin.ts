import { User } from "./User";

export class Admin extends User {
  override login(username: string, password?: string): boolean {
    console.log(`Admin login - username: ${username}`);
    return true;
  }

  getRole(): string {
    return "Admin";
  }
}