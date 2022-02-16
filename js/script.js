
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const foodField = document.getElementById('food-field');
    const rentfield = document.getElementById('rent-field');
    const clothesField = document.getElementById('clothes-field');

    const incomeAmount = incomeField.value;
    const foodAmount = foodField.value;
    const rentAmount = rentfield.value;
    const clothesAmount = clothesField.value;


    const totalExpenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);

    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;

    const balanceAmount = parseFloat(incomeAmount) - parseFloat(totalExpenses);

    const balance = document.getElementById('balance');
    balance.innerText = balanceAmount;


    incomeField.value = '';
    foodField.value = '';
    rentfield.value = '';
    clothesField.value = '';
})

document.getElementById('save-btn').addEventListener('click', function () {

    const saveRateField = document.getElementById('save-rate');
    const saveRateAmount = saveRateField.value;

    const saveRate = (parseFloat(balance.innerText) * parseFloat(saveRateAmount)) / 100;


    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveRate;

    const remainingBalanceAmount = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingBalanceAmount;

    saveRateField.value = '';
})