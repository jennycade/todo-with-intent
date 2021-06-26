import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCASkwvPXLH8UD6unCDhztxn81tuZmAf4",
  authDomain: "intently-32ad2.firebaseapp.com",
  projectId: "intently-32ad2",
  storageBucket: "intently-32ad2.appspot.com",
  messagingSenderId: "210057755376",
  appId: "1:210057755376:web:8b64f7efe9a71da0de6035"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => 
    this.auth.signOut();
  
  doPasswordReset = (email) =>
    this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = (password) => 
    this.auth.currentUser.updatePassword(password);
  
  isUserSignedIn = () => {
    return !!this.auth().currentUser;
  }
}

export default Firebase;