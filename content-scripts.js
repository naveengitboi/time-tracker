// It is a missing part of any website it works in isolation
// it cannot access apis
// content script communicates with background js

console.log("conent script.js");

const leetcode = () => {

  function clearPremiumQuestions(){
    const premiumQuestions = document.querySelectorAll(
      ".text-brand-orange"
    );
    premiumQuestions.forEach((question) => {
        question.parentNode.parentNode.style.display = 'none';
    })
  };

  const location = window.location.href;
  if (location.includes("leetcode")) {
    console.log("leetcode", document);
    clearPremiumQuestions();
  }

  chromet.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: "Hello from content script.js" }, (response) => {
    console.log(response, "response from content script.js");
        });
    });


};

leetcode();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, "request");
  console.log(sender, "sender");
  console.log(this.location.href, "location");
  sendResponse("Message from content script.js");
});
