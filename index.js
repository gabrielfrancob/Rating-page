const ratingBtn = document.querySelectorAll('.rating-button')

ratingBtn.forEach(button => {
    button.addEventListener('click', ToggleActive)
})

function ToggleActive(event) {
    DeactivateToggle()
    let positionClicked = Array.from(ratingBtn).indexOf(event.target)
    ratingBtn[positionClicked].classList.toggle('active')
}

function DeactivateToggle() {
    ratingBtn.forEach(element => {
        if (element.className.includes('active')) {
            element.classList.toggle('active')
        }
    })
}
