document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    body.addEventListener('mouseenter', () => {
        body.classList.add('hover-effect');
    });

    body.addEventListener('mouseleave', () => {
        body.classList.remove('hover-effect');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentSection = document.querySelector('.content1');

    function checkScroll() {
        const rect = contentSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            contentSection.classList.add('fade-in');
            contentSection.classList.remove('fade-out');
        } 

        else {
            contentSection.classList.add('fade-out');
            contentSection.classList.remove('fade-in');
        }
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const headings = document.querySelectorAll('.section h1');

    function checkScroll() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                const h1Tags = section.querySelectorAll('h1');
                h1Tags.forEach((h1, i) => {
                    if (i % 2 === 0) {
                        h1.classList.add('slide-in-left');
                    } else {
                        h1.classList.add('slide-in-right');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();
});


document.addEventListener('DOMContentLoaded', () => {
    const contentItems = document.querySelectorAll('.content');

    function checkScroll() {
        contentItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                const image = item.querySelector('img');
                const text = item.querySelector('.work-text');

                if (image.classList.contains('left-image')) {
                    image.classList.add('slide-in-left');
                    text.classList.add('slide-in-left');
                } else if (image.classList.contains('right-image')) {
                    image.classList.add('slide-in-right');
                    text.classList.add('slide-in-right');
                }
                item.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-buttons .btn');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink(); 
    window.addEventListener('scroll', changeActiveLink);
});

document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('#contact');
    const contactButtons = document.querySelector('.contact-buttons');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactButtons.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(contactSection);
});