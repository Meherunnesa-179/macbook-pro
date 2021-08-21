//memory price
const primaryMemory = document.getElementById('primary-memory');
const extraMemory = document.getElementById('extra-memory');
const memoryCost = document.getElementById('memory-cost');
primaryMemory.addEventListener("click",function(){
    memoryCost.innerText = "0";
    updateTotal()
})
extraMemory.addEventListener("click",function(){
    memoryCost.innerText = "180";
    updateTotal()
})
// ssd price
const primaryStorage = document.getElementById('primary-storage');
const secondaryStorage = document.getElementById('secondary-storage');
const extraLarge = document.getElementById('extra-large-storage');
const storageCost = document.getElementById('storage-cost');

primaryStorage.addEventListener("click",function(){
    storageCost.innerText = "0";
    updateTotal()
})
secondaryStorage.addEventListener("click",function(){
    storageCost.innerText = "100";
    updateTotal();
})
extraLarge.addEventListener("click",function(){
    storageCost.innerText = "180";
    updateTotal();
})

// Delivery charge

const freeDelivery = document.getElementById('free-delivery');
const deliveryWithCharge = document.getElementById('delivery-with-charge');
const deliveryCost = document.getElementById('delivery-cost');

freeDelivery.addEventListener("click",function(){
    deliveryCost.innerText = "0";
    updateTotal();
})
deliveryWithCharge.addEventListener("click",function(){
    deliveryCost.innerText = "20";
    updateTotal();
})

//best price
const bestPrice = document.getElementById('best-price')


//Update total price

const total = document.getElementById('total');
const grandTotal = document.getElementById('grand-total');

function updateTotal(){
   
    const primaryPrice = Number(bestPrice.innerText);
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText);
    const deliveryCharge = Number(deliveryCost.innerText);
    const totalCost = 
    primaryPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    total.innerText= totalCost;
    grandTotal.innerText = totalCost;
}


// promo code :


document.getElementById('apply-button').addEventListener('click', function () {
    // get user input
    const userInput = document.getElementById('promo-code');
    const userCode = userInput.value;
    const discount = Number(grandTotal.innerText); 
    

    // check email and password
    if (userCode == 'stevekaku') {
        
        grandTotal.innerText= discount - discount* 0.2 ;
        
        userInput.value= '';
    } 
});
