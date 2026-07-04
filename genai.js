const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out Astra, my generative AI assistant 🤖\n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`);
    } else if (classList.contains("linkedin")) {
        window.open(`https://www.linkedin.com/share?text=${encodeURIComponent(content)}`);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

for (let i = 0; i < socialIconButtons.length; i++) {
    socialIconButtons[i].addEventListener("click", () =>
        postToSocialMedia(socialIconButtons[i].classList)
    );
}

// --- Rotating "fortune --dev" typewriter quotes ---
const devQuotes = [
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Code is like humor. When you explain it, it's bad. — Cory House",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Make it work, make it right, make it fast. — Kent Beck",
    "The best error message is the one that never shows up. — Thomas Fuchs"
];

const quoteEl = document.getElementById("devQuote");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (quoteEl) {
    if (prefersReducedMotion) {
        quoteEl.textContent = devQuotes[0];
    } else {
        let qIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeLoop() {
            const current = devQuotes[qIndex];
            if (!deleting) {
                charIndex++;
                quoteEl.textContent = current.slice(0, charIndex);
                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(typeLoop, 1800);
                    return;
                }
            } else {
                charIndex--;
                quoteEl.textContent = current.slice(0, charIndex);
                if (charIndex === 0) {
                    deleting = false;
                    qIndex = (qIndex + 1) % devQuotes.length;
                }
            }
            setTimeout(typeLoop, deleting ? 30 : 45);
        }

        typeLoop();
    }
}