const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = Element.querySelectorAll(".price")

  const total_price = 0;
  prices.forEach(price => {
	  total_price += parseInt(price.textContent) 
  });
	//creating the table
	
  const tablerow = Document.createElement("tr");
  const tablecell = Document.createElement("td");
	
  tablecell.colspan = 2;
  tablecell.textContent = total_price;
  tablerow.appendChild(tablecell);
  Document.getElementById("table").appendChild(tablecell);	
 	 
};

getSumBtn.addEventListener("click", getSum);

