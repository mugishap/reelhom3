/* eslint-disable no-unused-vars */
import Pages from './Pages'
function App() {

    let mode = localStorage.getItem('reelhome-mode')
    if (!mode) {
        mode = 'light'
    }
    localStorage.setItem('reelhome-mode', mode)
    
    return (
        <div>
            <Pages
                mode={mode} />
        </div>
    )
}

export default App
