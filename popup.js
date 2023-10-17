// Funktion, um den Aktivierungsstatus in den Chrome-Speicher zu speichern
function saveStatus() {
    const enableDisableCheckbox = document.getElementById('enableDisable');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.storage.local.set({ [tabId]: enableDisableCheckbox.checked });
    });
  }
  
  // Funktion, um den Aktivierungsstatus aus dem Chrome-Speicher abzurufen
  function loadStatus() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.storage.local.get([tabId], (result) => {
        const enableDisableCheckbox = document.getElementById('enableDisable');
        enableDisableCheckbox.checked = result[tabId] || false;
      });
    });
  }
  
  // Event-Listener für den Aktivieren / Deaktivieren-Schalter
  const enableDisableCheckbox = document.getElementById('enableDisable');
  enableDisableCheckbox.addEventListener('change', saveStatus);
  
  // Event-Listener für die Buy me a Coffee-Schaltfläche
  const buyMeACoffeeButton = document.getElementById('buyMeACoffee');
  buyMeACoffeeButton.addEventListener('click', () => {
    window.open('https://paypal.me/choooomedia/4', '_blank');
  });
  
  // Event-Listener für die Write me a Message-Schaltfläche
  const writeMeAMessageButton = document.getElementById('writeMeAMessage');
  writeMeAMessageButton.addEventListener('click', () => {
    window.open('mailto:EXTENSIONNAME@chooomedia.com');
  });
  
  // Event-Listener für die Stare on GitHub-Schaltfläche
  const stareOnGithubButton = document.getElementById('stareOnGithub');
  stareOnGithubButton.addEventListener('click', () => {
    window.open('LINK_ZUM_REPO_AUF_GITHUB', '_blank');
  });
  
  // Laden des Aktivierungsstatus beim Öffnen des Popup
  loadStatus();
  