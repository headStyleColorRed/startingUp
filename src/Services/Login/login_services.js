import axios from "axios"

const Environment = {
	local: "localhost",
	dev: "15.236.191.15",
	pro: ""
}

let currentEnvironment = Environment.dev


async function logUser(username, password) {
    let user ={
        "username": username,
        "password": password
	}
	
	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8888/login/log_user`, user)
        .then((res) => {  
			resolve(res.data)})
		.catch((res) => {
			reject(res.data)})
	})
	
	let result = await promise
	return result
}

async function registerUser(username, password, passwordConfirmation) {
    let user ={
        "username": username,
		"password": password,
		"passwordConfirmation": passwordConfirmation
	}
	
	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8888/register/register_user`, user)
        .then((res) => {  
			resolve(res.data)})
		.catch((res) => {
			reject(res.data)})
	})
	
	let result = await promise
	return result
}

async function logOut(username, password) {
    let user ={
        "username": username,
        "password": password
	}
	
	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8888/logout/logout_user`, user)
        .then((res) => {  
			resolve(res.data)})
		.catch((res) => {
			reject(res.data)})
	})
	
	let result = await promise
	return result
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
	logOut,
}