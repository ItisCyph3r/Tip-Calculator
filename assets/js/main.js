var buttonList = document.querySelectorAll('.options').length
console.log(buttonList)
for(var i = 0; i < buttonList; i++){
    document.querySelectorAll('.options')[i].addEventListener('click', function() {
        var btnClick = this.innerHTML
        checker(btnClick)
    }
)
}
function checker(key){
    let bill
    let no_of_persons
    switch (key) {
        case '5%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.05 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.05 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.05 * parseInt(bill))
            break;
        case '10%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.10 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.10 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.10 * parseInt(bill))
            break;
        case '15%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.15 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.15 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.15 * parseInt(bill))
            break;
        case '20%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.20 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.20 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.20 * parseInt(bill))
            break;
        case '25%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.25 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.25 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.25 * parseInt(bill))
            break;
        case '30%':
            bill = document.getElementById('bill').value;
            no_of_persons = document.getElementById('person').value;
            document.querySelector('#display-tip').innerHTML = '$' + (0.30 * parseInt(bill) / no_of_persons);
            document.querySelector('#display-amount').innerHTML = '$' + (parseInt(bill) + (0.30 * parseInt(bill))) / no_of_persons ;
            document.querySelector('#display-bill').innerHTML = '$' + (parseInt(bill) + 0.30 * parseInt(bill))
            break;
        default: console.log(key)
            break;
    }
}