import {calculateGermanyTax} from "../utils/germanyTax.js";
import {calculateBelgiumTax} from "../utils/belgiumTax.js";

export function calculateClick() {
    const income = +document.getElementById('income').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;

    let taxes;
    switch (country) {
        case "Germany":
            taxes = calculateGermanyTax(income, 0);
            break;
        case "Belgium":
            const rate = data.findLast(v => v.name === country)
                .states
                .find(value => value.state === state)
                .tax;
            taxes = calculateBelgiumTax(income, rate);
            break;
        default: taxes = {};
    }

    const revenueEl = createInfoElement(`Revenue: ${taxes.result.toFixed(2)}`, "h3");
    const taxEl = createInfoElement(`Tax: ${taxes.total.toFixed(2)}`, 'h3');
    const infoBox = document.createElement("div");
    infoBox.append(revenueEl, taxEl);
    const boxResult = document.getElementById("result-side");
    if (boxResult.firstElementChild.nextElementSibling) {
        boxResult.replaceChild(infoBox, boxResult.firstElementChild.nextElementSibling);
    } else {
        boxResult.append(infoBox);
    }
}