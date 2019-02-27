let numberOfItems = 0;
const tax = 0.0825;
let idNum = 0;

var tourdate;
var newtourdate;
var tourdateall;
var newtourdateall;

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
	else if(selectedDropdownItem == "Merch/Tickets")
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
  
  console.log(clicked_id);
  if(clicked_id === 'cloth-1-cart-button')
  {
	moveInformationToCart(document.getElementById("cloth-1-item-name").innerHTML, document.getElementById("cloth-1-quantity").value, document.getElementById("cloth-1-price").innerHTML);
	console.log("cloth 1 button" + document.getElementById("cloth-1-price").innerHTML);
  }
  else if(clicked_id === 'cloth-2-cart-button')
  {
	moveInformationToCart(document.getElementById("cloth-2-item-name").innerHTML, document.getElementById("cloth-2-quantity").value, document.getElementById("cloth-2-price").innerHTML);
	console.log("cloth 2 button" + document.getElementById("cloth-2-price").innerHTML);
  }
  else if(clicked_id === 'cloth-3-cart-button')
  {
	moveInformationToCart(document.getElementById("cloth-3-item-name").innerHTML, document.getElementById("cloth-3-quantity").value, document.getElementById("cloth-3-price").innerHTML);
	console.log("cloth 3 button" + document.getElementById("cloth-3-price").innerHTML);
  }
  else if(clicked_id == "merch-1-cart-button")
  {
	moveInformationToCart(document.getElementById("merch-1-item-name").innerHTML, document.getElementById("merch-1-quantity").value, document.getElementById("merch-1-price").innerHTML);
	console.log("merch 1 button" + document.getElementById("merch-1-price").innerHTML);
  }
  else if(clicked_id == "merch-2-cart-button")
  {
	moveInformationToCart(document.getElementById("merch-2-item-name").innerHTML + " " + newtourdate , document.getElementById("merch-2-quantity").value, document.getElementById("merch-2-price").innerHTML);
	console.log("merch 2 button" + document.getElementById("merch-2-price").innerHTML);
  }
   else if(clicked_id == "album-1-cart-button")
  {
	moveInformationToCart(document.getElementById("album-1-item-name").innerHTML, document.getElementById("album-1-quantity").value, document.getElementById("album-1-price").innerHTML);
	console.log("album 1 button" + document.getElementById("album-1-price").innerHTML);
  }
  else if(clicked_id == "album-2-cart-button")
  {
	moveInformationToCart(document.getElementById("album-2-item-name").innerHTML, document.getElementById("album-2-quantity").value, document.getElementById("album-2-price").innerHTML);
	console.log("album 2 button" + document.getElementById("album-2-price").innerHTML);
  }
  else if(clicked_id == "cloth-1-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("cloth-1-item-nameall").innerHTML, document.getElementById("cloth-1-quantityall").value, document.getElementById("cloth-1-priceall").innerHTML);
	console.log("all cloth 1 button" + document.getElementById("cloth-1-priceall").innerHTML);
  }
  else if(clicked_id == "cloth-2-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("cloth-2-item-nameall").innerHTML, document.getElementById("cloth-2-quantityall").value, document.getElementById("cloth-2-priceall").innerHTML);
	console.log("all cloth 2 button" + document.getElementById("cloth-2-priceall").innerHTML);
  }
  else if(clicked_id == "cloth-3-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("cloth-3-item-nameall").innerHTML, document.getElementById("cloth-3-quantityall").value, document.getElementById("cloth-3-priceall").innerHTML);
	console.log("all cloth 3 button" + document.getElementById("cloth-3-priceall").innerHTML);
  }
  else if(clicked_id == "merch-1-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("merch-1-item-nameall").innerHTML, document.getElementById("merch-1-quantityall").value, document.getElementById("merch-1-priceall").innerHTML);
	console.log("merch 1 button all" + document.getElementById("merch-1-priceall").innerHTML);
  }
  else if(clicked_id == "merch-2-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("merch-2-item-nameall").innerHTML + " " + newtourdateall , document.getElementById("merch-2-quantityall").value, document.getElementById("merch-2-priceall").innerHTML);
	console.log("merch 2 button all" + document.getElementById("merch-2-priceall").innerHTML);
  }
   else if(clicked_id == "album-1-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("album-1-item-nameall").innerHTML, document.getElementById("album-1-quantityall").value, document.getElementById("album-1-priceall").innerHTML);
	console.log("album 1 button all" + document.getElementById("album-1-priceall").innerHTML);
  }
  else if(clicked_id == "album-2-cart-buttonall")
  {
	moveInformationToCart(document.getElementById("album-2-item-nameall").innerHTML, document.getElementById("album-2-quantityall").value, document.getElementById("album-2-priceall").innerHTML);
	console.log("album 2 button all" + document.getElementById("album-2-priceall").innerHTML);
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

function calculateCloth1PriceAll()
{
	if(document.getElementById('cloth-1-quantityall').value != 0)
	{
		if(document.getElementById('size-cloth-1all').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-1-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-1-quantityall').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1all').innerHTML = newTaxValue;
			document.getElementById('cloth-1-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1all').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-1-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-1-quantityall').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1all').innerHTML = newTaxValue;
			document.getElementById('cloth-1-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1all').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-1-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-1-quantityall').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1all').innerHTML = newTaxValue;
			document.getElementById('cloth-1-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1all').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-1-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-1-quantityall').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1all').innerHTML = newTaxValue;
			document.getElementById('cloth-1-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-1all').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-1-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-1-quantityall').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-1all').innerHTML = newTaxValue;
			document.getElementById('cloth-1-priceall').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-1all').innerHTML = '$0.00';
		document.getElementById('cloth-1-priceall').innerHTML = '$0.00';
	}
}

