document.getElementById('getTitle').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tabTitle = tabs[0].title;
      document.getElementById('title').innerText = tabTitle;
    });
  });
  