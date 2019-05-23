firebase.auth().onAuthStateChanged(function(user){
  if (user) {
   //User is signed in.
document.getElementById("user_div").style.display="block";
document.getElementById ("login_div").style.display="none";

var user=firebase.auth().currentUser;
if(user != null){
   var email_id =user.email;
   document.getElementById("user_para").innerHTML ="welcome User:"+ email_id;
}

  } else {
    //No user is signed in
    document.getElementById("user_div").style.display = "none";
    document.getElementById ("login_div").style.display ="block";
  }
});


const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin =  document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout')



//Add Login event
btnLogin.addEventListener('click', e=>{
  //get email and pass 
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in 
  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e=> console.log(e.message));

})
  


firebase.auth().createUserWithEmailAndPassword(email,pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
    // ...
  });


 

  function logout() {
      firebase.auth().signOut();
  }
