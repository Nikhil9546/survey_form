
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDua2IuoTOKI5ZWOy_dJwgMMDquweN4o8U",
    authDomain: "contact-form-niks.firebaseapp.com",
    projectId: "contact-form-niks",
    storageBucket: "contact-form-niks.appspot.com",
    messagingSenderId: "575576502371",
    appId: "1:575576502371:web:b8fc1c45685e580f6bc856",
    measurementId: "G-NLFVL57MB6"
  };
  // Initialize Firebase
  //Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let name = document.getElementById('name').value
  let mail = document.getElementById('email').value
  let sub = document.getElementById('message').value
  let country = document.getElementById('country').value

  //Save Form Data To Firebase
  db.doc().set({
    name: name,
    email: mail,
    message: sub,
    country: country
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})