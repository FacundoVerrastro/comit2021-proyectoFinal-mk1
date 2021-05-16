import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';
import "firebase/auth";

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,) { }

  async logIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) {
      console.log(error);
    }
    return 0;
  }
  async register(userName: string, email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          return this.UpdateProfile(userName);
        });
      return result;
    } catch (error) {
      console.log(error)
    }
  }
  async logOut() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }
  }
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  async UpdateProfile(displayName: string) {
    const profile = {
      displayName: displayName,
    }
    return (await this.afAuth.currentUser)?.updateProfile(profile);
  }
}
