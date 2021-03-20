export class Transaction{
    constructor(
        readonly title:string,
        readonly desc:string,
        readonly amount:number,
    ){}
    component():HTMLDivElement{
        var container=document.createElement('div')
        container.classList.add('transaction_item')
        container.innerHTML=`<h4>${this.title}</h4><div><span class='amount'>${this.amount} </span><span class='desc'>${this.desc}</span></div>`
        return container
    }
}