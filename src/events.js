import {
    lightMode, darkMode, toggleMode, minutesDisplay,
    secondsDisplay, buttonStart, buttonPause, buttonSet,
    buttonStop, buttonAddTime, buttonReduceTime, buttonForest,
    buttonRain, buttonCoffee, buttonFireplace, inputForest,
    inputRain, inputCoffee, inputFireplace,
} from "./elements.js"
import {
    buttonpress,
    endSound,
    forest,
    rain,
    coffee,
    fireplace,
    controlsSound,
    stopSound,
    forestSound,
    fireplaceSound,
    coffeeSound,
    rainSound,
    inputvolume
} from "./sounds.js"
export function Events({ actions, timer, }) {
    lightMode.addEventListener('click', function () {
        actions.blackMode()
        buttonpress()
    })
    darkMode.addEventListener('click', function () {
        actions.whiteMode()
        buttonpress()
    })
    buttonStart.addEventListener('click', function () {
        actions.Start()
        timer.countdown()
        buttonpress()
    })
    buttonPause.addEventListener('click', function () {
        actions.resetControls()
        timer.pauseTimer()
        buttonpress()
    })
    buttonSet.addEventListener('click', function () {
        timer.setTime()
        buttonpress()
    })
    buttonStop.addEventListener('click', function () {
        timer.resetTimer()
        actions.resetControls()
        buttonpress()
    })
    buttonAddTime.addEventListener('click', function () {
        timer.AddTime()
        buttonpress()
    })
    buttonReduceTime.addEventListener('click', function () {
        timer.reducetime()
        buttonpress()
    })
    // soundpad
    buttonForest.addEventListener(`click`, function () {
        forest()
        controlsSound(forestSound)
        stopSound(fireplaceSound, coffeeSound, rainSound)
        buttonpress()
    }
    )
    buttonRain.addEventListener(`click`, function () {
        rain()
        controlsSound(rainSound)
        stopSound(forestSound, fireplaceSound, coffeeSound,)
        buttonpress()
    }
    )
    buttonCoffee.addEventListener(`click`, function () {
        coffee()
        controlsSound(coffeeSound)
        stopSound(forestSound, fireplaceSound, rainSound)
        buttonpress()
    })
    buttonFireplace.addEventListener(`click`, function () {
        fireplace()
        controlsSound(fireplaceSound)
        stopSound(forestSound, coffeeSound, rainSound)
        buttonpress()
    }
    )
    inputForest.addEventListener(`input`, function () {
        inputvolume(forestSound, inputForest)
    })
    inputRain.addEventListener(`input`, function () {
        inputvolume(rainSound, inputRain)
    })
    inputCoffee.addEventListener(`input`, function () {
        inputvolume(coffeeSound, inputCoffee)
    })
    inputFireplace.addEventListener(`input`, function () {
        inputvolume(inputFireplace, inputFireplace)
    })
}