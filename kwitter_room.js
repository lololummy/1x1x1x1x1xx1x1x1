
//ADD YOUR FIREBASE LINKS HERE
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }

         function logout()
          {
                 localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
            window.location = "kwitter.html";
       }
       firebase.analytics();