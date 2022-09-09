const headerElement = document.getElementById('header');
// const mainElement = document.getElementById('main');

window.addEventListener('load', () => {
  document.body.style.paddingTop = headerElement.offsetHeight + 'px';
});

window.addEventListener('resize', () => {
  document.body.style.paddingTop = headerElement.offsetHeight + 'px';
});
