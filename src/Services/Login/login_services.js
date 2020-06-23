import axios from "axios"

function logUser(username, password) {
    let user ={
        "username": username,
        "password": password
    }
    axios.post("http://localhost:8888/login/log_user", user)
        .then((res) => { 
			console.log(res.data); 
			return true;})
		.catch((res) => {
			console.log(res);
			console.log(res.data); 
			return false })
}

function registerUser(username, password, passwordConfirmation) {
    let user ={
        "username": username,
		"password": password,
		"passwordConfirmation": passwordConfirmation
    }
    axios.post("http://localhost:8888/register/register_user", user)
        .then((res) => {console.log(res); return true})
        .catch((res) => {console.log(res); return false })
}

function logWithGoogle() {
    axios.post("http://localhost:8888/auth/google")
        .then((res) => {console.log(res); return true})
        .catch((res) => {console.log(res); return false })
}

export default {
    logUser,
	registerUser,
	logWithGoogle,
}