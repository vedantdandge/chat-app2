
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB0tDB3JFoYVqO88FGvI5jkI5jFeun9Tr0",
    authDomain: "kwitter-app-f0efd.firebaseapp.com",
    databaseURL: "https://kwitter-app-f0efd-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-f0efd",
    storageBucket: "kwitter-app-f0efd.appspot.com",
    messagingSenderId: "1044320830366",
    appId: "1:1044320830366:web:5097453a575e2dbd938c8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="webapp_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="webapp_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}