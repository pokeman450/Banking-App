Ext.define('ApteanBanking.view.transactions.WithdrawalContainer',{
    extend: 'Ext.Container',
    xtype: 'withdrawalcontainer',

    controller:'transactionscontroller',
    viewModel:'transactionsviewmodel',
    
    items:[{
        xtype: 'withdrawal'
    }],
    
    listeners:{
        activate: 'tabChange'
    }
});