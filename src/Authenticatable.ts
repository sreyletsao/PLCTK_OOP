export interface Authenticatable {
  login(username: string, password: string): boolean;
}