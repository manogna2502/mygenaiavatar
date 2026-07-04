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