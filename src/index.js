import {
    lightMode, darkMode, toggleMode, minutesDisplay,
    secondsDisplay, buttonStart, buttonPause, buttonSet,
    buttonStop, buttonAddTime, buttonReduceTime, buttonForest,
    buttonRain, buttonCoffee, buttonFireplace, inputForest,
    inputRain, inputCoffee, inputFireplace,
} from "./elements.js"
import { Actions } from "./actions.js"
import { Timer } from "./timer.js"
import { Events } from "./events.js"
const actions = Actions({
    buttonStart, buttonPause, buttonSet,
    buttonStop, lightMode, darkMode, toggleMode,
})
const timer = Timer({
    minutesDisplay, secondsDisplay,
    resetControls: actions.resetControls
})

Events({ actions, timer, })
