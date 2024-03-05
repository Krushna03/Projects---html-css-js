 
const passwordBox = document.getElementById('password');

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const Symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + Symbol;

document.querySelector('.button').addEventListener('click',()=>{
   let password = '';
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += Symbol[Math.floor(Math.random() * Symbol.length)];
 
   while ( length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)]
   }
   passwordBox.value = password;
   document.getElementById('password').innerHTML = password;
 })


 // Copy icon code 
   document.querySelector('.image').addEventListener('click', ()=>{
      passwordBox.select();
      document.execCommand("copy");
   })
   