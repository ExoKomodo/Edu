function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function scrollIntoView(elementId) {
  const elem = document.getElementById(elementId);
  if (elem) {
    elem.scrollIntoView();
    window.location.hash = elementId;
  }
}

function updateFavicon(faviconUri) {
    const favicon = document.getElementById('favicon');
    if (!favicon) {
        console.error('Could not find favicon tag.');
        return;
    }
    let href = favicon.getAttributeNode('href');
    if (!href) {
        href = document.createAttribute('href');
        favicon.setAttributeNode(href);
    }
    href.value = faviconUri;
}