var calc = document.querySelector('#calc');
var bill = document.querySelector("#bill");
var tip = document.querySelector("#tip");

calc.addEventListener('click',function(e){
  e.preventDefault();
  let billAmount = bill.value;
  let tipPercent = tip.value
  calculateTip(billAmount, tipPercent)
})


function calculateTip(bill, tip){
  if(bill>0){
  let tipamt = document.querySelector("#tipamt");
  let billamt = document.querySelector("#billamt");
  let totalamt = document.querySelector("#totalamt");
  let tipAmt = (tip/100)*bill 
  console.log(typeof(parseInt(bill)));
  console.log(tipAmt);
  let total =  parseInt(bill) + tipAmt ;
  tipamt.innerText = tipAmt
  billamt.innerText = bill;
  totalamt.innerText = total ;
}
}