import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from '../../store/app.state';
import { User } from '../../models';
import { AppAction } from '../../store/app.action';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  displayUserCard: boolean;

  constructor(private store: Store,  private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AppState.user)
  }

  signOut(){
    this.store.dispatch(new AppAction.SignOutUser()).pipe(
      take(1),
      tap((c) => {
        this.router.navigate(['/']);
      })
    ).subscribe();
  }
}
