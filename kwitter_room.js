//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDdH65gXh9cjyWzMSu75N4HNLnxn0tdkU8",
      authDomain: "kwitter-9d794.firebaseapp.com",
      databaseURL: "https://kwitter-9d794-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d794",
      storageBucket: "kwitter-9d794.appspot.com",
      messagingSenderId: "1043054581580",
      appId: "1:1043054581580:web:76193fd2f08030da23a1e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("username");
document.getElementById("name").innerHTML = "Welcome, " + Username + "!"

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
};
getData();

function addroom() {
      Room_name = document.getElementById("bruh").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("Room_name", Room_name);
      window.location = "kwitter_page.html";
};

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}