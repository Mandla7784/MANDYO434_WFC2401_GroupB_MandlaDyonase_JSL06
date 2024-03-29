// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


const  grabbingElementsInTheDOM = ( element) => document.getElementById(element);//function to getElemt form the DOM;
const creatingElementToTheDOM = (element) => document.createElement(element)

const  displayMenuItems  = (menu)=> {
    const menuContainer = grabbingElementsInTheDOM('menu');

    const menuList = Object.entries(menu).map(([category, list]) => {
        return { category, list };
    });

    menuList.forEach(item => {
        const categoryHeader = creatingElementToTheDOM('h1');
        categoryHeader.textContent = item.category;
        menuContainer.appendChild(categoryHeader);

        const listItems = creatingElementToTheDOM('ul');
        menuContainer.appendChild(listItems);

        item.list.forEach(menuItem => {
            const listItem = creatingElementToTheDOM('li');
            listItem.textContent = menuItem;
            listItems.appendChild(listItem);

            listItem.addEventListener('click', () =>   addToOrder(menuItem)); // Add selected item to the order
              
            
        });
    });
}

function addToOrder(itemName) {
    const orderItemList = grabbingElementsInTheDOM('order-items');
    const orderTotal = grabbingElementsInTheDOM('order-total')
    let totalPrice = parseFloat(orderTotal.textContent); // Parse total price as a number

    // Create a list item for the order
    const listItemForOrder = creatingElementToTheDOM('li');
    listItemForOrder.textContent = itemName;
    orderItemList.appendChild(listItemForOrder);

    // Add click event listener to each ordered item to remove it
    listItemForOrder.addEventListener('click', () => {
        listItemForOrder.remove(); // Remove the clicked item
        totalPrice -= 60; // Deduct the price of the removed item
        orderTotal.textContent = totalPrice.toFixed(2); // Update the total price
    });

    // Update the total price and order total display
    totalPrice += 60; // Assuming a fixed price of 60 for each item
    orderTotal.textContent = totalPrice.toFixed(2); // Display total with 2 decimal places
}
function initMenuSystem(menu) {
    displayMenuItems(menu); // Display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);





