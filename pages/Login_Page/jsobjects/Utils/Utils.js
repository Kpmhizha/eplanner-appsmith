export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
	},
	loginUser: () => {
		const user = fetchUser.run()
		return user.then((res) => {
			console.log(res)
			if(res.length > 0){
				storeValue('jwt', res[0].jwt)
				navigateTo('Home_Page')
				return res[0].jwt
			} else {
				showAlert('Invalid Credentials', 'error')
				return ''
			}
		})
	}
}