Ext.define('ApteanBanking.view.transactions.Deposit',{
    extend: 'Ext.Panel',
    xtype: 'deposit',

    title: 'Deposit',

    items:[{
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
        xtype: 'label',
        bind: {
            html: 'Balance: $' + '{balance}',
            userCls: '{color}'
        }
        // xtype: 'displayfield',
        // fieldLabel:'Balance',
        // name: 'current_balance',
        // bind:{
        //     value: '$' + '{balance}',
        //     userCls: 'money'
        // }
    },{
        xtype: 'numberfield',
        itemId: 'depositfield',
        bind:{
            value:'{amount}'
        }
    },{
        xtype: 'button',
        text:'Deposit',
        listeners: {
            click:'onTransactionsClicked',
            // click:'fun'
        }
    },{
         xtype:'transactionslist'
    }],
});