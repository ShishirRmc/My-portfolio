// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Change logo on scroll
window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var aboutSection = document.getElementById('about');
    var aboutSectionTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutSectionTop) {
        logo.classList.add('change-logo');
        logo.innerHTML = 'Shishir<span style="color: var(--primary-color);"> Rayamajhi</span>';
    } else {
        logo.classList.remove('change-logo');
        logo.innerHTML = 'Shishir<span>.</span>';
    }
});
// Highlight active navigation link on scroll
window.addEventListener('scroll', function() {
    let current = '';

    document.querySelectorAll('section').forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    document.querySelectorAll('.nav-links li a').forEach( a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === current) {
            a.classList.add('active');
        }
    });
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
e.preventDefault();

// Show loading state
const submitBtn = form.querySelector('button[type="submit"]');
const originalBtnText = submitBtn.innerHTML;
submitBtn.innerHTML = 'Sending...';
submitBtn.disabled = true;

emailjs.sendForm('service_u35mn7n', 'template_0lodkei', form)
    .then(function() {
        alert('Message sent successfully!');
        form.reset();
    })
    .catch(function(error) {
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('Error:', error);
    })
    .finally(function() {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    });
});