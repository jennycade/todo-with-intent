import app from 'firebase/app';

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
  }
}

export default Firebase;