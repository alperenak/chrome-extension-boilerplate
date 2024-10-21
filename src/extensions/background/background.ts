chrome.tabs.onUpdated.addListener((__, _, tab) => {
  console.log(`Change URL: ${tab.url}`);
});

chrome.bookmarks.getRecent(10, results => {
  console.log(`bookmarks:`, results);
});

console.log(`this is background service worker`);

export {};
