export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	insertOrUpdateLoansCredit: async () => {
		get_Loans_Credit.run().then(() => {
			const loansCreditDetails = get_Loans_Credit.data[0]
			console.log(Boolean(loansCreditDetails))
			if(loansCreditDetails) {
				update_Loans_Credit.run()
				showAlert('Update Successful')
				return
			}
			insert_Loans_Credit.run()
			showAlert('Insert Successful')
		})
	},
	insertOrUpdateOtherLoans: async () => {
		get_Other_Liabilities.run().then(() => {
			const otherLoansDetails = get_Other_Liabilities.data[0]
			console.log(Boolean(otherLoansDetails))
			if(otherLoansDetails) {
				update_other_liabilities.run()
				showAlert('Update Successful')
				return
			}
			insert_Other_Liabilities.run()
			showAlert('Insert Successful')
		})
	},
}