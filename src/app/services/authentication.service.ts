import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngxs/store';
import { StateClear } from 'ngxs-reset-plugin';

import { AUTH_PROVIDERS, User } from '../models';
import firebase from 'firebase';
import { from, Observable } from 'rxjs';
import UserCredential = firebase.auth.UserCredential;
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private ngFireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store,
  ) {
  }

  signIn(authProvider: AUTH_PROVIDERS): Observable<User> {
    let provider;
    switch (authProvider) {
      case AUTH_PROVIDERS.GOOGLE_PROVIDER:
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case AUTH_PROVIDERS.FACEBOOK_PROVIDER:
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case AUTH_PROVIDERS.TWITTER_PROVIDER:
        provider = new firebase.auth.TwitterAuthProvider();
        break;
    }

    return from(this.ngFireAuth.signInWithPopup(provider))
      .pipe(
        map((credential: UserCredential) => {
          return {
            uid: credential.user.uid,
            displayName: credential.user.displayName,
            email: credential.user.email,
            photoURL: credential.user.photoURL
          } as User;
        })
      )
  }


  async signOut() {
    await this.ngFireAuth.signOut();
    await this.store.dispatch(new StateClear()).toPromise();
  }

}
