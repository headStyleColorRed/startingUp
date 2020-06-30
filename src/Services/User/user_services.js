import axios from "axios"

const Environment = {
	local: "localhost",
	aws: "15.188.37.72",
	dock: "login_server",
	pro: ""
}


let currentEnvironment = Environment.local

async function uploadData(userData) {
	
	let promise = new Promise((resolve, reject) => {
		axios.post(`http://${currentEnvironment}:8889/user/upload`, userData)
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
}