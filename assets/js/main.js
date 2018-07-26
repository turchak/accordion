(() => {
  const items = document.querySelectorAll('.accordion');
  items.forEach(item => {
    item.onclick = () => {
      const nextItem = item.nextElementSibling;
      if (nextItem.getAttribute('data-status', 'opened')) {
        nextItem.style.display = 'none';
        nextItem.removeAttribute('data-status', 'opened');
      } else {
        nextItem.style.display = 'block';
        nextItem.setAttribute('data-status', 'opened');
      }
    }
  })
})();