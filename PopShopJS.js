let numberOfItems = 0;
const tax = 0.0825;
let idNum = 0;

function closePurchaseSuccessful()
{
	document.getElementById("purchase-successful").style.visibility = "hidden";
	document.getElementById("purchase-successful").style.transform = "translate(0px, -6000px)";
	document.getElementById("purchase-successful").style.visibility = "visible";
}

function loadDropdownShopOutput()
{
	var getSelectedItem = document.getElementById("shop-filter");
	var selectedDropdownItem = getSelectedItem.options[getSelectedItem.selectedIndex].text;

	console.log(selectedDropdownItem);
			
	if(selectedDropdownItem == "Clothing")
	{
		document.getElementById("clothes-shop").style.visibility = "visible";
		document.getElementById("album-shop").style.visibility = "hidden";
		document.getElementById("merch-shop").style.visibility = "hidden";
		document.getElementById("all-shop").style.visibility = "hidden";
	}
	else if(selectedDropdownItem == "Albums")
	{
		document.getElementById("clothes-shop").style.visibility = "hidden";
		document.getElementById("album-shop").style.visibility = "visible";
		document.getElementById("merch-shop").style.visibility = "hidden";
		document.getElementById("all-shop").style.visibility = "hidden";
	}
	else if(selectedDropdownItem == "Merch")
	{
		document.getElementById("clothes-shop").style.visibility = "hidden";
		document.getElementById("album-shop").style.visibility = "hidden";
		document.getElementById("merch-shop").style.visibility = "visible";
		document.getElementById("all-shop").style.visibility = "hidden";
	}
	else if(selectedDropdownItem == "All")
	{
		document.getElementById("clothes-shop").style.visibility = "hidden";
		document.getElementById("album-shop").style.visibility = "hidden";
		document.getElementById("merch-shop").style.visibility = "hidden";
		document.getElementById("all-shop").style.visibility = "visible";
	}
}

/* remove later
console.log(document.getElementById("cloth1price").getAttribute("data-price"));
*/
function movePurchaseSuccessful(clicked_id) 
{
	var elem = document.getElementById("purchase-successful");   
	var ycoord = -5000;
	var id = setInterval(frame, 1);
	function frame() 
	{
		if(ycoord == -4000) 
		{
		clearInterval(id);
		} 
		else 
		{
			ycoord += 5; 
			elem.style.transform = "translate(0px, " + ycoord + "px)"; 
		}
	}
  numberOfItems++;
  document.getElementById("amount-of-items").innerHTML = numberOfItems;
  document.getElementById("amount-of-cart-items").innerHTML = numberOfItems;
  
  // remove later
  // console.log(document.getElementById("cloth-1-price").textContent);
  console.log(clicked_id);
  if(clicked_id === 'cloth-1-cart-button')
  {
	  moveInformationToCart(document.getElementById("cloth-1-item-name").innerHTML, document.getElementById("cloth-1-quantity").value, document.getElementById("cloth-1-price").innerHTML);
	  console.log("cloth 1 button" + document.getElementById("cloth-1-price").innerHTML);
  }
}

function calculateCloth1Price()
{
	if(document.getElementById('cloth-1-quantity').value != 0)
	{
		if(document.getElementById('size-cloth-1').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-1-quantity').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1').innerHTML = newTaxValue;
			document.getElementById('cloth-1-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-1-quantity').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1').innerHTML = newTaxValue;
			document.getElementById('cloth-1-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-1-quantity').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1').innerHTML = newTaxValue;
			document.getElementById('cloth-1-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-1-quantity').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1').innerHTML = newTaxValue;
			document.getElementById('cloth-1-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-1-quantity').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1').innerHTML = newTaxValue;
			document.getElementById('cloth-1-price').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-1').innerHTML = '$0.00';
		document.getElementById('cloth-1-price').innerHTML = '$0.00';
	}
}

