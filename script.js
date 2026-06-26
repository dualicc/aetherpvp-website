// =========================
// AETHERPVP - NETWORK MODE
// =========================

// IP copy system
const copyBtn = document.getElementById("copyIP");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {
        const ip = "play.aetherpvp.net";

        navigator.clipboard.writeText(ip);

        copyBtn.innerText = "Copied to clipboard!";

        setTimeout(() => {
            copyBtn.innerText = ip;
        }, 1400);
    });
}

// Fake-but-realistic player count system
const playerCount = document.getElementById("playerCount");

let base = 1240;

setInterval(() => {
    const change = Math.floor(Math.random() * 9 - 4);
    base += change;

    if (base < 980) base = 980;
    if (base > 1800) base = 1800;

    if (playerCount) {
        playerCount.innerText = base.toLocaleString();
    }
}, 2500);

// Smooth scroll behavior (future-proof nav)
document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

// Scroll reveal animation system
const revealElements = document.querySelectorAll(".feature, .card, .hero-content");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease";
    revealObserver.observe(el);
});
