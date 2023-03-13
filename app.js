const apiLink = 'https://api.adviceslip.com/advice'
const button = document.querySelector('.advice-button')
const adviceId = document.querySelector('.id')
const adviceText = document.querySelector('.text')

const fetchNewAdvice = async () => {
    const response = await fetch(apiLink)
    const advice = await response.json()
    return advice
}

const renderAdvice = (adviceObj) => {
    const { id, advice } = adviceObj;
    adviceId.textContent = `#${id}`;
    adviceText.textContent = `"${advice}"`
}

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip

    //render
    renderAdvice(advice)
}


window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', generateNewAdvice)
})