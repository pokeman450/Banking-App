Ext.define('ApteanBanking.view.transactions.Withdrawal',{
    extend: 'Ext.Panel',
    xtype: 'withdrawal',

    title: 'Withdrawal',

    items:[{
        xtype:'combobox',
        displayField: 'display',
        valueField: 'value',
        fieldLabel: 'Select an account: ',
        publish: 'value',

        bind:{
            value:'{selection}'
        },

        store: [
            {value: 'checking', display: 'Checking Account'}, 
            {value: 'savings', display: 'Savings Account'}
        ]
    },{
        xtype: 'label',
        bind: {
            html: 'Balance: $' + '{balance}',
            userCls: '{color}'
        }
        // xtype:'displayfield',
        // fieldLabel: 'Balance',
        // name: 'current_balance',
        // bind: {
        //     value: '$' + '{balance}'
        // }
    },{
        xtype: 'numberfield', 
        itemid: 'withdrawalfield',
        bind: {
            value:'{amount}'
        }
    },{
        xtype: 'button',
        text:'Withdrawal',
        listeners:{
            click:'onTransactionsClicked'
        }
    },{
        xtype:'transactionslist'
    }]
});