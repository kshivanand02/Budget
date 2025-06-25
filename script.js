const form = document.getElementById('expense-form');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');

let categories = [];
let amounts = [];

const ctx = document.getElementById('expenseChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      label: 'Expenses',
      data: amounts,
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0',
        '#9966ff',
        '#ff9f40'
      ],
    }]
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const category = categoryInput.value;
  const amount = parseFloat(amountInput.value);

  if (category && amount > 0) {
    categories.push(category);
    amounts.push(amount);
    chart.update();

    categoryInput.value = '';
    amountInput.value = '';
  }
});
