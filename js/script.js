function getInputValue(itemId) {
    const itemField = document.getElementById(itemId);
    const itemAmount = parseFloat(itemField.value);
    if (itemAmount < 0 || isNaN(itemAmount)) {
        return alert('Please enter a valid number!')
    }
    //clear input field
    itemField.value = "";
    return itemAmount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeAmount = getInputValue('income-field');
    const foodAmount = getInputValue('food-field');
    const rentAmount = getInputValue('rent-field');
    const clothesAmount = getInputValue('clothes-field');

    //total expenses
    const totalExpenses = foodAmount + rentAmount + clothesAmount;

    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;
    if (incomeAmount < total.innerText) {
        return alert('Insufficient balance!');
    }
    else {
        //balance
        const balanceAmount = incomeAmount - totalExpenses;

        const balance = document.getElementById('balance');
        balance.innerText = balanceAmount;
    }

});

document.getElementById('save-btn').addEventListener('click', function () {

    const saveRateField = document.getElementById('save-rate');
    const saveRateAmount = saveRateField.value;

    //clear save rate input
    saveRateField.value = '';

    if (saveRateAmount < 0 || saveRateAmount > 100) {
        return alert('Please insert a valid number less than hundred!')
    }
    else {
        //saving amount
        const saveRate = (parseFloat(balance.innerText) * parseFloat(saveRateAmount)) / 100;

        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saveRate;

        //remaining balance
        const remainingBalanceAmount = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = remainingBalanceAmount;
    }

})