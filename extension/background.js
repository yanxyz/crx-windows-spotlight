chrome.runtime.onInstalled.addListener(details => {
  const host1 = 'spotlight.it-notes.ru'
  chrome.contextMenus.create({
    id: 'open_site_1',
    title: `Open ${host1}`,
    contexts: ['browser_action']
  })

  chrome.contextMenus.create({
    id: 'google_site_1',
    title: `Google ${host1}`,
    contexts: ['browser_action']
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const { menuItemId } = info
  const host1 = 'spotlight.it-notes.ru'

  if (menuItemId === 'open_site_1') {
    chrome.tabs.create({
      url: `https://${host1}`,
      index: tab.index + 1
    })
    return
  }

  if (menuItemId === 'google_site_1') {
    if (tab.url.startsWith('https://www.google.com/search?tbs=')) {
      chrome.tabs.executeScript({
        code: `document.getElementById('lst-ib').value = '${host1}';
        document.querySelector('button[name="btnG"').click();
        `
      })
    } else {
      chrome.tabs.create({
        url: 'https://www.google.com/search?q=' + encodeURIComponent(`site:${host1}`),
        index: tab.index + 1
      })
    }
    return
  }
})
