import { endSound } from "./sounds.js"
export function Timer({ minutesDisplay, secondsDisplay, resetControls, }) {
    let minutes
    let breakTime
    function countdown() {
        breakTime = setTimeout(function () {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let finished = minutes <= 0 && seconds <= 0
            if (finished) {
                resetControls()
                resetTimer()
                endSound()
                return
            }
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
            --seconds
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
            secondsDisplay.textContent = String(seconds).padStart(2, "0")
            countdown()
        }, 10)
    }
    function setTime() {
        minutes = prompt("Quantos minutos ?")
        if (isNaN(minutes)) {
            alert("Somente números")
            setTime()
            return
        }
        if (Number(minutes >= 60)) {
            minutes = "60"
            secondsDisplay.textContent = "00"
        }
        resetTimer()
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }
    function resetTimer() {
        if (minutes == null) {
            minutes = 25
            secondsDisplay.textContent = "00"
        }
        minutesDisplay.textcontent = Number(minutesDisplay.textContent = String(minutes).padStart(2, "0"))
        secondsDisplay.textContent = String(secondsDisplay.textContent = 0).padStart(2, "0")
        pauseTimer()

    }
    function pauseTimer() {
        clearTimeout(breakTime)
    }
    function AddTime() {
        if (minutesDisplay.textContent >= 60) {
            minutesDisplay.textContent = 60
            return
        }
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
        return
    }
    function reducetime() {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
        if (minutesDisplay.textContent <= 0) {
            minutesDisplay.textContent = String(0).padStart(2, "0")
            return
        }
    }
    return {
        countdown,
        setTime,
        resetTimer,
        pauseTimer,
        AddTime,
        reducetime
    }
}