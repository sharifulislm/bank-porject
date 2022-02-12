// function doubleIt(num){
//   const result = num * 2;
//   return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId){
  const depositInput = document.getElementById(inputId);
  const depositAmountText = depositInput.value;
 const newDepositAmount = parseFloat(depositAmountText);

  // clear the deposit input field


  depositInput.value='';
   return newDepositAmount;
   
};

// update balace 

function getBalance(balace, isAdd){
  const balaceTotal = document.getElementById('balance-total');
  const praeviousBalanceTaxt = balaceTotal.innerText;
  const praeviousBalancetotal = parseFloat(praeviousBalanceTaxt);
  if (isAdd == true){
    balaceTotal.innerText = praeviousBalancetotal + balace;
  }
  else {
    balaceTotal.innerText = praeviousBalancetotal - balace;
  }
  // .innerText = praeviousBalancetotal + balace;
  // return praeviousBalancetotal;

}  




//deposit start here 
document.getElementById('Deposit-button').addEventListener('click', function(){
    //get the amount form deposit 
  //   const depositInput = document.getElementById('Deposit-amount');
  //  const depositAmountText = depositInput.value;
  // const newDepositAmount = parseFloat(depositAmountText);


    const newDepositAmount = getInputValue('Deposit-amount');
    console.log(newDepositAmount);


const depositTotal = document.getElementById('deposit-total');
 const previousdeposiText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousdeposiText);
const newDepositTotal = previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;

//update balance 

// const balaceTotal = document.getElementById('balance-total');
// const praeviousBalanceTaxt = balaceTotal.innerText;
// const praeviousBalancetotal = parseFloat(praeviousBalanceTaxt);

getBalance(newDepositAmount,true)

// const newBalnceTotal = praeviousBalancetotal + newDepositAmount;

// balaceTotal.innerText=newBalnceTotal;



})

// Withdraw sart here 

document.getElementById('withdraw-button').addEventListener('click', function(){
  //  const withdrawInput =document.getElementById('withdraw-amount');
  //  const withdrawAmounttext = withdrawInput.value;
  //  const newwithrawAmounta = parseFloat(withdrawAmounttext);
  const newwithrawAmounta = getInputValue('withdraw-amount');


    // console.log(newwithrawAmounta);

const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawtext = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawtext);
const newWithrawTotal = previousWithdrawAmount + newwithrawAmounta;
withdrawTotal.innerText = newWithrawTotal;

 getBalance(newwithrawAmounta,false);



//update balance 

// const balaceTotal = document.getElementById('balance-total');
// const praeviousBalanceTaxt = balaceTotal.innerText;
// const praeviousBalancetotal = parseFloat(praeviousBalanceTaxt);

// const newBalnceTotal = praeviousBalancetotal - newwithrawAmounta;

// balaceTotal.innerText=newBalnceTotal;
//clear withdraw input 
// withdrawInput.value ='';    

})