document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('#content');

  setTimeout(() => {
    content.classList.add('show');
  }, 300);
});
