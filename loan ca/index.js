var amount= document.getElementById('amount').value ;
var month = document.getElementById('month').value;
var rate = document.getElementById('rate').value;
var interest = (amount*rate*.01)/month;
var payment= ((amount/month)+interest).toFixed(2);
payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById(payment).innerHTML= "Monthly payment = $" +payment; 