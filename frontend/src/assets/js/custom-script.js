const headerElement = document.getElementById('header');
const mainElement = document.getElementById('main');

window.addEventListener('scroll', () => {
  // headerElement.classList.toggle('sticky', window.scrollY > 0);

  if (window.scrollY > 0) {
    headerElement.classList.add('sticky');
    mainElement.style.paddingTop = headerElement.offsetHeight + 'px';
  } else {
    headerElement.classList.remove('sticky');
    mainElement.style.paddingTop = '0px';
  }
});
