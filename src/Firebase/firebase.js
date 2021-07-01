import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
    this.db = app.firestore();
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
    return !!this.auth.currentUser;
  }
  getUserEmail = () => {
    if (this.isUserSignedIn()) {
      return this.auth.currentUser.email; 
    } else {
      return false;
    }
  }
  getUserID = () => {
    if (this.isUserSignedIn()) {
      return this.auth.currentUser.uid;
    } else {
      return null;
    }
  }
  getCurrentUser = () => {
    if (this.isUserSignedIn()) {
      return this.auth.currentUser;
    } else {
      return null;
    }
  }

  onAuthStateChange = (setSignedIn) => {
    // firebase.auth.onAuthStateChanged() returns the unsubscribe function
    return this.auth.onAuthStateChanged(user => {
      if (!!user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
  }

  // Firestore API
  addTodo = ( todo ) => {
    this.db.collection('todos').add({
      ...todo,
      uid: this.getCurrentUser().uid,
    })
    .then(() => {
      console.log('Todo successfully saved!');
    })
    .catch((error) => {
      console.error('Error writing todo: ', error);
    });
  }

  getDateTodos = ( uid, dateString ) => { // TODO: include callback so this can send the todos back to the react component that called it!
    let todosArray = [];
    const todosRef = this.db.collection('todos');
    todosRef.where('uid', '==', uid).where('dateString', '==', dateString)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
          todosArray.push(doc.data());
        });
        return todosArray;
      })
      .catch((error) => {
        console.log('Error getting todos: ', error);
      });
  }
}

export default Firebase;