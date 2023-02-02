export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	insertOrUpdate: async () => {
		//use async-await or promises
		 let marriageDetails
			await getMarriageProfile.run().then(() => {
			marriageDetails = getMarriageProfile.data[0]
			console.log(Boolean(marriageDetails))
			})
			if(marriageDetails) {
				updateMarriageProfile.run()
				showAlert('Update Successful')
				return
			}
			insertMarriageProfile.run()
			showAlert('Insert Successful')
	}
}