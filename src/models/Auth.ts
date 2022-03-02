import { makeAutoObservable } from 'mobx';

export class Auth {
  username: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login({ username }: { username: string }) {
    this.username = username;
  }

  logout() {
    this.username = null;
  }
}
