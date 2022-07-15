import { getCookie } from "../Context/RequireAuth"

export const checkForAccess = () => {
    const token = getCookie('token')
    const userID = getCookie('userID')
    if (!token || !userID) {
        return { message: "You are not logged in" }
    }
    return window.location.replace('/login')
}
