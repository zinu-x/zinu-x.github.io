document.addEventListener("DOMContentLoaded", function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipPercentageValue = document.getElementById('tipPercentageValue');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillInput = document.getElementById('totalBill');

    billAmountInput.addEventListener('input', calculateTip);
    tipPercentageInput.addEventListener('input', calculateTip);

    function calculateTip() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalBill = billAmount + tipAmount;

        tipPercentageValue.value = tipPercentage ;
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillInput.value = totalBill.toFixed(2);
    }
});