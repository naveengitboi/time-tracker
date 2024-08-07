// It is a missing part of any website it works in isolation
// it cannot access apis
// content script communicates with background js

console.log("from content script.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, "request");
  console.log(sender, "sender");
  console.log(this.location.href, "location");
  sendResponse("Message from content script.js");
});
