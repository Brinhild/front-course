export function calculateGermanyTax(income, churchRate = 0) {
    let tax;

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

    const solidarity = tax * 0.055;
    const church = tax * churchRate;
    const total = tax + solidarity + church;

    return {
        tax,
        solidarity,
        church,
        total,
        result: income - total,
    };
}
