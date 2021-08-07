import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngxs/store';

import { AUTH_PROVIDERS, AuthToggle } from '../../models';
import { environment } from '../../../environments/environment';
import { AppAction } from '../../store/app.action';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private googleLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';
  private twitterLogoURL = 'https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg';
  private facebookLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';

  public authToggle: AuthToggle = environment.firebaseAuth;
  public authProvider = AUTH_PROVIDERS;

  constructor(private store: Store,
              private router: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'googleLogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));

    this.matIconRegistry.addSvgIcon(
      'twitterLogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.twitterLogoURL));

    this.matIconRegistry.addSvgIcon(
      'facebookLogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.facebookLogoURL));
  }

  signIn(authProvider: AUTH_PROVIDERS) {
    this.store.dispatch(new AppAction.SignInUser(authProvider))
      .pipe(
        take(1),
        tap((c) => {
          this.router.navigate(['/']);
        })
      ).subscribe()

  }

}
