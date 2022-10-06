export function Actions({ buttonStart, buttonPause, buttonSet,
    buttonStop, lightMode, darkMode, toggleMode }) {
    //chance Mode functions
    function whiteMode() {
        lightMode.classList.remove("hide")
        darkMode.classList.add("hide")
        toggleMode.classList.remove("dark")
        toggleMode.classList.add("white")
    }
    function blackMode() {
        darkMode.classList.remove("hide")
        lightMode.classList.add("hide")
        toggleMode.classList.remove("white")
        toggleMode.classList.add("dark")
    }
    // functions controls
    function Start() {
        buttonStart.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }
    function resetControls() {
        buttonPause.classList.add('hide')
        buttonStart.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }
    return ({
        whiteMode, blackMode, Start, resetControls
    })
}