import { Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { User } from '../../../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null | undefined>(undefined);
  constructor(private firebaseAuth: Auth) {}

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) =>
      updateProfile(res.user, {
        displayName: username,
      })
    );

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}
