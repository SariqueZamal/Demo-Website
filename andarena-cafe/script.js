/* ==========================================================================
   Andarena Cafe Client Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon i');
    const menuTabs = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastClose = document.getElementById('toast-close');
    const toastTitle = document.getElementById('toast-title');
    const toastBody = document.getElementById('toast-body');

    /* ==========================================================================
       Sticky Navbar Scroll Effect
       ========================================================================== */
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active section link highlighting
        let currentSectionId = 'home';
        const sections = document.querySelectorAll('section, header, footer');
        const scrollPosition = window.scrollY + 200; // Offset for accuracy
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id') || currentSectionId;
            }
        });
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once initially

    /* ==========================================================================
       Mobile Navigation Sidebar
       ========================================================================== */
    mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        mobileToggle.classList.toggle('open');
        
        // Prevent body scroll when menu is open on mobile
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileToggle.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    /* ==========================================================================
       Theme Toggle Switch (Dark/Light)
       ========================================================================== */
    const savedTheme = localStorage.getItem('andarena-theme') || 'dark';
    
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'fa-solid fa-sun';
            themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fa-solid fa-moon';
            themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
        }
        localStorage.setItem('andarena-theme', theme);
    };
    
    // Set initial theme
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    /* ==========================================================================
       Interactive Menu Tab Filtering
       ========================================================================== */
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active state from all tabs and add to current
            menuTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            // Filter menu items with fade animation
            menuCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                // Hide effect
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'flex';
                        // Trigger reflow to restart transition
                        card.offsetHeight;
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    /* ==========================================================================
       Scroll-Reveal Animations (Intersection Observer & Fallback)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
    
    if ('IntersectionObserver' in window) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Observer not supported: fallback immediately
        revealElements.forEach(el => el.classList.add('active'));
    }
    
    // Safety Fallback Timeout: Force-reveal all elements after 1.5 seconds if they fail to animate
    setTimeout(() => {
        revealElements.forEach(el => {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
        });
    }, 1500);
    
    // Make sure hero section items fade in immediately
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('active');

    /* ==========================================================================
       Contact Form Submission & Toast Alert
       ========================================================================== */
    let toastTimeout;
    
    const showToast = (title, message, isSuccess = true) => {
        clearTimeout(toastTimeout);
        
        toastTitle.innerText = title;
        toastBody.innerText = message;
        
        const iconEl = toast.querySelector('.toast-icon i');
        if (isSuccess) {
            iconEl.className = 'fa-solid fa-circle-check';
            iconEl.style.color = '#10b981';
        } else {
            iconEl.className = 'fa-solid fa-circle-exclamation';
            iconEl.style.color = '#f59e0b';
        }
        
        toast.style.display = 'block';
        // Force reflow
        toast.offsetHeight;
        toast.classList.add('show');
        
        // Auto-close after 5 seconds
        toastTimeout = setTimeout(hideToast, 5000);
    };
    
    const hideToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.style.display = 'none';
        }, 400); // Wait for transition
    };
    
    toastClose.addEventListener('click', hideToast);
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subjectSelect = document.getElementById('form-subject');
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
        const message = document.getElementById('form-message').value.trim();
        
        if (!name || !email || !subjectSelect.value || !message) {
            showToast('Form Error', 'Please fill in all fields before sending.', false);
            return;
        }
        
        // Mock API Call - Submit Loading State
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> Sending...';
        
        // Simulate network latency (1.2s)
        setTimeout(() => {
            showToast(
                'Message Sent!',
                `Thank you, ${name}. We've received your request regarding "${subjectText}" and will reach out to you at ${email} soon.`
            );
            
            // Reset Form & Button
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1200);
    });
});
