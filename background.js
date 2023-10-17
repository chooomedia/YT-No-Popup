// Vorläufiger Code, da Ihr ursprünglicher Code keinen background.js hatte.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removeElement") {
        // Aktionen für das Entfernen des Elements
        // Da der Service Worker nicht direkt mit dem DOM interagieren kann, müssen Sie diese Aktionen im Content-Skript durchführen und von dort Nachrichten senden.
    }
});
