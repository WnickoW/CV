document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    const primaryAura = document.querySelector('.aura-primary');
    const tertiaryAura = document.querySelector('.aura-tertiary');

    if (primaryAura) primaryAura.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    if (tertiaryAura) tertiaryAura.style.transform = `translate(${-x}px, ${-y}px) scale(1.1)`;
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active state observer
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('text-tertiary', 'border-b-2', 'border-tertiary', 'pb-1');
                link.classList.add('text-on-surface-variant');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-tertiary', 'border-b-2', 'border-tertiary', 'pb-1');
                    link.classList.remove('text-on-surface-variant');
                }
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
});

// Particle Trail Effect
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    document.addEventListener('mousemove', function (e) {
        createParticle(e.clientX, e.clientY);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 4px and 8px
        const size = Math.floor(Math.random() * 5) + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Center the particle on the cursor
        particle.style.left = `${x - size / 2}px`;
        particle.style.top = `${y - size / 2}px`;

        document.body.appendChild(particle);

        // Trigger animation in next frame
        requestAnimationFrame(() => {
            particle.style.transform = `scale(0.1) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
            particle.style.opacity = '0';
        });

        // Remove from DOM after transition
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// ===== Ver Todo / Ocultar Habilidades =====
const btnVerTodo = document.getElementById('btn-ver-todo');
const proyectosExtra = document.querySelectorAll('.proyecto-extra');
let verTodo = false;

btnVerTodo.addEventListener('click', function () {
    verTodo = !verTodo;

    proyectosExtra.forEach(function (proyecto) {
        if (verTodo) {
            proyecto.classList.remove('hidden');
        } else {
            proyecto.classList.add('hidden');
        }
    });
    btnVerTodo.innerHTML = verTodo
           ? 'VER MENOS <span class="material-symbols-outlined">arrow_back</span>'
           : 'VER TODO EL ARCHIVO <span class="material-symbols-outlined">arrow_forward</span>';
});
