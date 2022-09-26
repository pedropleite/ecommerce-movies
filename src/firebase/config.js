import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCD0-QbaPWmdbFNsPkkwGEeFaU1pyLugq8',
    authDomain: 'dot-teste.firebaseapp.com',
    projectId: 'dot-teste',
    storageBucket: 'dot-teste.appspot.com',
    messagingSenderId: '636553038957',
    appId: '1:636553038957:web:b3aa1e326ff2a801e54364',
};

const app = initializeApp(firebaseConfig);

export const authorization = getAuth(app);
