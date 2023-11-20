
       const books = [
            [13, 80.0, 'Simon Sinek',         'Start with why',     1],
            [22, 59.9, 'J. Clark Scott',      'But how do it know', 2],
            [5,  50.0, 'Robert Cecil Martin', 'Clean Code',         3],
            [12, 45.0, 'Peter Thiel',         'Zero to One',        4],
            [9,  39.9, 'Kyle Simpson',        "You don't know JS",  5]
        ];

for(let book of books ){
// Access individual book details using array indices
let quantity = book[0];
let price = book[1];
let author = book[2];
let title = book[3];
let id = book[4];

//print 
console.log(`Book Number: ${quantity}, Price: ${price}, Author: ${author}, Title: ${title}, ID: ${id}`);
}


// Function to sell books and generate an invoice
function sellBook(bookName, quantity, availableBalance) {
    for (let book of books) {
        if (book[3] === bookName) {
            // Check if the required quantity is available
            if (book[0] >= quantity) {
                // Check if the customer's balance is sufficient
                const totalCost = book[1] * quantity;
                if (totalCost <= availableBalance) {
                    // Update stock and generate invoice
                    book[0] -= quantity;
                    return `Invoice\nBook: ${book[3]}\nQuantity: ${quantity}\nTotal Cost: $${totalCost}`;
                } else {
                    return "Insufficient balance to purchase the required quantity.";
                }
            } else {
                return "Insufficient quantity available in stock.";
            }
        }
    }
    return "Book not found.";
}

// Example usage
const invoice = sellBook('But how do it know', 3, 200);
console.log("\n-------------------\n"+invoice+"\n-------------------");

