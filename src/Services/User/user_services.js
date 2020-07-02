import axios from "axios"
import store from '../../store/index'

const Environment = {
	local: "localhost",
	aws: "15.188.37.72",
	dock: "user_server",
	pro: ""
}


let currentEnvironment = Environment.local

async function uploadData(userData) {
	
	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8889/user/first-time`, userData)
        .then((res) => {  
			resolve(res.data)})
		.catch((res) => {
			reject(res.data)})
	})
	
	let result = await promise
	return result
}

async function getGoogleMapSuggestion(userInput) {
	let language = store.getters.language
	let userData = {
		userInput: userInput,
		language: language
	}

	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8889/location/city-prediction`, userData)
        .then((res) => {  
			resolve(res.data)})
		.catch((res) => {
			reject(res.data)})
	})
	
	let result = await promise
	return result
}

export default {
    uploadData,
	getGoogleMapSuggestion,
}