function calculateCloth2Price()
{
	if(document.getElementById('cloth-2-quantity').value != 0)
	{
		if(document.getElementById('size-cloth-2').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-2-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-2-quantity').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2').innerHTML = newTaxValue;
			document.getElementById('cloth-2-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-2-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-2-quantity').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2').innerHTML = newTaxValue;
			document.getElementById('cloth-2-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-2-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-2-quantity').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2').innerHTML = newTaxValue;
			document.getElementById('cloth-2-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-1-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-1-quantity').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2').innerHTML = newTaxValue;
			document.getElementById('cloth-2-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-2-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-2-quantity').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2').innerHTML = newTaxValue;
			document.getElementById('cloth-2-price').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-1').innerHTML = '$0.00';
		document.getElementById('cloth-1-price').innerHTML = '$0.00';
	}
}

function calculateCloth2PriceAll()
{
	if(document.getElementById('cloth-2-quantityall').value != 0)
	{
		if(document.getElementById('size-cloth-2all').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-2-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-2-quantityall').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2all').innerHTML = newTaxValue;
			document.getElementById('cloth-2-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2all').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-2-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-2-quantityall').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2all').innerHTML = newTaxValue;
			document.getElementById('cloth-2-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2all').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-2-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-2-quantityall').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2all').innerHTML = newTaxValue;
			document.getElementById('cloth-2-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2all').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-2-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-2-quantityall').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2all').innerHTML = newTaxValue;
			document.getElementById('cloth-2-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-2all').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-2-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-2-quantityall').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-2all').innerHTML = newTaxValue;
			document.getElementById('cloth-2-priceall').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-2all').innerHTML = '$0.00';
		document.getElementById('cloth-2-priceall').innerHTML = '$0.00';
	}
}

function calculateCloth3Price()
{
	if(document.getElementById('cloth-3-quantity').value != 0)
	{
		if(document.getElementById('size-cloth-3').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-3-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-3-quantity').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3').innerHTML = newTaxValue;
			document.getElementById('cloth-3-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-3-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-3-quantity').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3').innerHTML = newTaxValue;
			document.getElementById('cloth-3-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-3-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-3-quantity').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3').innerHTML = newTaxValue;
			document.getElementById('cloth-3-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-3-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-3-quantity').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3').innerHTML = newTaxValue;
			document.getElementById('cloth-3-price').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-3-quantity').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-3-quantity').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3').innerHTML = newTaxValue;
			document.getElementById('cloth-3-price').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-3').innerHTML = '$0.00';
		document.getElementById('cloth-3-price').innerHTML = '$0.00';
	}
}

