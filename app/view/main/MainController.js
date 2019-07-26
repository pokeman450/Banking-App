/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ApteanBanking.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    // listen:{
    //     controller:{
    //         '*':{   
    //             green:'change' 
    //         }
    //     }
    // },

    // change: function(btn){
    //     // debugger
    //     var me =this,
    //         vm = me.getViewModel(),
    //         text = 'Dolphins';
    //     console.log(btn.up());
    //     vm.set('loremIpsum', text);
    // }
});
