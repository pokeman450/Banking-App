Ext.define('ApteanBanking.view.transactions.TransactionsListContainer', {
    extend: 'Ext.Container',
    xtype: 'transactionslistcontainer',

    controller:'transactionscontroller',
    viewModel:'transactionsviewmodel',

    items: [{
        xtype:'combobox',
        displayField: 'display',
        valueField: 'value',
        fieldLabel: 'Current Account: ',
        publish: 'value',

        bind:{
            value:'{selection}'
        },

        store: [
            {value: 'checking', display: 'Checking Account'}, 
            {value: 'savings', display: 'Savings Account'}
        ]
    },{
       xtype:'transactionslist'
    }],
    
    listeners:{
        activate: 'tabChange'
    }
});