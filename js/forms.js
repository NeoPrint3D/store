const btn = document.getElementById('button');
console.log('it worked')
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_yw4361j';
   const templateID = 'template_zv7jmdd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



/*form#form
.field
label(for='to_name') to_name
input#to_name(type='text' name='to_name')
.field
label(for='from_name') from_name
input#from_name(type='text' name='from_name')
.field
label(for='message') message
input#message(type='text' name='message')
.field
label(for='reply_to') reply_to
input#reply_to(type='text' name='reply_to')
input#button(type='submit' value='Send Email')
script(type='text/javascript' src='https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js')
script(type='text/javascript').
emailjs.init('user_xLVlme8SmOAtUysXEckZd')
script(src='js/forms.js')*/

