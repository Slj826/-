(() => {
  const profiles = { "伊萊娜":"伊萊娜.html", "云砚":"云砚.html", "雲硯":"云砚.html", "篁":"篁.html", "墨染":"墨染.html" };
  document.querySelectorAll(".relationship-card").forEach((card) => {
    const href = profiles[card.querySelector("summary span")?.textContent.trim()];
    const content = card.querySelector(".relationship-content");
    if (href && content) content.innerHTML = `<a href="${href}" class="white-button">查看檔案</a>`;
  });
  document.querySelectorAll(".character-card h3").forEach((heading) => {
    const href = profiles[heading.textContent.trim()];
    const link = heading.closest("a.character-link");
    if (href && link) link.href = href;
  });
})();
