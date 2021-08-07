import { AUTH_PROVIDERS } from '../models';

export namespace AppAction {
  export class SignInUser {
    static readonly type = '[App] SignIn User';

    constructor(public authType: AUTH_PROVIDERS) {
    }
  }

  export class SignOutUser {
    static readonly type = '[App] SignOut User';

    constructor() {
    }
  }
}
