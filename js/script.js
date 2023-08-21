let total =0;
function cardList(target){
    const selectedItemContainer = document.getElementById("calculation-entry");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(itemName);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    totalPrice = total.toFixed(2);
    document.getElementById("total-price").innerText = totalPrice; 
    document.getElementById("discount-price").innerText = totalPrice; 
    const purchasebtn = document.getElementById("purchase"); 
    const applybtn = document.getElementById("apply"); 

    if(totalPrice >= 200){
        applybtn.disabled = false;
    }
    else{
        applybtn.disabled = true;
    }
    
    if(totalPrice === 0){
        purchasebtn.disabled = true;
    }
    else{
        purchasebtn.disabled = false;
    }


    document.getElementById('apply').addEventListener('click', function (){
        const couponCode = getInputFieldValueById('coupon');
        if (couponCode === 'SELL200') {
            const discountPrice = (20/100)*totalPrice;
            const discountTotal = totalPrice - discountPrice;
            setTextElementValueById('discount', discountPrice.toFixed(2));
            setTextElementValueById('discount-price', discountTotal.toFixed(2));
        }
    })
}

document.getElementById('reload').addEventListener('click', function () {
    window.location.reload();
})