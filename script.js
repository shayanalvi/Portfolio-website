document.onscroll= () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};


document.onload=() => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};



//contact form starts


// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDX5CQpnC9EeKWaRtSArrCPMpDqGXHqGbs",
    authDomain: "ahmadkamal-ecf2c.firebaseapp.com",
    databaseURL: "https://ahmadkamal-ecf2c-default-rtdb.firebaseio.com",
    projectId: "ahmadkamal-ecf2c",
    storageBucket: "ahmadkamal-ecf2c.appspot.com",
    messagingSenderId: "481439106784",
    appId: "1:481439106784:web:5555efd6a3a3b43b0f7285",
    measurementId: "G-CX56RHMF9T"
};
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    console.log('hello');
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }






//contact form ends



//popup starts

// myimg1.addEventListener("click", function () {
//   myPopup.classList.add("show");
// });
function showPop(){
  myimg1.addEventListener("click", function () {
       myPopup.classList.add("show");
     });
}
function closePop(){
  closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
  });
}
// window.addEventListener("click", function (event) {
//   if (event.target == myPopup) {
//       myPopup.classList.remove("show");
//   }
// });



// //popup 2
function showPop2(){
  myimg2.addEventListener("click", function () {
       myPopup2.classList.add("show");
     });
}
function closePop2(){
  closePopup2.addEventListener("click", function () {
    myPopup2.classList.remove("show");
  });
}
// window.addEventListener("click", function (event) {
//   if (event.target == myPopup2) {
//       myPopup2.classList.remove("show");
//   }
// });


//popup ends


