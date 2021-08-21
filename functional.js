function getInputValue(id) {
    const inputfiled = document.getElementById(id);
    const inputfiledvalue = inputfiled.value;
    const convertvalue = parseFloat(inputfiledvalue);
    inputfiled.value = '';
    return convertvalue;

}

function upadatetotal(filedid,amount) {
    const updatefiled = document.getElementById(filedid);
    const currentvalue = updatefiled.innerText;
    const currentvalueconvert = parseFloat(currentvalue);
    const updatetotalvalue = currentvalueconvert + amount;
    updatefiled.innerText = updatetotalvalue;


    
}
function updatebalance(amount,isadding) {
    const balancetag = document.getElementById('balance-total');
    const balancetagtext = balancetag.innerText;
    const prebalancevalue = parseFloat(balancetagtext);
    let newbalance;
    if (isadding == true) {
         newbalance = prebalancevalue + amount;
        
    }
    else {
         newbalance = prebalancevalue - amount;
    }
    
    balancetag.innerText = newbalance;
    
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        const updateamount = upadatetotal('deposit-total', amount);
    const updatetotalbalance = updatebalance(amount,true);
    }

});

//handel withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    if (amount > 0) {
        const updateamount = upadatetotal('withdraw-total', amount);
    const updatetotalbalance = updatebalance(amount,false);
    }

});


