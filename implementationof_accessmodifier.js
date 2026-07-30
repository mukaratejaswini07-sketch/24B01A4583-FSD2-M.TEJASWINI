"use strict";
// Parent Class
class BankAccount {
    // Public property
    accountHolder = "John Carter";
    // Private property
    pinCode = 4589;
    // Protected property
    isActive = false;
    // Public method
    activateAccount(enteredPin) {
        if (this.verifyPin(enteredPin)) {
            this.isActive = true;
            console.log("Account Activated Successfully");
        }
        else {
            console.log("Incorrect PIN");
        }
    }
    // Private method
    verifyPin(enteredPin) {
        return this.pinCode === enteredPin;
    }
}
// Child Class
class PremiumAccount extends BankAccount {
    accountStatus() {
        if (this.isActive) {
            console.log("Account Status: Active");
        }
        else {
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
