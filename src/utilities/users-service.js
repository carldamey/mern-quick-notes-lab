import * as usersAPI from "./users-api"

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    localStorage.setItem("token", token)
    return token
}
 export async function login(credentials) {
    return 5
 }