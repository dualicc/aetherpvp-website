// Copy IP
const copyBtn = document.getElementById("copyIP");

if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        const ip = "play.aetherpvp.net";

        try {
            await navigator.clipboard.writeText(ip);

            copyBtn.innerText = "Copied!";

            setTimeout(() => {
                copyBtn.innerText = ip;
            }, 1200);

        } catch (err) {
            alert("Could not copy IP. Manual IP: " + ip);
        }
    });
}

// Fake but stable player count
const playerCount = document.getElementById("playerCount");

let players = 842;

setInterval(() => {
    players += Math.floor(Math.random() * 5 - 2);

    if (players < 600) players = 600;
    if (players > 1400) players = 1400;

    if (playerCount) {
        playerCount.innerText = players;
    }
}, 2500);

// Simple server status simulation
const statusText = document.getElementById("statusText");
const serverStatus = document.getElementById("serverStatus");

function updateStatus() {
    const online = Math.random() > 0.2;

    if (online) {
        statusText.innerText = "ONLINE";
        serverStatus.innerText = "Online";
        statusText.style.color = "#6DFF8A";
    } else {
        statusText.innerText = "OFFLINE";
        serverStatus.innerText = "Offline";
        statusText.style.color = "#FF6D6D";
    }
}

updateStatus();
setInterval(updateStatus, 8000);

// Play button
document.querySelector(".big-play")?.addEventListener("click", () => {
    alert("Server IP: play.aetherpvp.net");
});
