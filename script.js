(function () {
  document.querySelector('.sessionStorage').textContent = sessionStorage.test;
  document.querySelector('.localStorage').textContent = localStorage.test;
  document.querySelector('.cookie').textContent = processCookie(document.cookie);

  var submitForm = document.querySelector('form');
  if (submitForm) {
    submitForm.addEventListener('submit', (event) => {
      event.preventDefault();
      var inputText = event.target.firstElementChild.value;
      sessionStorage.setItem('test', inputText);
      localStorage.setItem('test', inputText);
      document.cookie = 'test=' + inputText;
      document.querySelector('.sessionStorage').textContent = sessionStorage.test;
      document.querySelector('.localStorage').textContent = localStorage.test;
      document.querySelector('.cookie').textContent = processCookie(document.cookie);
    });
  }
})();

function processCookie (str) {
  var arr = str.split(';');
  return arr[1].split('=')[1];
}
