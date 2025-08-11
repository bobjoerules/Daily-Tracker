const updatedCells = new Set();

function processMatches(root) {
    root.querySelectorAll("td, th, .item span").forEach(el => {
        if (updatedCells.has(el)) return;
        const text = el.innerText.trim();
        if (text.toLowerCase() === "youtube" || text.toLowerCase().startsWith("youtube")) {
            el.innerHTML = `<img width="20px" src="images/youtube.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "instagram".toLowerCase() || text.toLowerCase().startsWith("instagram")) {
            el.innerHTML = `<img width="20px" src="images/instagram.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "twitter" || text.toLowerCase().startsWith("twitter") || text.toLowerCase() === "x" || text.toLowerCase().startsWith("x")) {
            el.innerHTML = `<img width="20px" src="images/x.jpg" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "tiktok".toLowerCase() || text.toLowerCase().startsWith("tiktok")) {
            el.innerHTML = `<img width="20px" src="images/TikTok.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "diamond".toLowerCase() || text.toLowerCase().startsWith("diamond")) {
            el.innerHTML = `<img width="20px" src="images/Diamond.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "fortnite".toLowerCase() || text.toLowerCase().startsWith("fortnite")) {
            el.innerHTML = `<img width="20px" src="images/Fortnite.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "genshin".toLowerCase() || text.toLowerCase().startsWith("genshin")) {
            el.innerHTML = `<img width="20px" src="images/genshin.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "minecraft".toLowerCase() || text.toLowerCase().startsWith("minecraft")) {
            el.innerHTML = `<img width="20px" src="images/minecraft.svg" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === "roblox".toLowerCase() || text.toLowerCase().startsWith("roblox")) {
            el.innerHTML = `<img width="20px" src="images/Roblox.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
    });
}

// Initial run
processMatches(document);

// Watch for DOM changes
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // element
                processMatches(node);
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });