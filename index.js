function makeAccount(accountNumber) {
  var balance = 0;
  var transactions = [];

  return {
    deposit: function(amount) {
      this.logTransaction('deposit', amount);
      balance += amount;
      return amount;
    },

    withdraw: function(amount) {
      if (amount > balance) {
        amount = balance;
      }

      this.logTransaction('withdrawal', amount);
      balance -= amount;
      return amount;
    },

    getBalance: function() {
      return balance;
    },

    logTransaction: function(type, amount) {
      transactions.push({
        type: type,
        amount: amount,
      });
    },

    transactions: function() {
      return transactions;
    },

    getAccountNumber: function() {
      return accountNumber;
    },
  }
}

function makeBank() {
  var accountNumber = 101;
  var accounts = [];

  return {
    openAccount: function() {
      var account = makeAccount(accountNumber);
      accounts.push(account);
      accountNumber += 1;
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },

    getAccounts: function() {
      return accounts;
    },
  };
}
