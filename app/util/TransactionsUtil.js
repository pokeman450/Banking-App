Ext.define("ApteanBanking.util.TransactionsUtil", {
    singleton: true,

    checking: null,

    savings: null,

    addStoreInfo: function(store,userId,action,amount){
        store.add({
            user: userId, 
            action: action,
            amount: amount,
            date: new Date()
        })
    }

});