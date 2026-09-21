// Velattomaks-seurannan luvut. Tätä tiedostoa muokkaamalla päivittyvät kaikki sivut.
const DATA = {
  deadline: "2027-10-13",
  wins: { courtWins: 1, courtLosses: 1, refunds: 458.71 },
  payments: [
    {year:2016, amount:4037.32},
    {year:2017, amount:8865.42},
    {year:2018, amount:9337.56},
    {year:2019, amount:4313.51},
    {year:2020, amount:0},
    {year:2021, amount:2536.35},
    {year:2022, amount:1761.59},
    {year:2023, amount:2270.91},
    {year:2024, amount:2191.60},
    {year:2025, amount:0},
    {year:2026, amount:0},
  ],
  // Yksi rivi per perinnässä oleva velka, anonymisoituna. amount = velkasumma,
  // null = summa ei tiedossa. status kertoo käynnissä olevan prosessin:
  //   "settling" = vastapuoleen ollaan yhteydessä, sovinnon mahdollisuutta selvitetään
  //   "court"    = käräjäoikeuden käsittelyssä, arvioitu käsittelyaika 12–24 kk
  //   "appeal"   = hävitty käräjäoikeudessa, asia hovioikeuden käsittelyssä
  // Ilman status-kenttää velka ei ole oikeusprosessissa.
  debts: [
    {id:"A", amount:9440.35},
    {id:"B", amount:9032.32},
    {id:"C", amount:6246.64, status:"appeal"},
    {id:"D", amount:5831.44, status:"settling"},
    {id:"E", amount:5422.12},
    {id:"F", amount:5388.78},
    {id:"G", amount:4731.98, status:"court"},
    {id:"H", amount:4659.57},
    {id:"I", amount:3805.21},
    {id:"J", amount:3553.74},
    {id:"K", amount:2958.91},
    {id:"L", amount:2458.69, status:"settling"},
    {id:"M", amount:2018.77, status:"court"},
    {id:"N", amount:1474.66},
    {id:"O", amount:1358.57},
    {id:"P", amount:981.16, status:"court"},
    {id:"Q", amount:702.70},
    {id:"R", amount:626.45},
    {id:"S", amount:618.14},
    {id:"T", amount:569.72},
    {id:"U", amount:214.00},
    {id:"V", amount:66.30},
    {id:"W", amount:null},
    {id:"X", amount:null},
  ],
};
