const submitBtn=document.getElementById('submit') as HTMLButtonElement
const amount=document.getElementById('amount') as HTMLInputElement
const paymentType=document.getElementById('paymentType') as HTMLSelectElement
const paymentDesc=document.getElementById('desc') as HTMLInputElement

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let amt:string=amount.value;
    let pType:string=paymentType.value;
    let pDesc:string=paymentDesc.value
    printToConsole(`${amt} ${pType} ${pDesc}`)
});


let printToConsole:Function
printToConsole=(stringToPrint:string)=>{
    console.log(stringToPrint);
}