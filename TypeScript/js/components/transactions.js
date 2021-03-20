var Transaction = /** @class */ (function () {
    function Transaction(title, desc, amount) {
        this.title = title;
        this.desc = desc;
        this.amount = amount;
    }
    Transaction.prototype.component = function () {
        var container = document.createElement('div');
        container.classList.add('transaction_item');
        container.innerHTML = "<h4>" + this.title + "</h4><div><span class='amount'>" + this.amount + " </span><span class='desc'>" + this.desc + "</span></div>";
        return container;
    };
    return Transaction;
}());
export { Transaction };
