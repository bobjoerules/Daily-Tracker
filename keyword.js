const youtubeWord = "YouTube";
const instagramWord = "Instagram";
const updatedCells = new Set();

function processMatches(root) {
    root.querySelectorAll("td, th, .item span").forEach(el => {
        if (updatedCells.has(el)) return;
        const text = el.innerText.trim();
        if (text.toLowerCase() === youtubeWord.toLowerCase() || text.toLowerCase().startsWith(youtubeWord.toLowerCase())) {
            el.innerHTML = `<img width="20px" src="images/youtube.png" class="icon" alt="">${text}`;
            updatedCells.add(el);
        }
        if (text.toLowerCase() === instagramWord.toLowerCase() || text.toLowerCase().startsWith(instagramWord.toLowerCase())) {
            el.innerHTML = `<img width="20px" src="images/instagram.png" class="icon" alt="">${text}`;
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