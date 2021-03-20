import { Payment, Invoice } from './models/models.js';
var submitBtn = document.getElementById('submit');
var amount = document.getElementById('amount');
var paymentType = document.getElementById('paymentType');
var paymentDesc = document.getElementById('desc');
var clientField = document.getElementById('client');
var searchField = document.getElementById('search');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var amt = parseInt(amount.value);
    var pType = paymentType.value;
    var pDesc = paymentDesc.value;
    var client = clientField.value;
    var el;
    var parent = document.getElementById('transaction_list');
    if (pType == 'payment') {
        var p = new Payment(amt, pDesc, client);
        el = p.render();
    }
    else {
        var i = new Invoice(amt, pDesc, client);
        el = i.render();
    }
    parent.appendChild(el);
});
searchField.addEventListener('keyup', function (e) {
    e.preventDefault();
    var sTearm = searchField.value;
    var elements = document.querySelectorAll('div.transaction_item');
    elements.forEach(function (elem) {
        var title = elem.children[0].innerHTML;
        if (title.toLowerCase().indexOf(sTearm.toLowerCase()) == -1) {
            console.log("elem does not match");
        }
        else {
            console.log(elem);
        }
    });
});
