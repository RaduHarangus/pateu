const categoryWrapper = document.getElementById('categoryWrapper');
const menuButton = document.getElementById('menuButton');

menuButton.classList.add('notransition');

menuButton.addEventListener('click', function () {
    categoryWrapper.classList.toggle('show');
});

$(document).ready(function() {
    // display the text "Added to cart" when clicked on a menu icon
    $('.category__item').on('click', function() {
        $(this).html("<span>Added to cart</span>");
    });
});