(() => chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
console.log(request)
  console.log(sender, "sender")
  console.log('Message from content script.js')
}))();
