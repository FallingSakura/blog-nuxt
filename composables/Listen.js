document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.button1');
  const all = content.querySelectorAll('.navbutton');
  const additionalContent = document.createElement('nav-button');
  additionalContent.className = 'add';
  additionalContent.setAttribute('icon', 'angle-left')
  function updateContent() {
    if (window.innerWidth < 1100) {
      content.appendChild(additionalContent);
      all.forEach(btn => {
        content.removeChild(btn);
      })
    }
    else {
      content.removeChild(additionalContent);
      all.forEach(btn => {
        content.appendChild(btn);
      })
    }
  }
  updateContent();
  window.addEventListener('resize', updateContent);
})