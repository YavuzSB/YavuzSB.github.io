// Tema Değiştirme
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Scroll Animasyonları
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-bar').forEach(el => {
    observer.observe(el);
});

// Progress Barları
document.querySelectorAll('.skill-progress').forEach(progressBar => {
    const progress = progressBar.getAttribute('data-progress');
    progressBar.style.setProperty('--progress', progress);
});