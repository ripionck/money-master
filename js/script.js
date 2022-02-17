function getInputValue(itemId) {
    const itemField = document.getElementById(itemId);
    const itemAmount = parseFloat(itemField.value);
    if (isNaN(itemAmount) || itemAmount < 0) {
        itemField.value = "";
        return alert('Please input positive number!')
    }
    //clear input field
    itemField.value = "00";
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
    total.innerText = totalExpenses.toFixed(2);
    total.innerText = "00";

    if (incomeAmount < total.innerText) {
        return alert('Insufficient balance!');
    }
    else {
        //balance
        const balanceAmount = incomeAmount - parseFloat(totalExpenses);

        const balance = document.getElementById('balance');
        balance.innerText = balanceAmount.toFixed(2);
        balance.innerText = "00";
    }

});

document.getElementById('save-btn').addEventListener('click', function () {

    const saveRateField = document.getElementById('save-rate');
    const saveRateAmount = saveRateField.value;

    //clear save rate input
    saveRateField.value = '';

    if (saveRateAmount < 0 || isNaN(saveRateAmount) || saveRateAmount > 100) {
        return alert('You can not save more than your balance.')
    }
    else {
        //saving amount
        const saveRate = (parseFloat(balance.innerText) * parseFloat(saveRateAmount)) / 100;

        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saveRate.toFixed(2);

        //remaining balance
        const remainingBalanceAmount = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = remainingBalanceAmount.toFixed(2);
    }

})