let popup = document.querySelectorAll('.popup-wrap'),
    popupToggle = document.querySelectorAll('.popup-show'),
    popupClose = document.querySelectorAll('.close');


popupToggle.forEach(function (element) {
    element.onclick = showPopup;
});

popupClose.forEach(function (element) {
    element.onclick = closePopup;
});

popup.forEach(function (element) {
    element.onclick = closePopup;
});


document.querySelector('.popup-left').onclick = function () {
    event.stopPropagation();
}

document.querySelector('.popup-right').onclick = function () {
    event.stopPropagation();
}

function showPopup() {
    let popupId = this.dataset.popup;
    document.querySelector(popupId).classList.remove('hide');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) closePopup();
    }
}

function closePopup() {
    popup.forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

