export default {
	myVar1: [],
	myVar2: {},
	uploadFile () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		fileGuardianAcceptanceUpload.run(
		).then( (data) => {
			console.info('data', data)
		})
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}