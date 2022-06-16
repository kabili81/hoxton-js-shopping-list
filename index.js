//Instructions
//- Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
//- Store this information using the most appropriated data structures we've studied so far
//- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
//- Output a list displaying each item and its price
//- Output the total at the end

let products = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"]

products.push("Banana")
products.push("Orange")

for (let product of products) {
    console.log(`${product}`)
}

let prices = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00, 1.50, 1.10]

let total = 0
for (let price of prices) {
   console.log(`${price}`)
}

for (let price of prices) {
    console.log(`
    Current Total: ${total}
    Adding Price: ${price}
    `)
    total =+ price
 }







