/*
    1. Imagina que tienes una lista de transacciones financieras y deseas realizar varias operaciones 
        de procesamiento de datos. Usa las siguientes instrucciones como guía para completar el 
        ejercicio:
    2. Calcular el Saldo Total: 
        - Utiliza el método reduce para calcular y mostrar el saldo total de todas las transacciones.
    3. Encontrar la Transacción más Grande (Ingreso o Egreso): 
        - Emplea el método reduce para encontrar la transacción con el mayor monto (ya sea ingreso o 
        egreso) y muéstrale en la consola.
    4. Filtrar Transacciones de Compra: 
        - Usa el método filter para obtener y mostrar en la consola solo las transacciones de compra (
        con montos negativos).
    5. Encontrar una Transacción por Descripción: 
        - Utiliza el método find para buscar y mostrar en la consola una transacción específica por 
        su descripción.
    6. Encontrar el Índice de una Transacción por Monto: 
        - Emplea el método findIndex para encontrar y mostrar en la consola el índice de una 
        transacción específica por su monto.
    7. Actualizar Descripciones de Transacciones: 
        - Utiliza el método forEach para actualizar las descripciones de las transacciones. Añade el 
        prefijo "Gasto: " a las transacciones con montos negativos y "Ingreso: " a las transacciones 
        con montos positivos. Muestra las transacciones actualizadas en la consola.
 */
const transactions = [{
        id : 1,
        description : 'Grocery Shopping',
        amount : -50
    },
    { 
        id : 2,
        description : 'Salary Deposit',
        amount : 2000
    },
    {
        id : 3,
        description : 'Utility Bill Payment',
        amount : -100
    },
    {
        id : 4,
        description : 'Online Purchase',
        amount : -30
    }
]
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions [0])
console.log('Largest Transaction: ', largestTransaction)

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(' Purchase Transactions: ', purchaseTransactions)

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase')
console.log('Specific Transaction: ', specificTransaction)

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('Index Transaction With Amount -30: ', indexTransactionWithAmount)

transactions.forEach(transaction => {
        if(transaction.amount < 0){
            transaction.description = `Expense: ${transaction.description}`
        }else{
            transaction.description = `Income: ${transaction.description}`
        }
    }
)
console.log('Udated Transactions: ',transactions)