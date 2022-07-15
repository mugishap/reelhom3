/* eslint-disable no-unused-vars */
import Pages from './Pages'
import { UserProvider } from './Context/UserContext';

function App() {

    let mode = localStorage.getItem('reelhome-mode')
    if (!mode) {
        mode = 'light'
    }
    localStorage.setItem('reelhome-mode', mode)

    return (
        <div>
            <UserProvider>
                <Pages
                    mode={mode} />
            </UserProvider>
        </div>
    )
}

export default App
