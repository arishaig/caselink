// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Open SR or IcM";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                           "id": "context" + context}); 
  });
  
  // add click event
  chrome.contextMenus.onClicked.addListener(onClickHandler);
  
  // The onClicked callback function.
  function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url = "https://servicedesk.microsoft.com/#/customer/cases?caseNumber=" + encodeURIComponent(sText);
    window.open(url, '_blank');
  };