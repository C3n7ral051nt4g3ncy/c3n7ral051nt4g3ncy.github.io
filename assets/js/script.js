function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/* =========================
   OSINT Radar Widget Script
   ========================= */
(function initOsintRadar() {
    const container = document.getElementById("radarBlips");
    if (!container) return;

    const size = 260; // must match CSS radar size
    const radius = size / 2;

    function randomPointInCircle() {
        const t = 2 * Math.PI * Math.random();
        const u = Math.random() + Math.random();
        const r = (u > 1 ? 2 - u : u) * (radius * 0.86);
        return {
            x: radius + r * Math.cos(t),
            y: radius + r * Math.sin(t)
        };
    }

    function spawnBlip() {
        const p = randomPointInCircle();
        const blip = document.createElement("div");
        blip.className = "radar-blip";
        blip.style.left = `${p.x}px`;
        blip.style.top = `${p.y}px`;
        blip.style.animationDelay = `${Math.random() * 1.2}s`;
        blip.style.width = blip.style.height = `${4 + Math.random() * 5}px`;

        container.appendChild(blip);

        setTimeout(() => blip.remove(), 6500);
    }

    for (let i = 0; i < 6; i++) spawnBlip();

    setInterval(() => {
        const count = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) spawnBlip();
    }, 900);
})();