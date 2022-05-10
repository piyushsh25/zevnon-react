import axios from "axios";

export const SignUpSubmitHandler = async (signupState,authDispatch) => {

  const { email, name, checkFinalPassword: password } = signupState;
  try {
    const response = await axios.post(`/api/auth/signup`, {
      email,
      password,
      name
    });
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("zevnonName",name)
      localStorage.setItem("isLoggedIn", true);
      authDispatch({ type: "SIGNUP",payload:response.data.encodedToken })
    }
  } catch (error) {
    console.log(error);
  }

};
