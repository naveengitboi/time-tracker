console.log('Hellow world from background.js')

const getTabTitle = (tabId) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs)
  })
}

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log(tabId)
  console.log(tab)
  chrome.tabs.sendMessage(tabId, {
    tabId:tabId,
    title: tab.title,
    message: 'hello'
  })

  
})

