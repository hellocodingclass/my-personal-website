window.onload = function() {
  const imageElement = document.getElementById('magic-trigger');

  imageElement.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
    alert('I will now make this screen turn yellow');
  });
}
