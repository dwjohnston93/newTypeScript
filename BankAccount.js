var bankAccount = /** @class */ (function () {
    function bankAccount(o, b, t, cT) {
        this.currentTransaction = 0;
        this.owner = o;
        this.balance = b;
        this.transactions = t;
    }
    ;
    bankAccount.prototype.currentBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.totalTransactions = function () {
        this.currentTransaction++;
        this.transactions.push(this.currentTransaction);
        //this.balance += n; 
    };
    bankAccount.prototype.withdraw = function (n) {
        this.totalTransactions();
        this.balance -= n;
    };
    bankAccount.prototype.deposit = function (n) {
        this.totalTransactions();
        this.balance += n;
    };
    return bankAccount;
}());
var myNewAccount = new bankAccount("John Doe", 1000, [], 1);
myNewAccount.currentBalance();
myNewAccount.withdraw(500);
myNewAccount.deposit(750);
console.log(myNewAccount);
