/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ApteanBanking.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        checkingBase: {
            type: 'transactions'
        },
        savingsBase:{
            type: 'transactions'
        }
    },

    data: {
        name: 'ApteanBanking',
        loremIpsum: '"DBZ!" - slug',

        selection: 'checking',
        tab: 'Transaction History',
        currentStore: 'checkingBase',

        amount:null,
        userId: 10000,
        

        savingsAcc: {
            name: "Josh",
            balance: 5000,
            timeStamp: new Date(),
            savingsRate: 1.05
        },

        checkingAcc: {
            name: "Josh",
            balance: 1000,
            timeStamp: new Date(),
            checkingRate: 1.01
        }
    },

    //TODO - add data, formulas and/or methods to support your view
});
