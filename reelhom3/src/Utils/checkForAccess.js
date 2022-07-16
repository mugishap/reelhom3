import { getCookie } from "../Context/RequireAuth"

export const checkForAccess = () => {
    const token = getCookie('token')
    const userID = getCookie('userID')
    if (!token || !userID) {
        return window.location.replace('/login')
    }
}
