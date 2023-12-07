
function calculateTax(){
       
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 70000, rate: 0.2 },
        { range: Infinity, rate: 0.25 },
    ];

    return function (income) {

        const applicableRate = taxRates.find(rate => income <= rate.range);
    
        return applicableRate ? income * applicableRate.rate : 0;
    };
}

const calculateTaxForIncome = calculateTax();

const income1 = 15000;
const tax1 = calculateTaxForIncome(income1);
console.log(`For an income of ${income1}, the tax amount is: ${tax1}`);