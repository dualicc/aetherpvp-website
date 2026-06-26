// =========================
// AETHERPVP INTERACTIONS
// =========================

// Copy IP button
const copyBtn = document.getElementById("copyIP");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {
        const ip = "play.aetherpvp.net";

        navigator.clipboard.writeText(ip).then(() => {
            copyBtn.innerText = "Copied!";

            setTimeout(() => {
                copyBtn.innerText = ip;
            }, 1500);
        });
    });
}

// Simple player counter animation (fake for now)
const playerCount = document.getElementById("playerCount");

if (playerCount) {
    let count = 1200;

    setInterval(() => {
        count += Math.floor(Math.random() * 5 - 2); // small fluctuation
        if (count < 900) count = 900;
        if (count > 2000) count = 2000;

        playerCount.innerText = count.toLocaleString();
    }, 3000);
}

// Smooth scroll for nav (future-proofing)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
