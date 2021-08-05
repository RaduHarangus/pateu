const categoryWrapper = document.getElementById('categoryWrapper');
const menuButton = document.getElementById('menuButton');

menuButton.classList.add('notransition');

menuButton.addEventListener('click', function () {
    categoryWrapper.classList.toggle('show');
});