function calculateCloth3PriceAll()
{
	if(document.getElementById('cloth-3-quantityall').value != 0)
	{
		if(document.getElementById('size-cloth-3all').value === 'XS')
		{
			var taxTotalValue = 10 * (document.getElementById('cloth-3-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (10 * (document.getElementById('cloth-3-quantityall').value)) + (10 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3all').innerHTML = newTaxValue;
			document.getElementById('cloth-3-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3all').value === 'S')
		{
			var taxTotalValue = 15 * (document.getElementById('cloth-3-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (15 * (document.getElementById('cloth-3-quantityall').value)) + (15 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3all').innerHTML = newTaxValue;
			document.getElementById('cloth-3-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3all').value === 'M')
		{
			var taxTotalValue = 20 * (document.getElementById('cloth-3-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (20 * (document.getElementById('cloth-3-quantityall').value)) + (20 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3all').innerHTML = newTaxValue;
			document.getElementById('cloth-3-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3all').value === 'L')
		{
			var taxTotalValue = 25 * (document.getElementById('cloth-3-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (25 * (document.getElementById('cloth-3-quantityall').value)) + (25 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3all').innerHTML = newTaxValue;
			document.getElementById('cloth-3-priceall').innerHTML = fixedNewTaxTotalValue;
		}
		else if(document.getElementById('size-cloth-3all').value === 'XL')
		{
			var taxTotalValue = 30 * (document.getElementById('cloth-3-quantityall').value) * tax;
			var newTaxValue = taxTotalValue.toFixed(2);
			var newTaxTotalValue = (30 * (document.getElementById('cloth-3-quantityall').value)) + (30 * tax);
			var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
			document.getElementById('tax-cloth-3all').innerHTML = newTaxValue;
			document.getElementById('cloth-3-priceall').innerHTML = fixedNewTaxTotalValue;
		}
	}
	else
	{
		document.getElementById('tax-cloth-3all').innerHTML = '$0.00';
		document.getElementById('cloth-3-priceall').innerHTML = '$0.00';
	}
}

function calculateAlbum1Price()
{
	if(document.getElementById('album-1-quantity').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('album-1-quantity').value * tax;
		console.log(document.getElementById('album-1-quantity').value);
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('album-1-quantity').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-album-1').innerHTML = newTaxValue;
		console.log(newTaxValue);
		document.getElementById('album-1-price').innerHTML = fixedNewTaxTotalValue;
		console.log(fixedNewTaxTotalValue);
	}
	else
	{
		document.getElementById('tax-album-1').innerHTML = '$0.00';
		document.getElementById('album-1-price').innerHTML = '$0.00';
	}
}

function calculateAlbum1PriceAll()
{
	if(document.getElementById('album-1-quantityall').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('album-1-quantityall').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('album-1-quantityall').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-album-1all').innerHTML = newTaxValue;
		document.getElementById('album-1-priceall').innerHTML = fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-album-1all').innerHTML = '$0.00';
		document.getElementById('album-1-priceall').innerHTML = '$0.00';
	}
}

function calculateAlbum2PriceAll()
{
	if(document.getElementById('album-2-quantityall').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('album-2-quantityall').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('album-2-quantityall').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-album-2all').innerHTML = newTaxValue;
		document.getElementById('album-2-priceall').innerHTML = fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-album-2all').innerHTML = '$0.00';
		document.getElementById('album-2-priceall').innerHTML = '$0.00';
	}
}

function calculateAlbum2Price()
{
	if(document.getElementById('album-2-quantity').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('album-2-quantity').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('album-2-quantity').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-album-2').innerHTML = newTaxValue;
		document.getElementById('album-2-price').innerHTML = fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-album-2').innerHTML = '$0.00';
		document.getElementById('album-2-price').innerHTML = '$0.00';
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
		document.getElementById('tax-merch-1').innerHTML = newTaxValue;
		console.log(newTaxValue);
		document.getElementById('merch-1-price').innerHTML = fixedNewTaxTotalValue;
		console.log(fixedNewTaxTotalValue);
	}
	else
	{
		document.getElementById('tax-merch-1').innerHTML = '$0.00';
		document.getElementById('merch-1-price').innerHTML = '$0.00';
	}
}

function calculateMerch1PriceAll()
{
	if(document.getElementById('merch-1-quantityall').value != 0)
	{
		var taxTotalValue = 20 * document.getElementById('merch-1-quantityall').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (20 * (document.getElementById('merch-1-quantityall').value)) + (20 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-merch-1all').innerHTML = newTaxValue;
		document.getElementById('merch-1-priceall').innerHTML = fixedNewTaxTotalValue;
	}
	else
	{
		document.getElementById('tax-merch-1all').innerHTML = '$0.00';
		document.getElementById('merch-1-priceall').innerHTML = '$0.00';
	}
}


function calculateMerch2Price()
{
	if(document.getElementById('merch-2-quantity').value != 0)
	{
		var taxTotalValue = 10 * document.getElementById('merch-2-quantity').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (10 * (document.getElementById('merch-2-quantity').value)) + (10 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-merch-2').innerHTML = newTaxValue;
		document.getElementById('merch-2-price').innerHTML = fixedNewTaxTotalValue;
		tourdate = document.getElementById("choose-tour-date");
		newtourdate = tourdate.options[tourdate.selectedIndex].text;
	}
	else
	{
		document.getElementById('tax-merch-2').innerHTML = '$0.00';
		document.getElementById('merch-2-price').innerHTML = '$0.00';
	}
}

function calculateMerch2PriceAll()
{
	if(document.getElementById('merch-2-quantityall').value != 0)
	{
		var taxTotalValue = 10 * document.getElementById('merch-2-quantityall').value * tax;
		var newTaxValue = taxTotalValue.toFixed(2);
		var newTaxTotalValue = (10 * (document.getElementById('merch-2-quantityall').value)) + (10 * tax);
		var fixedNewTaxTotalValue = newTaxTotalValue.toFixed(2);
		document.getElementById('tax-merch-2all').innerHTML = newTaxValue;
		document.getElementById('merch-2-priceall').innerHTML = fixedNewTaxTotalValue;
		tourdateall = document.getElementById("choose-tour-dateall");
		newtourdateall = tourdateall.options[tourdateall.selectedIndex].text;
	}
	else
	{
		document.getElementById('tax-merch-2all').innerHTML = '$0.00';
		document.getElementById('merch-2-priceall').innerHTML = '$0.00';
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
	newShopItemElement.setAttribute("onclick", "removeCartItemDisplay(this.id)");
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
	
	newShopItemElement.value = itemPrice;
	console.log(itemPrice);
	var onHoverCartItem = document.createElement("div");
	onHoverCartItem.classList.add("on-hover-cart-item");
	var hoverText = document.createTextNode("Click to Remove");
	onHoverCartItem.appendChild(hoverText);
	newShopItemElement.appendChild(onHoverCartItem);

	
	idNum = parseInt(newid ,10);
	idNum++;
	console.log(idNum);
	
	var newitemPrice = parseFloat(itemPrice);
	console.log(newitemPrice);
	totalCartPrice += newitemPrice;
	console.log(totalCartPrice);
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

function removeCartItemDisplay(clicked_id)
{
	document.getElementById(clicked_id).style.display = 'none';
	var carttotal = document.getElementById("amount-of-items").innerHTML;
	var newcarttotal = parseInt(carttotal);
	newcarttotal--;
	document.getElementById("amount-of-items").innerHTML = newcarttotal;
	
	var total = document.getElementById("return-total-price-container").innerHTML;
	var taxtotal = document.getElementById("return-total-tax-container").innerHTML;
	var inttotal = parseFloat(total);
	var inttaxtotal = parseFloat(taxtotal);
	console.log(inttotal);
	console.log(inttaxtotal);
	
	var itemprice = document.getElementById(clicked_id).value;
	var newitemprice = parseFloat(itemprice);
	console.log(newitemprice);
	
	var minustotal = inttotal - inttaxtotal; 
	let newestotal = minustotal - newitemprice;
	console.log(newestotal);
	document.getElementById("return-total-tax-container").innerHTML = "0";
	let newestax = newestotal * 0.0825;
	newestotal += newestax;
	var newestotall = newestotal.toFixed(2);
	var newestaxx = newestax.toFixed(2);
	
	var newestotal1 = newestotall.toString();
	
	console.log(newestaxx);
	console.log(newestotall);
	
	document.getElementById("return-total-tax-container").innerHTML = newestaxx;
	document.getElementById("return-total-price-container").innerHTML = newestotal1;
	
}