let bill = document.getElementById('bill').value;
let no_of_persons = document.getElementById('person').value;
let tips = document.getElementById('display-tip')
let total_amount = document.getElementById('display-amount')

function tip5() {
    tips.innerHTML = '$ ' + (0.05 * parseInt(bill));
    total_amount.innerHTML = '$ ' + (parseInt(bill) + (0.05 * parseInt(bill)));
}
function tip10() {
    tips.innerHTML = '$ ' + (0.1 * bill);
    total_amount.innerHTML = '$ ' + (parseInt(bill) + (0.1 * parseInt(bill)));
}
function tip15() {
    tips.innerHTML = '$ ' + (0.15 * bill);
    total_amount.innerHTML = '$ ' + (parseInt(bill) + (0.15 * parseInt(bill)));
}
function tip20() {
    tips.innerHTML = '$ ' + (0.20 * bill);
    total_amount.innerHTML = '$ ' + (parseInt(bill) + (0.20 * parseInt(bill)));
}
function tip25() {
    tips.innerHTML = '$ ' + (0.25 * bill);
    total_amount.innerHTML = '$ ' + (parseInt(bill) + (0.25 * parseInt(bill)));
}
