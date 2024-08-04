// It is a missing part of any website it works in isolation
// it cannot access apis
// content script communicates with background js

(() =>
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender, "sender");
    console.log(window.location.href, "location");

    console.log("sendReponse", sendResponse);
    console.log("Message from content script.js");
  }))();
