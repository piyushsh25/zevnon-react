import axios from "axios"

export const LoginSubmitHandler = async (email, password,authDispatch) => {

    try {
        const response = await axios.post(`/api/auth/login`, {
            email,
            password
        });
        if (response.status === 200 || response.status === 201) {
            const { encodedToken, foundUser } = response.data;
            localStorage.setItem("token", encodedToken)
            localStorage.setItem("userDetails", JSON.stringify(foundUser))
            authDispatch({type:"LOGIN",payload:encodedToken})

        }

    } catch (error) {
        console.log(error)
    }
}