
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCnXpLpt3i-BZApooEisFg-d_NGJIWZDTI",
  authDomain: "school-chat-c477a.firebaseapp.com",
  databaseURL: "https://school-chat-c477a-default-rtdb.firebaseio.com",
  projectId: "school-chat-c477a",
  storageBucket: "school-chat-c477a.appspot.com",
  messagingSenderId: "165452300915",
  appId: "1:165452300915:web:dd4a17ccdd89812be7e006",
  measurementId: "G-0RKZ6W7FKQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("Name")

document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!"

function logout() {
    window.location = "index.html";
}