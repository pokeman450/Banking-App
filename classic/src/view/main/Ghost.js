Ext.define('ApteanBanking.view.main.Ghost', {
    requires: [
    //APP
        //store
        'ApteanBanking.store.Transactions',
        //view
            //main
            'ApteanBanking.view.main.MainController',
            'ApteanBanking.view.main.MainViewModel',
            //transactions
            'ApteanBanking.view.transactions.TransactionsViewModel',
            'ApteanBanking.view.transactions.TransactionsController',

    //CLASSIC
        //view
            //transactions
                //Transactions
                'ApteanBanking.view.transactions.TransactionsListContainer',
                'ApteanBanking.view.transactions.TransactionsList',
                //Deposit
                'ApteanBanking.view.transactions.DepositContainer',
                'ApteanBanking.view.transactions.Deposit',
                //Withdrawal
                'ApteanBanking.view.transactions.Withdrawal',
                'ApteanBanking.view.transactions.WithdrawalContainer'
    ]
})