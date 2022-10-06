import {
    buttonForest, buttonRain, buttonCoffee, buttonFireplace,
    inputForest, inputRain, inputCoffee, inputFireplace,
} from "./elements.js"
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true%22")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true%22")
const forestSound = new Audio("./sounds/Floresta.wav")
const fireplaceSound = new Audio("./sounds/Lareira.wav")
const coffeeSound = new Audio("./sounds/Cafeteria.wav")
const rainSound = new Audio("./sounds/Chuva.wav")
//custom buttons
function resetCustom() {
    buttonForest.classList.remove(`custom`)
    buttonRain.classList.remove(`custom`)
    buttonCoffee.classList.remove(`custom`)
    buttonFireplace.classList.remove(`custom`)
    inputForest.classList.remove(`custom-input`)
    inputRain.classList.remove(`custom-input`)
    inputCoffee.classList.remove(`custom-input`)
    inputFireplace.classList.remove(`custom-input`)
}
function forest() {
    resetCustom()
    buttonForest.classList.add(`custom`)
    inputForest.classList.add(`custom-input`)
}
function rain() {
    resetCustom()
    buttonRain.classList.add(`custom`)
    inputRain.classList.add(`custom-input`)
}
function coffee() {
    resetCustom()
    buttonCoffee.classList.add(`custom`)
    inputCoffee.classList.add(`custom-input`)
}
function fireplace() {
    resetCustom()
    buttonFireplace.classList.add(`custom`)
    inputFireplace.classList.add(`custom-input`)
}
// functions
function buttonpress() {
    buttonPressAudio.play()
}
function endSound() {
    kitchenTimer.play()
}
let Start = true
function controlsSound(sound) {
    if (Start == true) {
        sound.play()
        Start = false
    }
    else {
        sound.pause()
        resetCustom()
        Start = true
    }
}
function stopSound(soundOne, soundtwo, soundTree,) {
    soundOne.pause()
    soundtwo.pause()
    soundTree.pause()

}
function inputvolume(sound, volume) {
    sound.volume = volume.value
}

export {
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
}
