///////////funcion de calculo dinamico para calcular lo que falta para pagar el monto total

<<<<<<< HEAD:public/calculadora2/updateAmountsNeeded.js
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const docRef = doc(db, "rates");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}



>>>>>>> a299b91 (esta pude que si):public/calculadora/updateAmountsNeeded.js

import { exchangeSources } from './exchangeSources.js';

let rates = {};  // Variable para almacenar las tasas de cambio actuales según la fuente seleccionada

numeral.locale('de');

document.getElementById('exchangeSource').addEventListener('change', function() {
  const source = document.getElementById('exchangeSource').value;
  rates = exchangeSources[source];
  updateAmountsNeeded();
});

function updateAmountsNeeded() {
  const totalAmountToPay = parseFloat(document.getElementById('totalAmountToPay').value) || 0;
  const currencyToPay = document.getElementById('currencyToPay').value;

  let totalPaid = {
    "USD": parseFloat(document.getElementById('amountUSD').value) || 0,
    "EUR": parseFloat(document.getElementById('amountEUR').value) || 0,
    "Bs": parseFloat(document.getElementById('amountBs').value) || 0,
    "COP": parseFloat(document.getElementById('amountCOP').value) || 0
  };

  if (!rates || !currencyToPay || !Object.keys(rates).length) {
    console.error("Las tasas de cambio no están disponibles o no se ha seleccionado una moneda para pagar.");
    return;
  }

  let totalPaidInCurrencyToPay = Object.keys(totalPaid).reduce((acc, currency) => {
    if (rates[currency] && rates[currency][currencyToPay]) {
      return acc + (totalPaid[currency] * rates[currency][currencyToPay]);
    }
    return acc;
  }, 0);

  let difference = totalAmountToPay - totalPaidInCurrencyToPay;
  calculateAndDisplayAmountsNeeded(difference, currencyToPay);
}


// function calculateAndDisplayAmountsNeeded(difference, currencyToPay) {
//   const hasPositiveInput = document.getElementById('amountUSD').value > 0 ||
//                            document.getElementById('amountEUR').value > 0 ||
//                            document.getElementById('amountBs').value > 0 ||
//                            document.getElementById('amountCOP').value > 0;

//   Object.keys(rates).forEach(currency => {
//     let resultElement = document.getElementById(`result${currency}`);
//     let amountNeeded = difference * (rates[currencyToPay][currency] || 1);
//     resultElement.textContent = difference > 0 
//         ? `${hasPositiveInput ? 'Completa con' : 'Son'} ${numeral(amountNeeded).format('0,0.00')} ${currency}` 
//         : "Revisa tu cambio"; // Formateo con numeral.js
//   });
// }

function calculateAndDisplayAmountsNeeded(difference, currencyToPay) {
  const hasPositiveInput = ['USD', 'EUR', 'Bs', 'COP'].some(currency => {
    return document.getElementById(`amount${currency}`).value > 0;
  });

  Object.keys(rates).forEach(currency => {
    const resultElement = document.getElementById(`result${currency}`);
    const exchangeRate = rates[currencyToPay][currency] || 1;
    const amountNeeded = difference * exchangeRate;

    if (difference > 0) {
      const messagePrefix = hasPositiveInput ? 'Completa con' : 'Son';
      resultElement.innerHTML = `${messagePrefix} ${numeral(amountNeeded).format('0,0.00')} ${currency}`;
    } else {
      resultElement.innerHTML = "&#8595; Revisa tu cambio &#8595;"; // Ahora usando innerHTML para interpretar HTML
    }
  });
}
//exper



document.querySelectorAll('input[type="number"], select').forEach(element => {
  element.addEventListener('input', updateAmountsNeeded);
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exchangeSource').dispatchEvent(new Event('change'));
  numeral.locale('de'); // Ensure numeral is configured for German formatting
});

export { updateAmountsNeeded };

