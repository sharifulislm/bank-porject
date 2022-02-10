//deposit start here 

document.getElementById('Deposit-button').addEventListener('click', function() {
    //get the amount form deposit 
    const depositInput = document.getElementById('Deposit-amount');
   const depositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(depositAmountText);

//    console.log(depositAmount);

const depositTotal = document.getElementById('deposit-total');
 const previousdeposiText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousdeposiText);
const newDepositTotal = previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;

//update balance 

const balaceTotal = document.getElementById('balance-total');
const praeviousBalanceTaxt = balaceTotal.innerText;
const praeviousBalancetotal = parseFloat(praeviousBalanceTaxt);

const newBalnceTotal = praeviousBalancetotal + newDepositAmount;

balaceTotal.innerText=newBalnceTotal;

 // clear the deposit input field
 depositInput.value='';

})

// Withdraw sart here 

document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInput =document.getElementById('withdraw-amount');
   const withdrawAmounttext = withdrawInput.value;
   const newwithrawAmounta = parseFloat(withdrawAmounttext);

    // console.log(newwithrawAmounta);

const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawtext = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawtext);
const newWithrawTotal = previousWithdrawAmount + newwithrawAmounta;
withdrawTotal.innerText = newWithrawTotal;



//update balance 

const balaceTotal = document.getElementById('balance-total');
const praeviousBalanceTaxt = balaceTotal.innerText;
const praeviousBalancetotal = parseFloat(praeviousBalanceTaxt);

const newBalnceTotal = praeviousBalancetotal - newwithrawAmounta;

balaceTotal.innerText=newBalnceTotal;
//clear withdraw input 
withdrawInput.value ='';

})