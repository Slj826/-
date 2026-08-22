function startStory(scenes, endingText = "——本章結束——") {
    let current = 0;
    let typingTimer = null;

    const player = document.getElementById("storyPlayer");
    const speaker = document.getElementById("speaker");
    const dialog = document.getElementById("dialogText");
    const background = document.getElementById("storyBg");
    const left = document.getElementById("charLeft");
    const right = document.getElementById("charRight");
    const typeSound = document.getElementById("typeSound");
    const bgm = document.getElementById("bgm");

    function loadScene() {
        const scene = scenes[current];
        speaker.innerText = scene.speaker === "旁白" ? "" : scene.speaker;
        background.style.backgroundImage = `url(${scene.bg || "王城.png"})`;

        if (left) {
            if (scene.left) { left.src = scene.left; left.classList.add("show"); }
            else { left.classList.remove("show"); }
        }
        if (right) {
            if (scene.right) { right.src = scene.right; right.classList.add("show"); }
            else { right.classList.remove("show"); }
        }
    }

    function typeText() {
        const text = scenes[current].text;
        let index = 0;
        dialog.innerText = "";
        clearInterval(typingTimer);
        typingTimer = setInterval(() => {
            dialog.innerText += text[index] || "";
            index += 1;
            if (typeSound) { typeSound.currentTime = 0; typeSound.play().catch(() => {}); }
            if (index >= text.length) clearInterval(typingTimer);
        }, 28);
    }

    function advance() {
        if (dialog.innerText !== scenes[current].text) {
            clearInterval(typingTimer);
            dialog.innerText = scenes[current].text;
            return;
        }
        current += 1;
        if (current >= scenes.length) {
            speaker.innerText = "";
            dialog.innerText = endingText;
            const fade = document.getElementById("fadeOut");
            if (fade) fade.style.opacity = "1";
            setTimeout(() => { window.location.href = "A-剧.html"; }, 1200);
            return;
        }
        loadScene();
        typeText();
    }

    window.addEventListener("load", () => { loadScene(); typeText(); }, { once: true });
    player.addEventListener("click", () => {
        if (bgm && bgm.paused) bgm.play().catch(() => {});
        advance();
    });
}
