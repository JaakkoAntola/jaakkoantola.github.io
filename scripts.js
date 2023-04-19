document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = event.target.getAttribute('href');
        const target = document.querySelector(targetId);
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
