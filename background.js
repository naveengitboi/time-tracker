//background of the pages or website, it has no dom
//Object.assign(
//


console.log("Hellow world from background.js");



chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: "Hello from background.js" }, (response) => {

    console.log("background.js")
    console.log(response, "response from content script.js")

  });
});

