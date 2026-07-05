// ==========================================================================
// Dr. Abdullah Dental Clinic - Bilingual & Interactive Engine (JS)
// ==========================================================================

// 1. Dictionary of Translations (English & Arabic)
const translations = {
    en: {
        // Meta tags & Document
        meta_title: "Dr. Abdullah Dental Clinic | Premium Dentistry Riyadh",
        meta_desc: "Experience premium dental care in Riyadh with Dr. Abdullah Sham. Modern cosmetic dentistry, Hollywood smile veneers, Invisalign, pain-free implants, and family dental care. Book now.",
        
        // Navigation & Branding
        logo_text: "Dr. Abdullah Clinic",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Doctor",
        nav_testimonials: "Reviews",
        nav_contact: "Contact Us",
        nav_book_btn: "Book Now",
        
        // Hero Section
        hero_badge: "Riyadh's Premier Dental Clinic",
        hero_title_1: "Beautiful, Healthy Smiles",
        hero_title_2: "Crafted with Precision",
        hero_desc: "Dr. Abdullah Sham offers state-of-the-art cosmetic dentistry, pain-free implants, and comprehensive family dental treatments in a luxurious clinic environment.",
        hero_cta_book: "Book Appointment",
        hero_cta_services: "Our Services",
        
        // Stats
        stat_exp: "Years Experience",
        stat_smiles: "Happy Smiles",
        stat_tech: "Google Rating",
        stat_loc_val: "Riyadh",
        stat_loc: "Sulaimaniyah District",
        
        // Services Section
        services_subtitle: "Our Treatments",
        services_title: "Exceptional Dental Care Tailored to You",
        service_1_title: "Cosmetic Veneers",
        service_1_desc: "Achieve a perfect Hollywood Smile with top-quality, custom porcelain veneers and teeth whitening treatments.",
        service_2_title: "Dental Implants",
        service_2_desc: "Replace missing teeth permanently with durable, German-engineered titanium implants that look and feel natural.",
        service_3_title: "Orthodontics",
        service_3_desc: "Straighten teeth comfortably using modern Invisalign clear aligners or traditional cosmetic braces.",
        service_4_title: "Root Canal Therapy",
        service_4_desc: "Save damaged teeth and relieve pain instantly with gentle, pain-free advanced root canal procedures.",
        service_5_title: "Oral & Maxillofacial",
        service_5_desc: "Specialized tooth extractions, wisdom teeth extraction, and bone grafting procedures by experts.",
        service_6_title: "Pediatric Care",
        service_6_desc: "A friendly, caring, and fear-free environment for kids to maintain bright, healthy smiles.",
        service_book_link: "Book Consultation",
        
        // About Section
        about_subtitle: "Meet Your Dentist",
        about_title: "Dr. Abdullah Sham",
        about_specialty: "Senior Dental Consultant & Implantologist",
        about_desc_1: "Dr. Abdullah Sham is a highly respected dental practitioner in Riyadh, specializing in advanced cosmetic treatments and implantology. With over 15 years of clinical practice, he provides unparalleled dental care utilizing state-of-the-art diagnostic and medical technologies.",
        about_desc_2: "He is dedicated to delivering stress-free, pain-free, and custom-designed treatment options. Whether doing a full smile makeover or complex implant restorations, his focus is always on visual excellence and client comfort.",
        about_badge_text: "Years of Trust",
        about_stat_1: "Patient Satisfaction",
        about_stat_2: "Years in Practice",
        
        // Gallery
        gallery_subtitle: "Smile Gallery",
        gallery_title: "Real Transformations, Real Confidence",
        gallery_badge_cosmetic: "Cosmetic Veneers",
        gallery_badge_implant: "Dental Implant",
        before: "Before",
        after: "After",
        gallery_case_1_title: "Full Smile Makeover",
        gallery_case_1_desc: "Complete smile transformation correcting gaps, micro-cracks, and deep stains using premium E-Max porcelain veneers.",
        gallery_case_2_title: "Full Arch Implant",
        gallery_case_2_desc: "Restoration of full eating function and teeth alignment using advanced pain-free titanium dental implants.",
        
        // Testimonials
        reviews_subtitle: "Patient Success Stories",
        reviews_title: "What Our Patients Say",
        review_1_text: "\"The most professional dental care in Riyadh. Dr. Abdullah is very professional and detail-oriented. The clinic is clean and modern.\"",
        review_1_name: "Ahmed Al-Shammari",
        review_2_text: "\"I had a dental implant procedure with Dr. Abdullah. Absolutely painless and very natural results. Recommended!\"",
        review_2_name: "Sara Al-Qahtani",
        review_3_text: "\"Excellent cosmetic dental treatment! Dr. Abdullah is a true expert. The Hollywood Smile veneers turned out amazing.\"",
        review_3_name: "Yousef Al-Harbi",
        
        // Installments
        installments_title: "Installments at Cash Price",
        
        // Insurance
        insurance_subtitle: "Insurance Partners",
        insurance_title: "Approved Insurance Companies",
        
        // Booking & Info
        info_title: "Clinic Details",
        info_address_lbl: "Address",
        info_address_txt: "Sulaiman Ibn Ali Ash Shaikh, Prince Abdulaziz Ibn Musaid Ibn Jalawi St, Riyadh 11211, Saudi Arabia",
        info_hours_lbl: "Working Hours",
        info_hours_txt: "Saturday - Thursday: 9:00 AM - 9:00 PM",
        info_phone_lbl: "Phone & WhatsApp",
        view_map_btn: "Open in Google Maps",
        booking_title: "Start Your Smile Journey",
        form_name_lbl: "Full Name",
        form_phone_lbl: "Phone Number",
        form_service_lbl: "Service Required",
        select_service: "Select Service",
        booking_date_lbl: "Preferred Date",
        booking_time_lbl: "Preferred Time",
        booking_submit: "Book via WhatsApp",
        wa_tooltip: "Book Consultation",
        footer_subtitle: "Providing top-quality dental care in Riyadh with the latest technology and a stress-free environment.",
        footer_rights: "All Rights Reserved."
    },
    ar: {
        // Meta tags & Document
        meta_title: "عيادة أسنان الدكتور عبدالله شام | طبيب أسنان متميز بالرياض",
        meta_desc: "احصل على رعاية أسنان استثنائية في الرياض مع الدكتور عبدالله شام. تجميل أسنان، عدسات فينير، تقويم شفاف، زراعة أسنان بدون ألم ورعاية عائلية. احجز الآن.",
        
        // Navigation & Branding
        logo_text: "عيادة د. عبدالله",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_about: "طبيبنا",
        nav_testimonials: "الآراء",
        nav_contact: "اتصل بنا",
        nav_book_btn: "احجز الآن",
        
        // Hero Section
        hero_badge: "عيادة الأسنان الرائدة بالرياض",
        hero_title_1: "ابتسامات جميلة وصحية",
        hero_title_2: "مصممة بدقة متناهية",
        hero_desc: "يقدم الدكتور عبدالله شام أحدث تقنيات تجميل الأسنان، زراعة الأسنان بدون ألم، وعلاجات الأسنان الشاملة للعائلة في بيئة عيادة فاخرة.",
        hero_cta_book: "احجز موعداً",
        hero_cta_services: "خدماتنا",
        
        // Stats
        stat_exp: "عاماً من الخبرة",
        stat_smiles: "ابتسامة سعيدة",
        stat_tech: "تقييم جوجل",
        stat_loc_val: "الرياض",
        stat_loc: "حي السليمانية",
        
        // Services Section
        services_subtitle: "علاجاتنا المتميزة",
        services_title: "رعاية أسنان استثنائية مخصصة لك",
        service_1_title: "عدسات الفينير",
        service_1_desc: "احصل على ابتسامة هوليودية مثالية مع عدسات البورسلين المخصصة وتبييض الأسنان الاحترافي.",
        service_2_title: "زراعة الأسنان",
        service_2_desc: "استبدل الأسنان المفقودة بشكل دائم بزرعات تيتانيوم ألمانية متينة تبدو وتتحرك بشكل طبيعي.",
        service_3_title: "تقويم الأسنان",
        service_3_desc: "قم بمحاذاة أسنانك براحة تامة باستخدام تقويم إنفيسلاين الشفاف أو التقويم المعدني التجميلي.",
        service_4_title: "علاج وقنوات العصب",
        service_4_desc: "أنقذ أسنانك التالفة وتخلص من الألم فوراً بإجراءات علاج العصب اللطيفة والخالية من الألم تماماً.",
        service_5_title: "جراحة الفم والفكين",
        service_5_desc: "عمليات خلع الأسنان المتخصصة، خلع ضروس العقل المطمورة، وإجراءات زراعة العظام بأيدي خبراء.",
        service_6_title: "طب أسنان الأطفال",
        service_6_desc: "بيئة ودودة، حنونة وخالية من الخوف للأطفال للحفاظ على ابتساماتهم مشرقة وصحية.",
        service_book_link: "احجز استشارة",
        
        // About Section
        about_subtitle: "تعرف على طبيبك",
        about_title: "الدكتور عبدالله شام",
        about_specialty: "استشاري أول طب وزراعة الأسنان",
        about_desc_1: "الدكتور عبدالله شام هو طبيب أسنان مرموق في الرياض، متخصص في العلاجات التجميلية وزراعة الأسنان المتقدمة. مع أكثر من 15 عاماً من الخبرة العيادية، يقدم رعاية أسنان لا مثيل لها باستخدام أحدث تقنيات التشخيص والعلاج الطبي.",
        about_desc_2: "يكرس جهوده لتقديم خيارات علاجية مريحة، بدون ألم، ومصممة خصيصاً لكل مريض. وسواء كان يقوم بتجميل كامل للابتسامة أو تركيبات زراعة معقدة، فإن تركيزه ينصب دائماً على التميز الجمالي وراحة المراجع.",
        about_badge_text: "سنوات من الثقة",
        about_stat_1: "نسبة رضا المرضى",
        about_stat_2: "سنة من العطاء العيادي",
        
        // Gallery
        gallery_subtitle: "معرض الابتسامات",
        gallery_title: "تحولات حقيقية، ثقة حقيقية",
        gallery_badge_cosmetic: "فينير تجميلي",
        gallery_badge_implant: "زراعة الأسنان",
        before: "قبل",
        after: "بعد",
        gallery_case_1_title: "تجميل الابتسامة بالكامل",
        gallery_case_1_desc: "تحول كامل للابتسامة لعلاج الفراغات، الشروخ الدقيقة، والتصبغات العميقة بعدسات البورسلين الفاخرة E-Max.",
        gallery_case_2_title: "زراعة كامل الفك",
        gallery_case_2_desc: "استعادة كامل وظيفة الأكل ومحاذاة الأسنان باستخدام زراعات الأسنان المتطورة من التيتانيوم وبدون ألم.",
        
        // Testimonials
        reviews_subtitle: "قصص نجاح مراجعيننا",
        reviews_title: "ماذا يقول مرضانا",
        review_1_text: "\"أفضل رعاية أسنان احترافية في الرياض. الدكتور عبدالله متمكن للغاية ويهتم بأدق التفاصيل. العيادة نظيفة للغاية وحديثة.\"",
        review_1_name: "أحمد الشمري",
        review_2_text: "\"خضعت لعملية زراعة أسنان مع الدكتور عبدالله. إجراء غير مؤلم على الإطلاق ونتائج طبيعية جداً. أنصح به بشدة!\"",
        review_2_name: "سارة القحطاني",
        review_3_text: "\"علاج تجميلي رائع للأسنان! الدكتور عبدالله خبير حقيقي. فينير ابتسامة هوليود ظهر بشكل مذهل وطبيعي.\"",
        review_3_name: "يوسف الحربي",
        
        // Installments
        installments_title: "تقسيط بسعر الكاش",
        
        // Insurance
        insurance_subtitle: "شركاء التأمين",
        insurance_title: "شركات التأمين المعتمدة",
        
        // Booking & Info
        info_title: "تفاصيل العيادة",
        info_address_lbl: "العنوان",
        info_address_txt: "شارع الأمير عبد العزيز بن مساعد بن جلوي، سليمان بن علي الشيخ، السليمانية، الرياض 11211، المملكة العربية السعودية",
        info_hours_lbl: "أوقات العمل الرسمي",
        info_hours_txt: "السبت - الخميس: 9:00 صباحاً - 9:00 مساءً",
        info_phone_lbl: "الهاتف والواتساب",
        view_map_btn: "افتح في خرائط جوجل",
        booking_title: "ابدأ رحلتك لابتسامة مثالية",
        form_name_lbl: "الاسم الكامل",
        form_phone_lbl: "رقم الجوال",
        form_service_lbl: "الخدمة المطلوبة",
        select_service: "اختر الخدمة",
        booking_date_lbl: "التاريخ المفضل",
        booking_time_lbl: "الوقت المفضل",
        booking_submit: "احجز الموعد عبر الواتساب",
        wa_tooltip: "احجز استشارتك الآن",
        footer_subtitle: "نقدم رعاية أسنان عالية الجودة بالرياض باستخدام أحدث التقنيات الطبية في بيئة مريحة وخالية من التوتر.",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// 2. Global App State Variables
let currentLang = localStorage.getItem('selectedLanguage') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// 3. DOM Elements Cache
const langSwitchBtn = document.getElementById('lang-switch-btn');
const langBtnText = document.getElementById('lang-btn-text');
const themeSwitchBtn = document.getElementById('theme-toggle-btn');
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const bookingForm = document.getElementById('booking-form');

// 4. Initialization on Content Load
document.addEventListener('DOMContentLoaded', () => {
    // Apply Language and Theme preferences
    switchLanguage(currentLang);
    applyTheme(currentTheme);
    
    // Set booking date input min value to today
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
    
    // Initialize Before/After Image Sliders
    initComparisonSlider('slider-1');
    initComparisonSlider('slider-2');
});

// 5. Language Switch Engine
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    const isArabic = (lang === 'ar');
    
    // Toggle Document attributes for RTL alignment
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isArabic);
    
    // Dynamic text replacement for all [data-translate] selectors
    const translateElements = document.querySelectorAll('[data-translate]');
    translateElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Translate SEO titles and Meta description values
    document.title = translations[lang].meta_title;
    const metaTitle = document.getElementById('meta-title');
    const metaDesc = document.getElementById('meta-desc');
    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-desc');
    
    if (metaTitle) metaTitle.textContent = translations[lang].meta_title;
    if (metaDesc) metaDesc.setAttribute('content', translations[lang].meta_desc);
    if (ogTitle) ogTitle.setAttribute('content', translations[lang].meta_title);
    if (ogDesc) ogDesc.setAttribute('content', translations[lang].meta_desc);
    
    // Update switch toggle button text
    if (langBtnText) {
        langBtnText.textContent = isArabic ? 'English' : 'العربية';
    }
    
    // Update Input placeholders for bilingual layout
    const nameInput = document.getElementById('patient-name');
    const phoneInput = document.getElementById('patient-phone');
    const serviceSelect = document.getElementById('dental-service');
    
    if (nameInput) {
        nameInput.placeholder = isArabic ? 'الاسم الكريم' : 'Your Name';
    }
    if (phoneInput) {
        phoneInput.placeholder = isArabic ? 'رقم الهاتف' : 'Your Phone Number';
    }
    if (serviceSelect) {
        serviceSelect.options[0].textContent = translations[lang].select_service;
    }
}

