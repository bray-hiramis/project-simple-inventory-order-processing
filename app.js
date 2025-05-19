const inventory = [];
let strMessage;

// Adding inventory
function addItemToInventory(inventory, itemName, itemPrice, itemQuantity) {
    const invList = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    }
    inventory.push(invList);
    strMessage = `${itemName} added to inventory.`;
    console.log(strMessage);
    return inventory;
}
// console.log(addItemToInventory(inventory, "CamEra", 299, 2));

// removing inventory
function removeItemFromInventory(inventory, itemName) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === itemName) {
            inventory.splice(i, 1);
            strMessage = `${itemName} removed from inventory.`;
            console.log(strMessage);
            return inventory;
        } 
    }
    strMessage = `${itemName} not found in inventory.`;
    console.log(strMessage);
    return inventory;
}
// console.log(removeItemFromInventory(inventory, "Mouse"));

// calculate order
function calculateOrderTotal(orderList) {
    if (orderList.length === 0) {
            return 0;
    }

    // Calculating the price per quantity
    let totalCost = 0;
    for (let i = 0; i < orderList.length; i++) {
        const currentItem = orderList[i];
        const itemCost = currentItem.price * currentItem.quantity;
        totalCost = totalCost + itemCost;
    }

    // 15% discount
    if (totalCost > 500) {
        const discount15 = 0.15;
        totalCost = totalCost - (totalCost * discount15);
    }

    // Finding "CLEARANCE"
    let foundClearance = false;
    for (let i = 0; i < orderList.length; i++) {
        let hasClearanceItem = orderList[i].name === "CLEARANCE";
        if (hasClearanceItem) {
            foundClearance = true;
            break;
        }
    }

    // Apply discount worth 50 if "CLEARANCE" is found
    if (foundClearance) {
        totalCost = totalCost - 50;
    }
    return totalCost;
}

// formatting currency
function formatCurrency(numericAmount) {
    const formattedAmount = numericAmount.toFixed(2);
    strMessage = `$${formattedAmount}`;
    return strMessage;
}

// checking if array is empty
function displayInventory(inventory) {
    if (inventory.length === 0) {
        strMessage = 'Inventory is empty';
        console.log(strMessage);
    } else {
            for (let i = 0; i < inventory.length; i++) {
            strMessage = `${i + 1}. ${inventory[i].name} - Qty: ${inventory[i].quantity} @ ${formatCurrency(inventory[i].price)} each.`;
            console.log(strMessage);
            // break
        }
    }
    return inventory;
}

// Testing the code above:

// ... (Your const inventory = []; and let strMessage; at the top) ...

// ... (Your addItemToInventory function definition) ...
// ... (Your removeItemFromInventory function definition) ...
// ... (Your calculateOrderTotal function definition) ...
// ... (Your formatCurrency function definition) ...
// ... (Your displayInventory function definition) ...


// --- User Story 7: Demonstration Starts Here ---

console.log("--- Starting Inventory Demonstration ---");

// 1. Show the initial empty inventory
console.log("\nInitial Inventory:");
displayInventory(inventory); // Call the display function

// 2. Add a few items to the inventory
console.log("\nAdding Items to Inventory:");
// Call addItemToInventory multiple times. The function logs the confirmation messages.
addItemToInventory(inventory, "Laptop", 800.00, 1);
addItemToInventory(inventory, "Keyboard", 75.00, 2);
addItemToInventory(inventory, "Mouse", 25.00, 5);
addItemToInventory(inventory, "CLEARANCE TV", 150.00, 1); // Add a CLEARANCE item
addItemToInventory(inventory, "HDMI Cable", 15.00, 3);


// 3. Display the inventory again to see the added items
console.log("\nInventory After Adding Items:");
displayInventory(inventory); // Call the display function again

// 4. Remove an item that exists
console.log("\nRemoving 'Keyboard' from Inventory:");
// Call removeItemFromInventory. The function logs the removed/not found message.
removeItemFromInventory(inventory, "Keyboard");

// 5. Display inventory after removing an existing item
console.log("\nInventory After Removing 'Keyboard':");
displayInventory(inventory);

// 6. Remove an item that does NOT exist
console.log("\nRemoving 'Webcam' from Inventory:");
// Call removeItemFromInventory. The function logs the removed/not found message.
removeItemFromInventory(inventory, "Webcam");

// 7. Display inventory after trying to remove a non-existent item (should be unchanged)
console.log("\nInventory After Trying to Remove 'Webcam':");
displayInventory(inventory);

// 8. Demonstrate calculating an order total with discounts
console.log("\n--- Calculating a Sample Customer Order ---");
// Create a separate array for a customer's order.
// This order should be designed to test your discount rules.
const customerOrder = [
    { name: "Laptop", price: 800.00, quantity: 1 }, // Makes total > 500
    { name: "Mouse", price: 25.00, quantity: 3 },
    { name: "CLEARANCE TV", price: 150.00, quantity: 1 }, // Includes CLEARANCE item
    { name: "HDMI Cable", price: 15.00, quantity: 2 },
    { name: "Monitor", price: 300.00, quantity: 1 } // Also contributes to total > 500
];

console.log("Order items being calculated...");
// Call calculateOrderTotal with the customerOrder array.
// This function returns the total, it doesn't log the final total itself.
const orderTotal = calculateOrderTotal(customerOrder);

// 9. Format the calculated total using formatCurrency
const formattedOrderTotalString = formatCurrency(orderTotal);

// 10. Log the final formatted order total
console.log(`Calculated Order Total: ${formattedOrderTotalString}`); // Combine text and formatted total

// 11. Demonstrate calculating an empty order total
console.log("\n--- Calculating an Empty Order ---");
const emptyOrder = [];
const emptyOrderTotal = calculateOrderTotal(emptyOrder);
const formattedEmptyTotal = formatCurrency(emptyOrderTotal);
console.log(`Calculated Empty Order Total: ${formattedEmptyTotal}`); // Should be $0.00

console.log("\n--- Demonstration Complete ---");