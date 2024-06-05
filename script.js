const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	// Get all price elements
    const priceElements = document.querySelectorAll('.price');
    
    // Calculate the total price
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });
    
    // Create a new row for the total price
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    
    // Set the attributes for the total cell
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    // Append the total cell to the new row
    newRow.appendChild(totalCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
 
};

getSumBtn.addEventListener("click", getSum);

