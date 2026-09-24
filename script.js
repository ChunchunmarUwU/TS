const ageGate = document.querySelector('#ageGate');
const enterSite = document.querySelector('#enterSite');
const year = document.querySelector('#year');

if (sessionStorage.getItem('archive-access') === 'granted') {
  ageGate.remove();
}

enterSite.addEventListener('click', () => {
  sessionStorage.setItem('archive-access', 'granted');
  ageGate.classList.add('is-hidden');
  setTimeout(() => ageGate.remove(), 250);
});

year.textContent = new Date().getFullYear();
