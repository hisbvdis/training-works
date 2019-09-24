var modalOverlay = document.querySelector('.modal-overlay');
var modalFeedback = document.querySelector('.modal-feedback');
var buttonFeedback = document.querySelector('.feedback-button');
var modalClose;
var keyDown = '';

buttonFeedback.addEventListener('click', function(evt) {
    evt.preventDefault;
    modalOverlay.classList.add('modal-show');
    modalFeedback.classList.add('modal-show');

    modalClose = modalFeedback.querySelector('.modal-close');
    modalClose.addEventListener('click', function(evt) {
        evt.preventDefault;
        modalOverlay.classList.remove('modal-show');
        modalFeedback.classList.remove('modal-show');
    })
    modalOverlay.addEventListener('click', function(evt) {
        evt.preventDefault;
        modalOverlay.classList.remove('modal-show');
        modalFeedback.classList.remove('modal-show');
    })

    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 27) {
            modalOverlay.classList.remove('modal-show');
            modalFeedback.classList.remove('modal-show');
        }
    })
})