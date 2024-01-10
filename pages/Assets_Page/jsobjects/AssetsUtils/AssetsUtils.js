export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	insertOrUpdateImmovableProperty: async () => {
		get_Immovable_Property.run().then(() => {
			const data = get_Immovable_Property.data[0]
			console.log(Boolean(data))
			if(data) {
				update_Immovable_Property.run()
				showAlert('Update Successful')
				return
			}
			insert_immovable_property.run()
			showAlert('Insert Successful')
		})
	},
	insertOrUpdateMovableProperty: async () => {
		get_Movable_Property.run().then(() => {
			const data = get_Movable_Property.data[0]
			console.log(Boolean(data))
			if(data) {
				update_Movable_Property.run()
				showAlert('Update Successful')
				return
			}
			Insert_movable_assets.run()
			showAlert('Insert Successful')
		})
	},
	insertOrUpdateOtherAssets: async () => {
		get_other_assets.run().then(() => {
			const data = get_other_assets.data[0]
			console.log(Boolean(data))
			if(data) {
				update_Other_Assets.run()
				showAlert('Update Successful')
				return
			}
			Insert_other_assets_.run()
			showAlert('Insert Successful')
		})
	},
	insertOrUpdatePoliciesAssets: async () => {
		get_policies_assets.run().then(() => {
			const data = get_policies_assets.data[0]
			console.log(Boolean(data))
			if(data) {
				update_Immovable_Property.run()
				showAlert('Update Successful')
				return
			}
			insert_immovable_property.run()
			showAlert('Insert Successful')
		})
	},
}