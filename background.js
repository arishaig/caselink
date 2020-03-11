// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Open SR %s"
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                           "id": "context" + context});
  });
  
  // add click event
  chrome.contextMenus.onClicked.addListener(onClickHandler);
  
  // The onClicked callback function.
  function onClickHandler(info, tab) {
    var selectedText = info.selectionText.trim();
    if(selectedText.length == 15) {
        var url = "https://servicedesk.microsoft.com/#/customer/cases?caseNumber=" + encodeURIComponent(selectedText);
        window.open(url, '_blank');
    }
     else if(selectedText.length == 9) {
        var url = "https://portal.microsofticm.com/imp/v3/incidents/details/" + encodeURIComponent(selectedText);
        window.open(url, '_blank');
     }
     else if(selectedText.length == 7) {
         var url = "https://dynamicscrm.visualstudio.com/OneCRM/_workitems/edit/" + encodeURIComponent(selectedText);
         window.open(url, '_blank');
     }
     else {
         var url = "https://unify.services.dynamics.com/CRM/Collaborations/GlobalSearch?#search=" + encodeURIComponent(selectedText);
         window.open(url, '_blank');
     }
  };