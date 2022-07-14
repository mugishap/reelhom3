export function changeMode() {
    let theme = localStorage.getItem('reelhome-mode')
    if (!theme) {
        theme = "light"
        localStorage.setItem('reelhome-mode', 'light')
    }
    if (theme === 'dark') {
        theme = 'light'
        localStorage.setItem('reelhome-mode', 'light')
    }
    else if (theme === 'light') {
        theme = 'light'
        localStorage.setItem('reelhome-mode', 'light')
    }
    else {
        theme = "light"
        localStorage.setItem('reelhome-mode', 'light')
    }
    return theme
}
