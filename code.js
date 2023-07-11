
let quiz = [
{
    'que' :  'which of the following is markup languagw',

    'a' : 'HTML',
    'b' : 'XML',
     'c' : 'CSS',
     'd' : 'Java',
     'correct' : 'HTML',
},
 {
    'que' : 'Who is making the Web standards?',
    
'a' : 'mozila',
'b' : 'The world wide',
'c' : 'Microsoft',
'd' :'Google',
 'correct': 'The world wide',
},


   {
    'que':'Choose the correct HTML element for the largest heading:',
'a':'Heading',
'b':'H1',
'c':'H5',
'd':'Header',
'correct': 'H1',  
  
}
]


let index = 0;
let score = 0;
 let  ques = document.getElementById("quebox");
 let  opt1 = document.getElementById("option1");
 let  opt2 = document.getElementById("option2");
 let  opt3 = document.getElementById("option3");
 let  opt4 = document.getElementById("option4");
 
   ques.innerHTML = `${index + 1})` +"  "+  quiz[index].que;
   opt1.innerHTML = quiz[index].a; 
   opt2.innerHTML = quiz[index].b;
   opt3.innerHTML = quiz[index].c;
   opt4.innerHTML = quiz[index].d;     
   
   
   function next(){
     index++ ;
     ques.innerHTML = `${index+1})` +"  "+   quiz[index].que;
     opt1.innerHTML = quiz[index].a; 
     opt2.innerHTML = quiz[index].b;
     opt3.innerHTML = quiz[index].c;
     opt4.innerHTML = quiz[index].d; 
     document.getElementById("btns").disabled= true
     
    }

  function check(name){

   if(name.innerHTML === quiz[index].correct){
     
     score+=5
     document.getElementById("score").innerHTML =`Your score is  ${score}` 
     document.getElementById("btns").disabled= false
   }
else{
   console.log("false")
}
}


// // Sign UP 

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAgtThQrgiBzenDCJTueSkmnIq6rfb0wwA",
//   authDomain: "login-signin-571f6.firebaseapp.com",
//   projectId: "login-signin-571f6",
//   storageBucket: "login-signin-571f6.appspot.com",
//   messagingSenderId: "1040894332095",
//   appId: "1:1040894332095:web:1a3f01ea2460e6fb4a4a0a",
//   measurementId: "G-JR965681S6"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// let auth = getAuth(app);

// let btn = document.getElementById('btn')


// btn.addEventListener('click',()=>{
// let email = document.getElementById('email').value
// let password = document.getElementById('password').value


// // let now = document.getElementById('sign')
// // now.style.display ='none'
// // let ab = document.getElementById('log')
// // ab.style.display = 'flex'


// createUserWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    
//     window.location.href = './login.html'
// console.log('user', user)
// // ...
// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// console.log('errorCode', errorCode)
// console.log('errorMessage', errorMessage)
// })


// })


// login



// document.getElementById(tn1)
// tn1.addEventListener('click',()=>{
//   let email2 = document.getElementById('email2').value
//   let password2 = document.getElementById('password2').value
//   signInWithEmailAndPassword(auth, email2, password2)
//   .then((userCredential) => {
//     // Signed in 
//     window.location.href = './index.html'
//       const user = userCredential.user;
//       console.log('user',user)
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('errorCode' , errorCode)
//       console.log('invalid', errorMessage)
//     })
  
  
//   });


