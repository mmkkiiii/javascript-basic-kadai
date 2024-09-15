const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました'
  }, 2000);

});