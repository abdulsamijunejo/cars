// ======= Tab Switching for Specs =======
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active classes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.style.opacity = 0;
    });

    // Activate clicked tab and fade in content
    button.classList.add('active');
    const target = document.getElementById(button.dataset.tab);
    target.classList.add('active');

    // Fade in smoothly
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
      } else {
        opacity += 0.05;
        target.style.opacity = opacity;
      }
    }, 20);
  });
});


// ======= Testimonials Carousel =======
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    t.style.opacity = 0;
    if (i === index) {
      t.classList.add('active');
      // Smooth fade in
      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(fadeIn);
        } else {
          opacity += 0.05;
          t.style.opacity = opacity;
        }
      }, 25);
    }
  });
}

showTestimonial(currentTestimonial);

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 6000);


// ======= Scroll Animation with Intersection Observer =======
const animatedElements = document.querySelectorAll('.slide-in, .fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.15
});

animatedElements.forEach(el => observer.observe(el));


// ======= Form Submission Handler =======
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for reaching out to AutoXtreme! We'll get back to you soon.");
  form.reset();
});
