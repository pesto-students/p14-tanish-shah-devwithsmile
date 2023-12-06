// Banking application with unique transaction IDs using symbols

const generateTransactionId = (() => {
    let counter = 0;
  
    return () => {
      counter++;
      const transactionId = Symbol(`TRANSACTION_ID_${counter}`);
      return transactionId;
    };
  })();
  
  // Example usage:
  
  const transaction1 = generateTransactionId();
  console.log(transaction1);
  
  const transaction2 = generateTransactionId();
  console.log(transaction2);
  
  const transaction3 = generateTransactionId();
  console.log(transaction3);
  