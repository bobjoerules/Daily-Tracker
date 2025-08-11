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