/**
 * This view is an example list of people.
 */
Ext.define('ApteanBanking.view.transactions.TransactionsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'transactionslist',

    controller:"transactionscontroller",

    title: 'Transactions',

    listeners: {
        storechange: 'filterTransactions'
    },

    bind: {
        store:'{account}'
    },

    columns: [
        { text: 'User',  dataIndex: 'user' },
        { text: 'Action', dataIndex: 'action', flex: 1 },
        { text: 'Amount', dataIndex: 'amount', flex: 1 },
        { text: 'Date', dataIndex: 'date', flex: 1 }
    ],
});
 