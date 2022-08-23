//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("Room_name");
function sned(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            fmsg:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 name =message_data['name'];
 message =message_data['fmsg'];
 like = message_data['like'];
 nameWithTag="<h4>"+name+"</h4>";
 msgWithTag="<h4 class'message_h4'>"+message+"</h4>";
 likeWithBtn="<button class'btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updatelike(thid.id)'>Likes:"+like+"</button>";
row=nameWithTag+msgWithTag+likeWithBtn;
document.getElementById("output").innerHTML+=row;
function updatelike(message_id){
button_id=message_id;
console.log(message_id);
likes=document.getElementById(button_id).value;
updatelikes=Number(like)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updatelikes
});
}
 //End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
          window.location = "index.html";
      } 