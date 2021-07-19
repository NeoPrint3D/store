function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}}
const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';
   const encrypt='01110011 01100101 01110010 01110110 01101001 01100011 01100101 01011111 01111001 01110111 00110100 00110011 00110110 00110001 01101010'
   const serviceID = encrypt.split(' ') //Split string in array of binary chars
    .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
    .join('');
   const templateID = 'template_zv7jmdd';
   if(ValidateEmail(document.getElementById('reply_to'))){
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });}
    else {
      btn.value = 'Send Email';
      console.log('Invalid');
      }
});

