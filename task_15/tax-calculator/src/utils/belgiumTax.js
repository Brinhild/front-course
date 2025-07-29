export function calculateBelgiumTax(income, rate) {
    let tax;

    if (income <= 15200) {
        tax = income * 0.25;
    } else if (income <= 26830) {
        tax = 15200 * 0.25 + (income - 15200) * 0.40;
    } else if (income <= 46440) {
        tax = 15200 * 0.25 + (26830 - 15200) * 0.40 + (income - 26830) * 0.45;
    } else {
        tax = 15200 * 0.25 + (26830 - 15200) * 0.40 + (46440 - 26830) * 0.45 + (income - 46440) * 0.6;
    }

    const social = income * 0.1307;
    const municipal = tax * rate;
    const total = tax + social + municipal;

    return {
        tax,
        social,
        municipal,
        total,
        result: income - total,
    };
}
