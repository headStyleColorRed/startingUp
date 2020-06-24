
export default {
	state: {
		user: null,
		password: null,
		role: "user",
		logged: false,
	},
	mutations: {
		setUserLoginData(state, userData) {
			state.user = userData.username;
			state.password = userData.password
			state.role = userData.role;
			state.logged = true;
		},
		resetAuthState(state) {
			state.user = null;
			state.password = null
			state.role = null;
			state.logged = false;
		}
	},
	getters: {
		logged: (state) => {
			return state.logged;
		},
		role: (state) => {
			return state.role;
		},
		user: (state) => {
			return state.user;
		},
		password: (state) => {
			return state.password
		}
	}
}