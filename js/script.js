const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});