const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red';
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
    }

  conversionResult.style.color = 'inherit';
  
  if (!['USD', 'HKD', 'INR','UAE'].includes(baseCurrency) || !['USD', 'HKD', 'INR','UAE'].includes(targetCurrency)) {
    alert('Invalid currency type. Please select from USD, UAE, HKD, or INR.');
    return;
  }

  const conversionRate = getConversionRate(baseCurrency, targetCurrency);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
});

function getConversionRate(baseCurrency, targetCurrency) {
  const exchangeRates = {
    USD: {
      UAE:3.67,
      INR: 81.99,
      HKD:7.84
    },
    UAE: {
      USD: 22.35,
      INR: 22.35,
      HKD: 2.13
    },
    INR: {
      USD: 0.012,
      UAE: 0.045,
      HKD:0.095
    },
    HKD:{
        USD:0.13,
        INR:10.48,
        UAE:0.47
    }
  };

  return exchangeRates[baseCurrency][targetCurrency];
}