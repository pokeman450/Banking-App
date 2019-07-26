Ext.define('ApteanBanking.view.transactions.TransactionsViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.transactionsviewmodel',

    formulas:{
        balance:{
            bind:{
                _savings:'{savingsAcc.balance}',
                _checking:'{checkingAcc.balance}',
                _selection:'{selection}'
            },
            get: function (data) {
                return data._selection === "savings"? data._savings:data._checking;        
            },
            set: function (newBalance) {
                var me = this,
                    selection = me.get('selection');
                selection === 'checking' 
                    ? me.set('checkingAcc.balance', newBalance)
                    : me.set('savingsAcc.balance', newBalance);
            }
        },
        money:{
            bind:{
                _savings:'{savingsAcc.balance}',
                _checking:'{checkingAcc.balance}',
                _selection:'{selection}'
            },
            get:function(data){
                return data._selection ==='checking'? data._checking: data._savings;

            }
        },

        color: {
            bind: {
                _money: '{money}'
            },
            get: function(data){
                if (data._money>10000) {
                    return 'goodBalance';
                } else if( data._money<500) {
                    return 'badBalance';
                }
            }
        },
        account:{
            bind:{
                _savingsBase:'{savingsBase}',
                _checkingBase:'{checkingBase}',
                _selection:'{selection}'
            },
            get: function(data){
                return  data._selection === "savings"? data._savingsBase:data._checkingBase;
            }
        }
    },
});