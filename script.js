document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it has animated in
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observeElements = document.querySelectorAll('.observe-me');
    observeElements.forEach(el => observer.observe(el));

    // 2. Form Submission Simulation
    const rsvpForm = document.getElementById('rsvpForm');
    const rsvpSuccess = document.getElementById('rsvpSuccess');
    const submitBtn = rsvpForm.querySelector('button[type="submit"]');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation check (handled mostly by HTML5 'required' attr)
            
            // Simulate network request
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

            setTimeout(() => {
                // Hide form and show success message
                rsvpForm.style.display = 'none';
                rsvpSuccess.classList.remove('hidden');
                
                // Add fade-in animation to success message
                rsvpSuccess.style.opacity = '0';
                rsvpSuccess.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    rsvpSuccess.style.opacity = '1';
                }, 50);
            }, 1200); // 1.2 second simulated delay
        });
    }

});
