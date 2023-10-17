// Funktion zum Entfernen des <tp-yt-paper-dialog> Elements
function removeTpYtPaperDialog() {
    const tpYtPaperDialog = document.querySelector('tp-yt-paper-dialog');
    if (tpYtPaperDialog) {
      tpYtPaperDialog.remove();
    }
}

// Überprüfen, ob die Erweiterung aktiviert ist
chrome.storage.local.get("extensionStatus", (result) => {
    if (result.extensionStatus) {
        // Erweiterung ist aktiviert, entfernen Sie das Element
        removeTpYtPaperDialog();
    }
});