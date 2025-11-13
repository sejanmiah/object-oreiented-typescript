// Getter And Setter Concept of Typescript

class BankAccount {
    public readonly userId: number;
    public userName:  string;
    private _userBalance: number;

    constructor (userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    //Balance ke Set kortese
    // adBalance(balance: number) {
    //     this._userBalance = this._userBalance + balance;
    // }

    //ekhon setter use kore balance set kortesi
    set adBalance(amount: number) {
       this._userBalance = this._userBalance + amount;
    }

    // get Balance
    // getBalance(){
    //     return this._userBalance;
    // }

    //ekhon amra getter use kore balance get korbo
    get getBalance(){
        return this._userBalance
    }
}

const sejanBhaiAccount = new BankAccount(111, "Sejan", 20);

// sejanBhaiAccount.adBalance(100);
// sejanBhaiAccount.adBalance(50);

// console.log(sejanBhaiAccount.getBalance());

sejanBhaiAccount.adBalance = 100;
sejanBhaiAccount.adBalance = 50;


