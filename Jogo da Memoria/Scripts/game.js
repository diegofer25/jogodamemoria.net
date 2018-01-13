$(document).ready(function () {
    flipCard();
});

function flipCard() {
    $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
    });
}