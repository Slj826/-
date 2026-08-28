(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intro") !== "1") return;

    const body = document.body;
    const name = body.dataset.introName;
    const theme = body.dataset.introTheme;
    if (!name || !theme) return;

    const themes = {
        pinkmist: { motif: "✦", line: "" },
        tide: { motif: "◌", line: "潮汐会把命运送回岸边。" },
        fire: { motif: "✹", line: "从火焰里走出来的人，不会再害怕黑夜。" },
        sky: { motif: "✧", line: "星光落在她的眼睛里。" },
        moon: { motif: "☾", line: "月亮记得所有尚未说出口的预言。" },
        wind: { motif: "❋", line: "铃声与风，会带她去更远的地方。" },
        ink: { motif: "〰", line: "一折扇，一段唱词，一场未散的戏。" },
        thread: { motif: "✦", line: "旧舞台的丝线，仍牵着她的名字。" },
        rabbit: { motif: "△", line: "她听见风里很轻很轻的心事。" },
        butterfly: { motif: "🦋", line: "故事翻页时，蓝蝶正落在字里行间。" },
        prism: { motif: "✦", line: "她带着彩色的尾光，去赚很多很多钱。" }
    };

    const data = themes[theme];
    if (!data) return;

    const screen = document.createElement("div");
    screen.className = `character-intro intro--${theme}`;
    screen.innerHTML = `
        <div class="intro-haze"></div>
        <div class="intro-motifs" aria-hidden="true">${Array.from({ length: 16 }, () => `<span>${data.motif}</span>`).join("")}</div>
        <div class="intro-copy"><div class="intro-name">${name}</div></div>`;

    body.classList.add("intro-lock");
    body.prepend(screen);
    window.addEventListener("load", () => {
        window.setTimeout(() => {
            screen.classList.add("intro-leave");
            window.setTimeout(() => {
                screen.remove();
                body.classList.remove("intro-lock");
            }, 850);
        }, 2600);
    }, { once: true });
})();
