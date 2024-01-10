export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async solvencyCalculation () {
		const loansCreditTotal = await get_Loans_Credit.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.bondAmount)+ Number(row.vehicleFinancingAmount)+ Number(row.stLoanAmount)+ Number(row.creditCardDebtAmount); 
			}, 0);
		});

		const otherLiabilitiesTotal = await get_Other_Liabilities.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.storeAccountsAmount) + Number(row.cellphoneContractsAmount) + Number(row.otherContractsAmount) + 			Number(row.medicalExpensesAmount) + Number(row.ratesTaxesAmount) + Number(row.medicalAidAmount) + Number(row.otherDebtsAmount);
			}, 0);
		});

		const totalLiabilitiesValue = loansCreditTotal + otherLiabilitiesTotal;
		console.log('totalLiabilitiesValue', totalLiabilitiesValue)

		const movablePropertyTotal = await get_Movable_Property.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.localSharePortfolioBaseCost) + Number(row.offshoreInvestmentPortfolioBaseCost) + Number(row.unlistedInvestmentsBaseCost) + Number(row.highValueNonPersonalUseBaseCost) + Number(row.digitalAssetsBaseCost) + Number(row.moneyMarketUnitTrustsBaseCost); 
			}, 0);
		});

		const immovablePropertyTotal = await get_Immovable_Property.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.primaryResBaseCost) + Number(row.otherImmovablePropBaseCost) +               Number(row.offshoreImmovablePropBaseCost);
			}, 0); 
		});

		const otherAssetsTotal = await get_other_assets.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.localBankAccountValue) + Number(row.offshoreBankAccountsValue) + Number(row.highValuePersonalUseAssetsValue);
			}, 0);
		});

		const policiesAssetsTotal = await get_policies_assets.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.lifePoliciesCurrentValue) + Number(row.retirementPoliciesCurrentValue) + Number(row.otherPoliciesCurrentValue); 
			}, 0);
		});
		console.log('assets', {
			movablePropertyTotal, immovablePropertyTotal, otherAssetsTotal, policiesAssetsTotal
		})
		const totalAssetsValue = movablePropertyTotal + immovablePropertyTotal + otherAssetsTotal + policiesAssetsTotal

		return { x:totalLiabilitiesValue, y:  totalAssetsValue }
	},
	async assetsCalculation () {
		const movablePropertyTotal = await get_Movable_Property.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.localSharePortfolioBaseCost) + Number(row.offshoreInvestmentPortfolioBaseCost) + Number(row.unlistedInvestmentsBaseCost) + Number(row.highValueNonPersonalUseBaseCost) + Number(row.digitalAssetsBaseCost) + Number(row.moneyMarketUnitTrustsBaseCost); 
			}, 0);
		});

		const immovablePropertyTotal = await get_Immovable_Property.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.primaryResBaseCost) + Number(row.otherImmovablePropBaseCost) +               Number(row.offshoreImmovablePropBaseCost);
			}, 0); 
		});

		const otherAssetsTotal = await get_other_assets.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.localBankAccountValue) + Number(row.offshoreBankAccountsValue) + Number(row.highValuePersonalUseAssetsValue);
			}, 0);
		});

		const policiesAssetsTotal = await get_policies_assets.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.lifePoliciesCurrentValue) + Number(row.retirementPoliciesCurrentValue) + Number(row.otherPoliciesCurrentValue); 
			}, 0);
		});
		return {
			movablePropertyTotal, immovablePropertyTotal, otherAssetsTotal, policiesAssetsTotal
		}
	}, 
	async liabilitiesCalculation () {
		const loansCreditTotal = await get_Loans_Credit.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.bondAmount)+ Number(row.vehicleFinancingAmount)+ Number(row.stLoanAmount)+ Number(row.creditCardDebtAmount); 
			}, 0);
		});

		const otherLiabilitiesTotal = await get_Other_Liabilities.run().then(data => {
			return data.reduce((total, row) => {
				return total + Number(row.storeAccountsAmount) + Number(row.cellphoneContractsAmount) + Number(row.otherContractsAmount) + 			Number(row.medicalExpensesAmount) + Number(row.ratesTaxesAmount) + Number(row.medicalAidAmount) + Number(row.otherDebtsAmount);
			}, 0);
		});
		return { loansCreditTotal, otherLiabilitiesTotal}
	}
}