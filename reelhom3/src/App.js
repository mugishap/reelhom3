/* eslint-disable no-unused-vars */
import Pages from './Pages'
import { UserProvider } from './Context/UserContext';
import { getUserById } from './Context/AuthContext';
import { getCookie } from './Context/RequireAuth';
import { PostProvider } from './Context/PostContext';

function App() {

    let mode = localStorage.getItem('reelhome-mode')
    if (!mode) {
        mode = 'light'
    }
    localStorage.setItem('reelhome-mode', mode)

    return (
        <div>
            <UserProvider>
                <PostProvider>
                    <Pages
                        mode={mode} />
                </PostProvider>
            </UserProvider>

        </div>
    )
}

export default App
