const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('.btn-check');
const output = document.querySelector('.output');

labels.forEach((label) => {
    label.innerHTML = label.innerText
                        .split('')
                        .map((char,idx) => `<span style="transition-delay:${idx*100}ms;">${char}</span>`)
                        .join('');
})

inputs.forEach((input) => {
    input.addEventListener('change',()=>{
        if(input.value !== '') {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    })
})

var percentage;
function evaluateProfits(){
    const[price,quantity,currentPrice] = [Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)];
    const profit = (currentPrice * quantity) - (price * quantity);
    percentage = profit / (price * quantity) * 100;
    percentage = percentage.toFixed(2);
    if(price<currentPrice){
        output
        output.innerHTML = `You made a profit of ${profit}. Profit percentage is ${percentage}`;
    }
    else if (price === currentPrice){
        output.innerHTML = `You broke even.`;
    } else{
        output.innerHTML = `You incurred a loss of ${profit}. Loss percentage is ${percentage}`;
    }
}