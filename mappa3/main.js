// Az elemek kijelölése a DOM-ból
const colorPicker = document.getElementById('colorPicker');
const pageWrapper = document.getElementById('page-wrapper');

// Eseményfigyelő az input elemre ('input' eseményre azonnal reagál a színválasztás közben)
colorPicker.addEventListener('input', function(event) {
    // Style binding: A kiválasztott szín beállítása a konténer háttérszíneként
    pageWrapper.style.backgroundColor = event.target.value;
});