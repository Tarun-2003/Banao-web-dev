const showPopup= document.querySelector(".pop-button");
const popupContainer= document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close");

showPopup.addEventListener('click', () => {
    popupContainer.classList.add('active');

});

closeBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

