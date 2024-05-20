

const bcvUsdEur = 0.927872;
const bcvUsdBs = 36.537099;
const bcvUsdCop = 3897.19;

const paraleloUsdBs = 39.557;


const exchangeSources = {
  BCV: {
      "USD": { 
          "EUR": bcvUsdEur,
          "Bs": bcvUsdBs,
          "COP": bcvUsdCop,
          "USD": 1 
      },
      "EUR": { 
          "USD": 1 / bcvUsdEur,
          "Bs": bcvUsdBs / bcvUsdEur,
          "COP": bcvUsdCop / bcvUsdEur,
          "EUR": 1 
      },
      "Bs": { 
          "USD": 1 / bcvUsdBs,
          "EUR": 1 / (bcvUsdBs / bcvUsdEur), 
          "COP": bcvUsdCop / bcvUsdBs,
          "Bs": 1 
      },
      "COP": { 
          "USD": 1 / bcvUsdCop,
          "EUR": 1 / (bcvUsdCop / bcvUsdEur ),
          "Bs": bcvUsdBs / bcvUsdCop,
          "COP": 1 
      }
  },
  Paralelo: {
      "USD": { 
          "EUR": bcvUsdEur,
          "Bs": paraleloUsdBs,
          "COP": bcvUsdCop,
          "USD": 1 
      },
      "EUR": { 
          "USD": 1 / bcvUsdEur, 
          "Bs": paraleloUsdBs / bcvUsdEur,
          "COP": bcvUsdCop / bcvUsdEur, 
          "EUR": 1 
      },
      "Bs": { 
          "USD": 1 / paraleloUsdBs, 
          "EUR": 1 / (paraleloUsdBs / bcvUsdEur), 
          "COP": bcvUsdCop / paraleloUsdBs, 
          "Bs": 1 
      },
      "COP": { 
          "USD": 1 / bcvUsdCop, 
          "EUR": 1 / (bcvUsdCop / bcvUsdEur), 
          "Bs": paraleloUsdBs / bcvUsdCop,
          "COP": 1 
      }
  }
};

export { exchangeSources };
