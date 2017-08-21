(function () {
  render();
  var submitForm = document.querySelector('form');
  if (submitForm) {
    submitForm.addEventListener('submit', (event) => {
      event.preventDefault();
      var inputText = event.target.firstElementChild.value;
      /*Store Data*/
      sessionStorage.setItem('test', inputText);
      localStorage.setItem('test', inputText);
      document.cookie = 'test=' + inputText;

      /*Render the Data*/
      render();
    });
  }
})();

function render() {
  document.querySelector('.sessionStorage').textContent = sessionStorage.test;
  document.querySelector('.localStorage').textContent = localStorage.test;
  document.querySelector('.cookie').textContent = (document.cookie);
}
