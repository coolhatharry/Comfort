'use strict';

function webFilterOn() {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.browserAction.setBadgeBackgroundColor({color: '#5a5a5a'});
    console.log('on');

    chrome.tabs.executeScript({
        file: 'content.js'
    });
    // window.close();
}

function webFilterOff() {
    console.log('off');

    chrome.browserAction.setBadgeText({text: ''});
    // window.close();
}

document.getElementById('webFilterOn').addEventListener('click', webFilterOn);
document.getElementById('webFilterOff').addEventListener('click', webFilterOff);

