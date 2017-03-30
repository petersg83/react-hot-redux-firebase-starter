import * as firebase from 'firebase/firebase-browser';
import {firebaseConfig} from '../config';


class FirebaseApi {

  static initAuth() {
    firebase.initializeApp(firebaseConfig);
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        user => {
          unsub();
          resolve(user);
        },
        error => reject(error)
      );
    });
  }

  static createUserWithEmailAndPassword(user){
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }

  static signInWithEmailAndPassword(user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  static authSignOut(){
    return firebase.auth().signOut();
  }

  static databasePush(path, value) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .push(value, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
    });
  }

  static databaseRemove(path) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .remove((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
    });
  }

  static listenValue(path, callback, limit = 0) {
    let pathRef = firebase.database().ref(path);
    if (limit > 0) {
      pathRef = pathRef.limitToLast(limit);
    }

    return pathRef.on('value', (snapshot) => {
      return callback(snapshot.val());
    });
  }

  static removeOnDisconnect(path) {
    firebase.database().ref(path).onDisconnect().remove();
  }

  static GetValueByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('value');
  }

  static GetChildAddedByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('child_added');
  }

  static databaseSet(path, value) {
    return firebase
      .database()
      .ref(path)
      .set(value);
  }

  static databaseUpdate(path, value) {
    return firebase
      .database()
      .ref(path)
      .update(value);
  }
}

export default FirebaseApi;
