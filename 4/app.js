const board = document.querySelector('#board')
const colors = ['#ef5350', '#8e24aa', '#ea80fc', '#1e88e5', '#4db6ac', '#cddc39', '#e91e63', '#eeff41', '#ffb300', '#f4511e']
const SQUEARES_NUMBERS = 1500

for (let i = 0; i < SQUEARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}