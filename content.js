// Funktion zum Entfernen des <tp-yt-paper-dialog> Elements
function removeTpYtPaperDialog() {
    const tpYtPaperDialog = document.querySelector('tp-yt-paper-dialog');
    if (tpYtPaperDialog) {
      tpYtPaperDialog.remove();
    }
  }
  
  // Überprüfen, ob die Erweiterung aktiviert ist
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.storage.local.get([tabId], (result) => {
      if (result[tabId]) {
        // Erweiterung ist aktiviert, entfernen Sie das Element
        removeTpYtPaperDialog();
      }
    });
  });
  