function calculateAlbum1Price()
{
	if(document.getElementById('album-1-quantity').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('album-1-quantity').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('album-1-quantity').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-album-1').innerHTML = newTaxValue;
		document.getElementById('album-1-price').innerHTML = fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-album-1').innerHTML = '$0.00';
		document.getElementById('album-1-price').innerHTML = '$0.00';
	}
}

function calculateMerch1Price()
{
	if(document.getElementById('merch-1-quantity').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('merch-1-quantity').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('merch-1-quantity').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-merch-1').innerHTML = '$' + newTaxValue;
		document.getElementById('merch-1-price').innerHTML = '$' + fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-merch-1').innerHTML = '$0.00';
		document.getElementById('merch-1-price').innerHTML = '$0.00';
	}
}


let totalCartPrice = 0;
function moveInformationToCart(itemName, itemQuantity, itemPrice)
{
	var cartContainer = document.getElementById("check-out-entries-container");
	var newShopItemElement = document.createElement("div");
	newShopItemElement.classList.add("shop-item-element");
	var newid = idNum.toString();
	console.log(newid);
	newShopItemElement.id = newid;
	newShopItemElement.setAttribute("onclick", "document.getElementById(this.id).style.display = 'none'");
	cartContainer.appendChild(newShopItemElement);
	
	var shopItemTocartName = document.createElement("div");
	shopItemTocartName.classList.add("shop-item-tocart-name");
	var cartItemName = document.createTextNode(itemName);
	shopItemTocartName.appendChild(cartItemName);
	newShopItemElement.appendChild(shopItemTocartName);
	
	var shopItemTocartQuantity = document.createElement("div");
	shopItemTocartQuantity.classList.add("shop-item-tocart-quantity");
	var cartItemQuantity = document.createTextNode(itemQuantity);
	shopItemTocartQuantity.appendChild(cartItemQuantity);
	newShopItemElement.appendChild(shopItemTocartQuantity);
	
	var shopItemTocartPrice = document.createElement("div");
	shopItemTocartPrice.classList.add("shop-item-tocart-price");
	var cartItemPrice = document.createTextNode(itemPrice);
	shopItemTocartPrice.appendChild(cartItemPrice);
	newShopItemElement.appendChild(shopItemTocartPrice);
	
	var onHoverCartItem = document.createElement("div");
	onHoverCartItem.classList.add("on-hover-cart-item");
	var hoverText = document.createTextNode("Click to Remove");
	onHoverCartItem.appendChild(hoverText);
	newShopItemElement.appendChild(onHoverCartItem);

	
	idNum = parseInt(newid ,10);
	idNum++;
	console.log(idNum);
	
	var newitemPrice = parseFloat(itemPrice);
	totalCartPrice += newitemPrice;
	var newtotalCartPrice = totalCartPrice.toFixed(2);
	
	
	let taxtotalCartPrice = totalCartPrice * tax;
	var newtaxtotalCartPrice = taxtotalCartPrice.toFixed(2);
	console.log(taxtotalCartPrice);
	var newertotalCartPrice = parseFloat(newtotalCartPrice) + parseFloat(newtaxtotalCartPrice);
	var newernewertotalCartPrice = newertotalCartPrice.toFixed(2);
	
	
	document.getElementById("return-total-tax-container").innerHTML = newtaxtotalCartPrice;
	document.getElementById("return-total-price-container").innerHTML = newernewertotalCartPrice;
	
	document.getElementById("returning-cart-total-price").innerHTML = newernewertotalCartPrice;
}

function activatePurchaseItems()
{
	document.getElementById('cart-purchase-successful').style.display = 'block';
	var elements = document.getElementsByClassName("shop-item-element");
	for(var i = 0; i < elements.length; i++)
	{
		elements[i].style.display = "none";
	}
	
	document.getElementById("return-total-tax-container").innerHTML = "";
	document.getElementById("return-total-price-container").innerHTML = "";
	totalCartPrice = 0;
	numberOfItems = 0;
	document.getElementById("amount-of-items").innerHTML = numberOfItems;
}
