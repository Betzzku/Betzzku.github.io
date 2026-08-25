// Mobile nav toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuBtn.classList.toggle('open', isOpen);
        menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav after clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Shrink nav bar on scroll
    const topnav = document.getElementById('topnav');
    window.addEventListener('scroll', () => {
        topnav.classList.toggle('scrolled', window.scrollY > 10);
    });

    document.getElementById('year').textContent = new Date().getFullYear();