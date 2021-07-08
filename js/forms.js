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

   const serviceID = 'service_yw4361j';
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


