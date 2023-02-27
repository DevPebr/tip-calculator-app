const error = document.getElementById("error");
function billValueValidity() {
    const rule = /^-?\d*\.?\d*$/;
    if(!rule.test(bill.value)) {
        bill.style.border='2px solid red';
    }

    else if(bill.value.length === 0) {
        bill.style.border='1px solid hsl(189, 41%, 97%)';
    }

    else {
        bill.style.border='2px solid hsl(172, 67%, 45%)';
    }
}
document.getElementById('5').addEventListener('click', (e) => {
    let bill = parseFloat(document.getElementById('bill').value);
    let peopleNumber = Number(document.getElementById('people-number').value);
    const tip = parseFloat(e.currentTarget.value);
    const finalValue = Number(((bill*tip)+bill)/peopleNumber);
    const perPersonValue = Number((bill*tip)/peopleNumber);
    document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
    document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
    if(peopleNumber === 0) {
        error.style.display='block';
    }
    else {
        error.style.display = 'none';
    }
})

document.getElementById('10').addEventListener('click', (e) => {
    let bill = parseFloat(document.getElementById('bill').value);
    let peopleNumber = Number(document.getElementById('people-number').value);
    const tip = parseFloat(e.currentTarget.value);
    const finalValue = Number(((bill*tip)+bill)/peopleNumber);
    const perPersonValue = Number((bill*tip)/peopleNumber);
    document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
    document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
    if(peopleNumber === 0) {
        error.style.display='block';
    }
    else {
        error.style.display = 'none';
    }
})

document.getElementById('15').addEventListener('click', (e) => {
    let bill = parseFloat(document.getElementById('bill').value);
    let peopleNumber = Number(document.getElementById('people-number').value);
    const tip = parseFloat(e.currentTarget.value);
    const finalValue = Number(((bill*tip)+bill)/peopleNumber);
    const perPersonValue = Number((bill*tip)/peopleNumber);
    document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
    document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
    if(peopleNumber === 0) {
        error.style.display='block';
    }
    else {
        error.style.display = 'none';
    }
});

document.getElementById('25').addEventListener('click', (e) => {
    let bill = parseFloat(document.getElementById('bill').value);
    let peopleNumber = Number(document.getElementById('people-number').value);
    const tip = parseFloat(e.currentTarget.value);
    const finalValue = Number(((bill*tip)+bill)/peopleNumber);
    const perPersonValue = Number((bill*tip)/peopleNumber);
    document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
    document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
    if(peopleNumber === 0) {
        error.style.display='block';
    }
    else {
        error.style.display = 'none';
    }
})

document.getElementById('50').addEventListener('click', (e) => {
    let bill = parseFloat(document.getElementById('bill').value);
    let peopleNumber = Number(document.getElementById('people-number').value);
    const tip = parseFloat(e.currentTarget.value);
    const finalValue = Number(((bill*tip)+bill)/peopleNumber);
    const perPersonValue = Number((bill*tip)/peopleNumber);
    document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
    document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
    if(peopleNumber === 0) {
        error.style.display='block';
    }
    else {
        error.style.display = 'none';

    }
})

document.getElementById('custom').addEventListener('keypress', (e) => {
    if(e.code ==='Enter') {
        const tip = parseFloat(document.getElementById('custom').value/100);
        let bill = parseFloat(document.getElementById('bill').value);
        let peopleNumber = Number(document.getElementById('people-number').value);
        let peopleBorder = document.querySelector('.people-number');
        const finalValue = Number(((bill*tip)+bill)/peopleNumber);
        const perPersonValue = Number((bill*tip)/peopleNumber);
        document.getElementById('per-person').innerText=`${finalValue.toFixed(2)}`
        document.getElementById('total-amount').innerText=`${perPersonValue.toFixed(2)}`;
        
        if(peopleNumber === 0) {
            error.style.display='block';
            peopleBorder.style.border='2px solid red';
        }

        else {
            error.style.display = 'none';
            peopleBorder.style.border='2px solid hsl(172, 67%, 45%)';
        }
    }
})

function reset() {
    let bill =   document.getElementById('bill');
    bill.value = '';
    bill.style.border = '1px solid hsl(189, 41%, 97%) '
    document.getElementById('people-number').value = '';
    document.getElementById('custom').value = '';
    document.getElementById('total-amount').innerText = '$0.00';
    document.getElementById('per-person').innerText = '$0.00';

}

