Ext.define('ApteanBanking.store.Transactions',{
    extend: 'Ext.data.Store',

    alias: 'store.transactions',

   // model: 'ApteanBanking.model.Transactions',

    data: [
        {user: 10000, action:"Deposit", amount:500, date:"June 1, 2019"},
        {user: 10000, action:"Withdrawal", amount:120, date:"June 3, 2019"},
        {user: 10000, action:"Withdrawal", amount:450, date:"June 5, 2019"},
        {user: 10000, action:"Deposit", amount:100, date:"June 10, 2019"}
    ]

});