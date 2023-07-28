function sendMail() {
    let params = {
        name: document.getElementById('formName').value,
        email: document.getElementById('formEmail').value,
        message: document.getElementById('formText').value
    }

    const serviceID = 'service_27u3rjn';
    const templateID = 'template_f8s9ufc';

    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
        emailSuccess();
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        emailFailure();
        console.log('FAILED...', error);
    });
}