// 6. Theme Switch Engine
function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    const isDark = (theme === 'dark');
    document.body.classList.toggle('dark-mode', isDark);
    
    // Swap icon elements
    const themeIcon = themeSwitchBtn.querySelector('i');
    if (themeIcon) {
        themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Event Listeners for Theme and Language Toggles
if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
        const targetLang = (currentLang === 'en') ? 'ar' : 'en';
        switchLanguage(targetLang);
    });
}

if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
        const targetTheme = (currentTheme === 'light') ? 'dark' : 'light';
        applyTheme(targetTheme);
    });
}

// 7. Sticky Navigation scroll actions
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    highlightActiveLink();
});

// Highlight Active Menu Item during scroll
function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 8. Mobile Menu hamburger drawer logic
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// 9. Intersection Observer Scroll Reveal Engine
const revealConfig = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal animation occurs once
        }
    });
}, revealConfig);

document.querySelectorAll('.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-left, .reveal-right, .reveal-card').forEach(item => {
    revealObserver.observe(item);
});

// 10. Interactive Before/After Split Image Slider
function initComparisonSlider(sliderId) {
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const afterImg = container.querySelector('.after-image');
    const handle = container.querySelector('.slider-handle');
    
    function setPosition(xVal) {
        const bounds = container.getBoundingClientRect();
        let relativeX = (xVal - bounds.left) / bounds.width;
        
        // Boundaries limits
        if (relativeX < 0) relativeX = 0;
        if (relativeX > 1) relativeX = 1;
        
        const percentage = relativeX * 100;
        afterImg.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
        handle.style.left = `${percentage}%`;
    }
    
    function handleMouseMove(e) {
        setPosition(e.clientX);
    }
    
    function handleTouchMove(e) {
        setPosition(e.touches[0].clientX);
    }
    
    function onMouseDown() {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    
    function onMouseUp() {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    
    function onTouchStart() {
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', onTouchEnd);
    }
    
    function onTouchEnd() {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    }
    
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('touchstart', onTouchStart);
    
    // Set default visual separator at 50% split width
    afterImg.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
    handle.style.left = '50%';
}

// 11. WhatsApp Booking Form Submission Redirect
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById('patient-name').value;
        const phoneVal = document.getElementById('patient-phone').value;
        const serviceVal = document.getElementById('dental-service').value;
        const dateVal = document.getElementById('booking-date').value;
        const timeVal = document.getElementById('booking-time').value;
        
        const destinationPhone = "966555940208"; // Dr. Abdullah Sham WhatsApp
        let waMessage = "";
        
        if (currentLang === 'ar') {
            waMessage = `مرحباً دكتور عبدالله شام، أود حجز موعد استشارة لعيادة الأسنان:
- الاسم: ${nameVal}
- الجوال: ${phoneVal}
- الخدمة المطلوبة: ${serviceVal}
- التاريخ المفضل: ${dateVal}
- الوقت المفضل: ${timeVal}`;
        } else {
            waMessage = `Hello Dr. Abdullah Sham, I would like to book a dental consultation appointment:
- Name: ${nameVal}
- Phone: ${phoneVal}
- Service Required: ${serviceVal}
- Preferred Date: ${dateVal}
- Preferred Time: ${timeVal}`;
        }
        
        const encodedUrlText = encodeURIComponent(waMessage);
        const whatsappRedirectionLink = `https://wa.me/${destinationPhone}?text=${encodedUrlText}`;
        
        // Open redirection target in a new window/tab
        window.open(whatsappRedirectionLink, '_blank');
    });
}
