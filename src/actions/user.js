import axios from "axios";
import sha256 from "sha256";
import { API } from "../constants";

const registerSuccess = () => ({
    type: "REGISTER_SUCCESS",
    isRegistered: true,
})

const registerError = () => ({
    type: "REGISTER_ERROR",
    isRegistered: true,
})

export const register = (username, email, password) => {
    return dispatch => {
        return axios.post(`${API.BASE}${API.REGISTER}`, {
            email,
            username,
            hashedPassword: sha256(password)
        })
            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()))
    }
}
