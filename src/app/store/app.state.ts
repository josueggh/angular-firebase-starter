import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { AppAction } from './app.action';
import { AuthenticationService } from '../services/authentication.service';
import { take, tap } from 'rxjs/operators';

export interface AppStateModel {
  user: User,
}

@State<AppStateModel>({
  name: 'application',
  defaults: {
    user: null,
  }
})
@Injectable()
export class AppState {

  @Selector()
  static user(state: AppStateModel) {
    return state.user;
  }

  @Action(AppAction.SignInUser)
  signInUser(ctx: StateContext<AppStateModel>, action: AppAction.SignInUser) {
    return this.authService.signIn(action.authType).pipe(
      take(1),
      tap((user: User) => {
          ctx.patchState({ user: user });
        }
      ),
    )
  }

  @Action(AppAction.SignOutUser)
  async signOutUser(ctx: StateContext<AppStateModel>) {
    await this.authService.signOut();
  }

  constructor(private authService: AuthenticationService) {
  }
}
