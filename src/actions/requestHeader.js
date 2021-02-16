
export const requestHeader = () => {
    return fetch(
        `${process.env.REACT_APP_API_URI}/auth/token-delivery`,
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email:"admin@toto.fr",
                password:"root"
            })
        }
    )
}