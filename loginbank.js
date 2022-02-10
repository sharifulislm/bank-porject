document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
//    get userPassword 
  const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;  
       
  if(userEmail == 'sontan@abbu.com' && userPassword == 'secret' ){ 
  window.location.href = 'babarbank.html';
}
});

