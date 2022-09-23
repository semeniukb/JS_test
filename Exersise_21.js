const funds = [
    {amount: 1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];


const getPositiveIncomeAmount = (data) => {
    return data.reduce((sum, current) => current.amount> 0 ? sum + current.amount : sum + 0, 0)
};

console.log(getPositiveIncomeAmount(funds))

const getTotalIncomeAmount = (data) => {
    return data.reduce((sum, current) => data.some(item => item.amount < 0) ? sum + current.amount : getPositiveIncomeAmount(data), 0)
    
};

console.log(getTotalIncomeAmount(funds))