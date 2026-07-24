document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar Effect

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            navbar.classList.add('scrolled');

        } else {

            navbar.classList.remove('scrolled');

        }

    });

    // 2. Active Navigation Highlighting on Scroll

    const sections = document.querySelectorAll('section, header');

    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 200)) {

                current = section.getAttribute('id');

            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (link.getAttribute('href') === `#${current}`) {

                link.classList.add('active');

            }

        });

    });

    // 3. Animated Statistics Counters

    const counters = document.querySelectorAll('.counter');

    let speed = 200;

    let animated = false;

    function runCounters() {

        counters.forEach(counter => {

            const target = +counter.getAttribute('data-target');

            let count = 0;

            

            const updateCount = () => {

                const inc = target / speed;

                if (count < target) {

                    count = Math.ceil(count + inc);

                    counter.innerText = count;

                    setTimeout(updateCount, 25);

                } else {

                    counter.innerText = target;

                }

            };

            updateCount();

        });

    }

    window.addEventListener('scroll', () => {

        const statsSection = document.querySelector('.stats-section');

        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;

        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !animated) {

            runCounters();

            animated = true;

        }

    });

    // 4. Mobile Menu Toggle (Basic functionality)

    const hamburger = document.getElementById('hamburger');

    const navMenu = document.querySelector('.nav-links');

    if (hamburger) {

        hamburger.addEventListener('click', () => {

            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';

            if (navMenu.style.display === 'flex') {

                navMenu.style.flexDirection = 'column';

                navMenu.style.position = 'absolute';

                navMenu.style.top = '100%';

                navMenu.style.left = '0';

                navMenu.style.width = '100%';

                navMenu.style.background = 'rgba(10,10,10,0.95)';

                navMenu.style.padding = '2rem';

                navMenu.style.textAlign = 'center';

            }

        });

    }

});