var firebase = require("firebase");
require("firebase/auth");
require("firebase/storage");
require("firebase/database");
require("firebase/functions");

var config = {
  apiKey: "AIzaSyCbyObWiaXuqYcVk7H5QAsANoYY1xnYMDg",
  authDomain: "foodtel-857f2.firebaseapp.com",
  databaseURL: "https://foodtel-857f2.firebaseio.com",
  projectId: "foodtel-857f2",
  storageBucket: "foodtel-857f2.appspot.com",
  //messagingSenderId: "533408782485"
};

firebase.initializeApp(config);

// var myRef = firebase.database().ref("collection").on("value", (snap) => {
//   // do something with the data
// });


// Assume we have the following data in the Database:
// {
//     "name": {
//       "first": "Ada",
//       "last": "Lovelace"
//     }
//   }
  

var ref = firebase.database().ref();

ref.child('user-data').orderByChild('z_id').equalTo("1").on("value", function(snapshot){
  
  snapshot.forEach(function(data){
  
    //console.log(data.key);
    console.log(data.val());
  })
  
});

  

/*
  // Test for the existence of certain keys within a DataSnapshot
  var ref = firebase.database().ref("foodtel-857f2/user-data");
  //console.log("ref:", ref);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("first_name").val(); // {first:"Ada",last:"Lovelace"}
      console.log(name);

      // var firstName = snapshot.child("LSu8DJ14Y0a2seIHQ_x/first_name").val(); // "Ada"
      // console.log(firstName);
      var key = snapshot.key;
      console.log(key);
      var childkey = snapshot.child("LSu8DJ14Y0a2seIHQ_x").exists();
      console.log(childkey);      


    //   ref.child('users').orderByChild('LSpCwyo0OZjdY-eaXHq').equalTo('Hello').on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //     snapshot.forEach(function(data) {
    //         console.log(data.key);
    //     });
    // });


      // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
      // console.log(lastName);
      // var age = snapshot.child("age").val(); // null
      // console.log(age);
    });
    // var userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/LSuApqI8uXemMN4VB2f/' + userId).once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      // ...
    //});
    */