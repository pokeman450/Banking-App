Ext.define('ApteanBanking.view.transactions.DepositContainer',{
    extend: 'Ext.Container',
    xtype: 'depositcontainer',

    controller:'transactionscontroller',
    viewModel:'transactionsviewmodel',

    items:[{
        xtype: 'deposit'
    }],

    listeners:{
        activate: 'tabChange'
    }
});