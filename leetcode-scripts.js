const leetcode = () => {
  function clearPremiumQuestions() {
    const premiumQuestions = document.querySelectorAll(".text-brand-orange");
    // console.log(premiumQuestions, "premiumQuestions");
    premiumQuestions.forEach((question) => {
    question.parentNode.parentNode.style.display = 'none';
    });
  }

  clearPremiumQuestions();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { greeting: "Hello from content script.js" },
      (response) => {
        console.log(response, "response from content script.js");
      },
    );
  });
};

if(document.readyState !== 'loading'){
    const website = window.location.host;
    if(website === "leetcode.com"){
        leetcode();
    }
}else{
  document.addEventListener('load',leetcode)
}
console.log("from leetcode-scripts.js");
console.log(document.readyState, "document.readyState");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, "request");
  console.log(sender, "sender");
  sendResponse("Message from leetcode-scripts.js");
});
