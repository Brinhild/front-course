const states = [
    {state: "Bayern", tax: 0.08},
    {state: "Baden-Württemberg", tax: 0.09},
    {state: "Berlin", tax: 0.09},
    {state: "Hamburg", tax: 0.09},
    {state: "Hessen", tax: 0.09},
];

const stateSelect = document.getElementById('state');
states.forEach(({state}) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});


taxButton.onclick = function () {
    const income = +document.getElementById('income').value;
    // const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const federalTax = calculateFederalTax(income);

    const kirchensteuerRate = states.find(s => s.state === state)?.tax || 0;
    const kirchensteuer = federalTax * kirchensteuerRate;

    const totalTax = federalTax + kirchensteuer;
    const result = income - totalTax;

    const revenueEl = createInfoElement(`Revenue: ${result}`, "h3");
    const taxEl = createInfoElement(`Tax: ${federalTax}`, 'h3');
    const kirchensteuerEl = createInfoElement(`Kirchensteuer: ${kirchensteuer} €`, 'h3');
    const totalTaxEl = createInfoElement(`Total Tax: ${totalTax} €`, 'h3');

    const infoBox = document.createElement("div");
    infoBox.append(revenueEl, taxEl, kirchensteuerEl, totalTaxEl);

    const boxResult = document.getElementById("result-side");
    if (boxResult.firstElementChild.nextElementSibling) {
        boxResult.replaceChild(infoBox, boxResult.firstElementChild.nextElementSibling);
    } else {
        boxResult.append(infoBox);
    }
}

function calculateFederalTax(income) {
    let tax = 0;
    if (income <= 11784) {
        tax = 0;
    } else if (income <= 18000) {
        tax = income * 0.14;
    } else if (income <= 62810) {
        tax = income * 0.24;
    } else if (income <= 277825) {
        tax = income * 0.42;
    } else {
        tax = income * 0.45;
    }
    return tax;
}

/*
Годовой доход (одиночка)ﾠСтавка налогаﾠКомментарий
До 11 784 €ﾠ0%ﾠНеоблагаемый минимум (Grundfreibetrag)
11 785 € – 18 000 €ﾠ~14% → 24%ﾠПлавно растущая ставка
18 001 € – 62 810 €ﾠ~24% → 42%ﾠОсновная зона налогообложения
62 811 € – 277 825 €ﾠ42%ﾠВысокий доход
Свыше 277 825 €ﾠ45% (Reichensteuer)ﾠ«Налог для богатых»
*/