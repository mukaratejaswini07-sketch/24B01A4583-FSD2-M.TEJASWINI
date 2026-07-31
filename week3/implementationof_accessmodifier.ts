// Parent Class
class BankAccount {

    // Public property
    public accountHolder: string = "John Carter";

    // Private property
    private pinCode: number = 4589;

    // Protected property
    protected isActive: boolean = false;

    // Public method
    public activateAccount(enteredPin: number): void {

        if (this.verifyPin(enteredPin)) {
            this.isActive = true;
            console.log("Account Activated Successfully");
        } else {
            console.log("Incorrect PIN");
        }
    }

    // Private method
    private verifyPin(enteredPin: number): boolean {
        return this.pinCode === enteredPin;
    }
}

// Child Class
class PremiumAccount extends BankAccount {

    public accountStatus(): void {

        if (this.isActive) {
            console.log("Account Status: Active");
        } else {
            console.log("Account Status: Inactive");
        }
    }
}


// Main Program
const account = new BankAccount();

// Accessing public property
console.log("Account Holder:", account.accountHolder);

// Public method
account.activateAccount(4589);

// Wrong PIN
account.activateAccount(1111);

// Child object
const premium = new PremiumAccount();
premium.accountStatus();