const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

const pricelement = Element.querySelectorAll('.price')

let totalprice = 0;

pricelement.ForEach(pricelements =>{
	totalprice += parseFloat(pricelements.textcontent)
});	

const table = document.querySelector('table')
const newrow = document.createElement('tr')
const totalvalue = document.createElement('td')

totalvalue.setAttribute('colspan', 2)
totalvalue.textcontent = 'Total Price: ${totalprice}'	

newrow.append(totalvalue)

table.appendChild(newrow);
	
	 
};

getSumBtn.addEventListener("click", getSum);

