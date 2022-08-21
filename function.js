function getValueById(elementId) {
    const totalIncomeElement = document.getElementById(elementId);
    const totalIncomeElementString = totalIncomeElement.value;
    const totalIncomeField = parseInt(totalIncomeElementString);
    
    return totalIncomeField
}


document.getElementById('calculate-btn').addEventListener('click', function () {
        const totalIncomeField = getValueById('total-income')
        const totalFoodField = getValueById('food-input')
        const totalRentField = getValueById('rent-input')
        const totalClothsField = getValueById('cloths-input')

        const totalExpense = totalFoodField + totalRentField + totalClothsField;

        document.getElementById('total-expenses').innerText = totalExpense;
        document.getElementById('balance').innerText = totalIncomeField - totalExpense;

     

})

document.getElementById('save-btn').addEventListener('click', function () {
    const savingInput = getValueById('saving-percentage');
    const balance = document.getElementById('balance').innerText
    const savingField = parseInt(balance);
    const result = savingField * savingInput / 100;
    document.getElementById('saving-amount').innerText = result;
    const remainingBalance = balance - result;
    document.getElementById('remaining-balance').innerText = remainingBalance;



})