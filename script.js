// Porchella Concert | Live song search
(() => {
  "use strict";

  const searchBox = document.getElementById("songSearch");
  const cards = Array.from(document.querySelectorAll(".song-card"));
  const resultCount = document.getElementById("resultCount");
  const noResults = document.getElementById("noResults");

  if (!searchBox || cards.length === 0) return;

  const entryWord = count => count === 1 ? "entry" : "entries";

  function filterSongs() {
    const query = searchBox.value.trim().toLocaleLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const searchableText = `${card.textContent} ${card.dataset.search || ""}`
        .toLocaleLowerCase();
      const isMatch = searchableText.includes(query);
      card.hidden = !isMatch;
      if (isMatch) visible += 1;
    });

    if (resultCount) {
      resultCount.textContent = query
        ? `Showing ${visible} matching ${entryWord(visible)}`
        : `Showing all ${cards.length} program entries`;
    }

    if (noResults) noResults.hidden = visible !== 0;
  }

  searchBox.addEventListener("input", filterSongs);
  searchBox.addEventListener("search", filterSongs);
  filterSongs();
})();
