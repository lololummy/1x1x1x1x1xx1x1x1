//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAW-MAF559Fl7UVn7lDAGd46PToNqQQKBc",
      authDomain: "kwitter-vesion-2.firebaseapp.com",
      databaseURL: "https://kwitter-vesion-2-default-rtdb.firebaseio.com",
      projectId: "kwitter-vesion-2",
      storageBucket: "kwitter-vesion-2.appspot.com",
      messagingSenderId: "15700616526",
      appId: "1:15700616526:web:ed8a20448a902dd6a7ea1f",
      measurementId: "G-MQWJCN2CVJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name=localStorage.getItem("room_name",room_name);
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name1:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
firebase.analytics();