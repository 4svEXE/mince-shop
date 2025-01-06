import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDfU2DWwUfhjtU8bCHwmvVSvAZcjGeqU60',
  authDomain: 'mince-shop.firebaseapp.com',
  projectId: 'mince-shop',
  storageBucket: 'mince-shop.firebasestorage.app',
  messagingSenderId: '500260968596',
  appId: '1:500260968596:web:bb1f60bd3a77e0da8bfc81',
};

@NgModule({
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
})
export class FirebaseModule {}
