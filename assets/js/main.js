let bill = document.getElementById('bill').value;
let no_of_persons = document.getElementById('person').value;
let tips = document.getElementById('display-tip')
let total_amount = document.getElementById('display-amount')
let custom_tip = document.getElementById('custom_tip').value;
function tip5() {
    tips.innerHTML = '$' + (0.05 * parseInt(bill) / no_of_persons);
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.05 * parseInt(bill))) / no_of_persons ;
}
function tip10() {
    tips.innerHTML = '$' + (0.1 * bill) / no_of_persons;
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.1 * parseInt(bill))) / no_of_persons;
}
function tip15() {
    tips.innerHTML = '$' + (0.15 * bill) / no_of_persons;
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.15 * parseInt(bill))) / no_of_persons;
}
function tip20() {
    tips.innerHTML = '$' + (0.20 * bill) / no_of_persons;
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.20 * parseInt(bill))) / no_of_persons;
}
function tip25() {
    tips.innerHTML = '$' + (0.25 * bill) / no_of_persons;
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.25 * parseInt(bill))) / no_of_persons;
}
function tip30() {
    tips.innerHTML = '$' + (0.30 * bill) / no_of_persons;
    total_amount.innerHTML = '$' + (parseInt(bill) + (0.30 * parseInt(bill))) / no_of_persons;
}
