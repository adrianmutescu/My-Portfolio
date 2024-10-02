(function(){
    emailjs.init({
      publicKey: "f-EAAGk8eYV1DzRUq",
    });
 })();

 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_emailme', 'template_emailme', this)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert("Failed to send message.");
            console.log('FAILED...', error);
        });
});