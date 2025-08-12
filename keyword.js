const updatedCells = new Set();

const iconMap = {
    youtube: "images/youtube.png",
    instagram: "images/instagram.png",
    twitter: "images/x.jpg",
    x: "images/x.jpg",
    tiktok: "images/TikTok.png",
    diamond: "images/Diamond.png",
    fortnite: "images/Fortnite.png",
    genshin: "images/genshin.png",
    minecraft: "images/minecraft.svg",
    roblox: "images/Roblox.png",
    blender: "images/blender.png",
    discord: "images/discord.jpeg",
    spotify: "images/spotify.svg",
    threads: "images/threads.png",
    reddit: "images/reddit.png",
    bluesky: "images/bluesky.png",
    soundcloud: "images/soundcloud.png",
    twitch: "images/twitch.png",
    facebook: "images/facebook.png",
};

function processMatches(root) {
    root.querySelectorAll("td, th, .item span").forEach(el => {
        if (updatedCells.has(el)) return;

        const text = el.innerText.trim();
        const lowerText = text.toLowerCase();

        for (const [keyword, imgSrc] of Object.entries(iconMap)) {
            if (lowerText === keyword || lowerText.startsWith(keyword)) {
                el.innerHTML = `<img width="20px" src="${imgSrc}" class="icon" alt="">${text}`;
                updatedCells.add(el);
                break; // no need to check further keywords
            }
        }
    });
}

// Initial run
processMatches(document);

// Watch for DOM changes
const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) processMatches(node);
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });