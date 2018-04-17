class bankAccount {
    owner: string;
    balance: number;
    transactions: number[];
    currentTransaction: number = 0;
    
    constructor(o: string, b: number, t:number[], cT: number){
        this.owner = o; 
        this.balance = b;
        this.transactions = t;
    };
    
    currentBalance(){
        return this.balance;
    }
    
    totalTransactions(){
        this.currentTransaction++;
        this.transactions.push(this.currentTransaction); 
        //this.balance += n; 
        }
    withdraw(n: number){
        this.totalTransactions();
        this.balance -= n; 
    } 
    deposit(n:number){
        this.totalTransactions();
        this.balance += n; 
    }
}

let myNewAccount = new bankAccount("John Doe", 1000, [], 1); 
myNewAccount.currentBalance();
myNewAccount.withdraw(500);
myNewAccount.deposit(750);
console.log(myNewAccount);