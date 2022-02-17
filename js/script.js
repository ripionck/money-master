function getInputValue(itemId) {
    const itemField = document.getElementById(itemId);
    const itemAmount = parseFloat(itemField.value);

    //clear input field
    itemField.value = "";
    return itemAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    /*  const incomeField = document.getElementById('income-field');
     const foodField = document.getElementById('food-field');
     const rentfield = document.getElementById('rent-field');
     const clothesField = document.getElementById('clothes-field');
 
     const incomeAmount = parseFloat(incomeField.value);
     const foodAmount = parseFloat(foodField.value);
     const rentAmount = parseFloat(rentfield.value);
     const clothesAmount = parseFloat(clothesField.value);
  */
    const incomeAmount = getInputValue('income-field');
    const foodAmount = getInputValue('food-field');
    const rentAmount = getInputValue('rent-field');
    const clothesAmount = getInputValue('clothes-field');

    //total expenses
    const totalExpenses = foodAmount + rentAmount + clothesAmount;

    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses;

    //balance
    const balanceAmount = incomeAmount - totalExpenses;

    const balance = document.getElementById('balance');
    balance.innerText = balanceAmount;

    /*  //clear input field
     incomeField.value = '';
     foodField.value = '';
     rentfield.value = '';
     clothesField.value = '';
  */
})

document.getElementById('save-btn').addEventListener('click', function () {

    const saveRateField = document.getElementById('save-rate');
    const saveRateAmount = saveRateField.value;

    //saving amount
    let saveRate = (parseFloat(balance.innerText) * parseFloat(saveRateAmount)) / 100;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveRate;

    //remaining balance
    const remainingBalanceAmount = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingBalanceAmount;

    //clear save rate input
    saveRateField.value = '';
})