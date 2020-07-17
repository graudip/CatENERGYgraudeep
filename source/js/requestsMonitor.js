import * as firebase from "firebase";
let database = firebase.database();
let ref = database.ref("requests");
ref.on("value", function(snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let data = childSnapshot.val();
    console.log(data.age);
    console.log(data.email);
    console.log(data.name);
  });  
})