Ext.define('ApteanBanking.view.transactions.SettingsContainer',{
    extend: 'Ext.Container',
    xtype: 'settingscontainer',

    controller:'transactionscontroller',
    viewModel:'transactionsviewmodel',

    items:[{
        xtype: 'settings'
    }],
});