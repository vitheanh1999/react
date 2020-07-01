import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAm1kynwtySlq0AexRMafFvUDyojB5vsYY",
    authDomain: "reduxdemo-123.firebaseapp.com",
    databaseURL: "https://reduxdemo-123.firebaseio.com",
    projectId: "reduxdemo-123",
    storageBucket: "reduxdemo-123.appspot.com",
    messagingSenderId: "903234886303",
    appId: "1:903234886303:web:2aea63affcd2e8c6ff60aa",
    measurementId: "G-ET8384JYWL"
  };
//   firebase.analytics();

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('node1/');
data.once('value').then(function(snapshot){
    // console.log(snapshot.val());
    
})