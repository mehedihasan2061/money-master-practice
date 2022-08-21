
// function getValueById(elementId) {
//     const totalIncomeElement = document.getElementById(elementId);
//     const totalIncomeString = totalIncomeElement.value;
//     const totalIncomeField = parseInt(totalIncomeString);

//     return totalIncomeField;
// }

// // calculate button task 

// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const totalIncomeField = getValueById('total-income')

//     const totalFoodField = getValueById('food-input')
//     const totalRentField = getValueById('rent-input')
//     const totalClothsField = getValueById('cloths-input')
//     const total = totalFoodField + totalRentField + totalClothsField;
//     document.getElementById('total-expenses').innerText = total;
//     document.getElementById('balance').innerText = totalIncomeField - total;
    


// })

// // save button task 

// document.getElementById('save-btn').addEventListener('click', function () {
//     const percent = getValueById('saving-percentage')
//     const balance = document.getElementById('balance').innerText
//     const balanceField = parseInt(balance)
//     const result = percent * balanceField / 100;
//     document.getElementById('saving-amount').innerText = result;


// })