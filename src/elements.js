// change mode
const lightMode = document.querySelector(".button-sun")
const darkMode = document.querySelector(".button-moon")
const toggleMode = document.querySelector(".mode")
//timer screen
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
//timer controls 
const buttonStart = document.querySelector(".button-start")
const buttonPause = document.querySelector(".button-pause")
const buttonSet = document.querySelector(".button-set")
const buttonStop = document.querySelector(".button-stop")
const buttonAddTime = document.querySelector(".button-add-time")
const buttonReduceTime = document.querySelector(".button-reduce-time")
//soundpad buttons
const buttonForest = document.querySelector(".button-forest")
const buttonRain = document.querySelector(".button-rain")
const buttonCoffee = document.querySelector(".button-coffee")
const buttonFireplace = document.querySelector(".button-fireplace")
//soundpad inputs
const inputForest = document.querySelector(".input-forest")
const inputRain = document.querySelector(".input-rain")
const inputCoffee = document.querySelector(".input-coffee")
const inputFireplace = document.querySelector(".input-fireplace")

export {
    lightMode, darkMode, toggleMode, minutesDisplay,
    secondsDisplay, buttonStart, buttonPause, buttonSet,
    buttonStop, buttonAddTime, buttonReduceTime, buttonForest,
    buttonRain, buttonCoffee, buttonFireplace, inputForest,
    inputRain, inputCoffee, inputFireplace,
}