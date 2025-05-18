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
console.log(addItemToInventory(inventory, "CamEra", 299, 2));

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
console.log(removeItemFromInventory(inventory, "Mouse"));

// calculate order
function calculateOrderTotal(orderList) {
    if (orderList.length === 0) {
            return 0;
    }

    let totalCost = 0;
    for (let i = 0; i < orderList.length; i++) {
        const currentItem = orderList[i];
        const itemCost = currentItem.price * currentItem.quantity;
        totalCost = totalCost + itemCost;
    }

    if (totalCost > 500) {
        const discount15 = 0.15;
        totalCost = totalCost - (totalCost * discount15);
    }

    let foundClearance = false;
    for (let i = 0; i < orderList.length; i++) {
        let hasClearanceItem = orderList[i].name === "CLEARANCE";
        if (hasClearanceItem) {
            foundClearance = true;
            break;
        }
    }

    if (foundClearance) {
        totalCost = totalCost - 50;
    }
    return totalCost;
}

// checking if array is empty
function displayInventory(inventory) {
    if (inventory.length === 0) {
        strMessage = 'Inventory is empty';
        console.log(strMessage);
    }
    for () {
        
    }

}