Ext.define('ApteanBanking.view.transactions.TransactionsController', {
    extend:'Ext.app.ViewController',

    alias:'controller.transactionscontroller',

    init: function () {
        this.runCheckingInterest();
        this.runSavingsInterest();
    },

    runCheckingInterest: function() {
        // debugger
        var checking = ApteanBanking.util.TransactionsUtil.checking;
        if (Ext.isEmpty(checking)) {
            checking = new Ext.util.TaskRunner();
            checking.start({
                run: this.getCheckingInterest,
                interval: 10000,
                myController: this
            });
            ApteanBanking.util.TransactionsUtil.checking = checking;
        }
    },

    runSavingsInterest: function(){
        var savings = ApteanBanking.util.TransactionsUtil.savings;
        if(Ext.isEmpty(savings)){
            savings = new Ext.util.TaskRunner();
            savings.start({
                run: this.getSavingInterest,
                interval: 10000,
                myController:this
            })
        }
    },



    getCheckingInterest: function(){
        // debugger
        var me = this.myController,
            vm = me.getViewModel(),
            mvm = me.getMainVM(),
            location = 'checkingAcc.balance',
            balance = vm.get(location),
            rate = mvm.get('checkingAcc.checkingRate'),
            newBalance= Math.floor(balance * rate);
        vm.set(location, newBalance);
    },

    getSavingInterest: function(){
        var me = this.myController,
            vm= me.getViewModel(),
            mvm = me.getMainVM(),
            location = 'savingsAcc.balance',
            balance = vm.get(location),
            rate = mvm.get('savingsAcc.savingsRate'),
            newBalance=Math.floor(balance*rate);
        vm.set(location, newBalance);
    },

    onTransactionsClicked: function(btn){     
        var me = this,
            vm = me.getViewModel(),
            mvm = me.getMainVM(),
            util = ApteanBanking.util.TransactionsUtil,
            amount = vm.get('amount'),
            balance = vm.get('balance'),
            store = vm.get('account'),
            user = mvm.get('userId'),
            action=btn.text,
            newBalance=null,
            message = action + ' $' + amount + '?';
      //  debugger
        action==='Deposit'? newBalance=balance+amount: newBalance = balance - amount;
        if(amount<=0){
            Ext.Msg.alert('message', 'Error: Please insert a valid amount');
        } else if(newBalance<0){
            Ext.Msg.alert('message', 'Error: You gone BROKE');
        } else{
        //Ternary function
            Ext.Msg.confirm('Confirm', message, function(choice){
                if(choice==='yes'){
                    util.addStoreInfo(store,user,action ,amount);
                    vm.set("balance", newBalance);
                }
                vm.set('amount', null);
                newBalance=null;
            })
        }
    },

    getMainVM: function(){
        var me = this,
            view = me.getView(),
            vm = view.up('app-main').getViewModel();
            return vm;
    },

    tabChange: function (tab) {
        // debugger
        var me = this,
            action = tab.title;
            vm = me.getMainVM();
        vm.set('tab', action)
        me.filterTransactions()
    },

    storeChange: function () {
        // debugger
        // var me = this,
        //     vm = me.getMainVM(),
        //     selection = vm.get('selection'),
        //     store = selection==="savings"? 'savingsBase': 'checkingBase';
        // vm.set('currentStore', store);

        // me.filterTransactions();
        this.filterTransactions();
    },

    filterTransactions: function(){
        // debugger
        // var me = this,
        //     vm = me.getMainVM(),
        //     action = vm.get('tab');
        //     store = vm.get(vm.get('currentStore'));
        // if(!store){
        //     return;
        // } else if(!(action === 'Deposit') && !(action === 'Withdrawal')) {
        //     store.clearFilter();
        // } else {
        //     store.clearFilter();
        //     store.filter('action', action);
        // }
        var me = this,
            vm = me.getMainVM(),
            tab = vm.get('tab'),
            store = me.getViewModel().get('account');
        if(!store){
            return;
        }else if (tab ==='Deposit' || tab ==='Withdrawal'){
            store.clearFilter();
            store.filter('action', tab);
        }else{
           store.clearFilter();
        }
    },
});