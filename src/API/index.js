export const URL = 'https://reqres.in/api'

export const get = async (params) => {
    const response = await fetch(`${URL}/users?page=1`)
    return response.json()
}
