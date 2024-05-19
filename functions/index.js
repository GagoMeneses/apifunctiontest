const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();
const db = admin.firestore();

// Función para llamar a la API de Open Exchange Rates y devolver los datos
exports.fetchExchangeRates = functions.https.onRequest(
    async (request, response) => {
      const apiUrl = "https://openexchangerates.org/api/latest.json";
      const appId = functions.config().openexchange.app_id;
      const cacheDoc = db.collection("exchangeRates").doc("latest");
      const cacheDuration = 86400000; // 24 horas en milisegundos

      try {
        const cache = await cacheDoc.get();
        const now = Date.now();

        if (cache.exists && (now - cache.data().timestamp < cacheDuration)) {
          console.log("Serving from cache");
          response.status(200).send(cache.data().rates);
        } else {
          console.log("Fetching new data");
          const apiResponse = await axios.get(apiUrl, {
            params: {
              app_id: appId,
              show_alternative: 1,
            },
          });
          const data = {
            rates: apiResponse.data,
            timestamp: now,
          };
          await cacheDoc.set(data);
          response.status(200).send(apiResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
        response.status(500).send("Error fetching data from API");
      }
    },
);
