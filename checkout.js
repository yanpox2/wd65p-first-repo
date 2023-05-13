//declaring inputs

const productName = 'T-shirt' 
const  quantity = 20
const amount = 100
const taxRate = 0.12 * 100
//Calculate the Subtotal

const subtotal = quantity * amount

//Calculate the Tax amount

const taxAmount = subtotal * taxRate / 100

//Calculate the Total amount

const totalAmount = subtotal + taxAmount

console.log ('Product Name: ' + productName)
console.log ('Quantity: ' + quantity)
console.log ('Amount: ' + amount)
console.log ('Tax Rate: ' + taxRate + '%')
console.log ('Subtotal: ' + subtotal)
console.log ('Tax Amount: ' + taxAmount)
console.log ('Total Amount: ' + totalAmount)
