//background of the pages or website, it has no dom
//Object.assign(
//
// on installing chrom eextension
//
//

// chrome.runtime.onInstalled.addListener((e)=>{
//   chrome.tabs.create({ url: "./core/onInstall.html" });
// });

console.log("Hellow world from background.js");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { greeting: "Hello from background.js" },
    (response) => {
      console.log("background.js");
      console.log(response, "response from content script.js");
    },
  );
});
