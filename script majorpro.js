document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    // Code to send email to Google Sheets or your server here
    console.log('Email collected:', email);
    alert('Thank you for subscribing!');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const message = e.target[3].value;
    // Code to send data to Google Sheets or your server here
    console.log('Contact Form submitted:', { name, email, phone, message });
    alert('Your message has been sent!');
});
