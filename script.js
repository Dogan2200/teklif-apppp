function openPopup() {
  document.getElementById('popup').style.display = 'block';
  showTab('teklif');
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}
