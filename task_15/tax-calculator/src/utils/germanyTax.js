export function calculateGermanyTax(income, churchTaxRate = 0) {
    let tax = 0;

    if (income <= 11784) {
        tax = 0;
    } else if (income <= 18000) {
        tax = income * 0.14;
    } else if (income <= 62810) {
        tax = income * 0.24 + (income - 10908) / (62810 - 10908) * (0.42 - 0.24);
    } else if (income <= 277825) {
        tax = income * 0.42;
    } else {
        tax = income * 0.45;
    }

    const solidarityTax = tax * 0.055;
    const churchTax = tax * churchTaxRate;

    return {
        tax,
        solidarityTax,
        churchTax,
        totalTax: tax + solidarityTax + churchTax
    };
}
