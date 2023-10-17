function saveStatus() {
    const enableDisableCheckbox = document.getElementById('enableDisable');
    chrome.storage.local.set({"extensionStatus": enableDisableCheckbox.checked});
}

function loadStatus() {
    chrome.storage.local.get("extensionStatus", (result) => {
        const enableDisableCheckbox = document.getElementById('enableDisable');
        enableDisableCheckbox.checked = result.extensionStatus || false;
    });
}

const enableDisableCheckbox = document.getElementById('enableDisable');
enableDisableCheckbox.addEventListener('change', saveStatus);

const buyMeACoffeeButton = document.getElementById('buyMeACoffee');
buyMeACoffeeButton.addEventListener('click', () => {
    window.open('https://paypal.me/choooomedia/4', '_blank');
});

const writeMeAMessageButton = document.getElementById('writeMeAMessage');
writeMeAMessageButton.addEventListener('click', () => {
    window.open('mailto:EXTENSIONNAME@chooomedia.com');
});

const stareOnGithubButton = document.getElementById('stareOnGithub');
stareOnGithubButton.addEventListener('click', () => {
    window.open('LINK_ZUM_REPO_AUF_GITHUB', '_blank');
});

loadStatus();
