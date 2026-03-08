// Simple confetti generator on page load
(function createConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;

  const colors = ["#FF8BCB", "#FFD6E0", "#E8D5F5", "#C7F2E8", "#FFF3C4", "#FFE4CC"];

  const pieces = 70; // adjust density here

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("span");
    piece.classList.add("confetti-piece");

    const size = Math.random() * 6 + 6;
    piece.style.width = size + "px";
    piece.style.height = size * 1.6 + "px";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = Math.random() * -30 + "vh";

    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.background = color;

    const duration = Math.random() * 2 + 3.5; // 3.5–5.5s
    piece.style.animationDuration = duration + "s";

    const delay = Math.random() * 0.8;
    piece.style.animationDelay = delay + "s";

    const rotate = Math.random() * 360;
    piece.style.transform = `rotate(${rotate}deg)`;

    container.appendChild(piece);

    // Clean up after animation
    setTimeout(() => {
      if (piece.parentNode) {
        piece.parentNode.removeChild(piece);
      }
    }, (duration + delay) * 1000);
  }
})();