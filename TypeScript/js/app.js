"use strict";
var submitBtn = document.getElementById('submit');
var amount = document.getElementById('amount');
var paymentType = document.getElementById('paymentType');
var paymentDesc = document.getElementById('desc');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var amt = amount.value;
    var pType = paymentType.value;
    var pDesc = paymentDesc.value;
    printToConsole(amt + " " + pType + " " + pDesc);
});
var printToConsole;
printToConsole = function (stringToPrint) {
    console.log(stringToPrint);
};
