Const citycoordinates={ 
'New York':{
  lat: 40.7128,
  lng: -74.0060
},
  'Los Angeles':{
   lat: 34.0522,
   lng: -118.2437
  }
    'Chicago':{
   lat: 41.8781,
   lng:-87.6298
},
'Houston':{
lat: 29.7604,
lng:-95.3698
},
'Philadelphia'
lat: 39.9526,
lng:-75.1652
},
const axios= require('axios');

const getExchangeRate = (from, to) => {

return axios.get('https://api.fixer.io/latest?base=USD').then((response)=>{
return response.data.rates [to];
});
}
const convertCurrency =(from,to, amount)=>{
  let countries;
return getCountries(to).then((tempCountries) =>{
  countries= tempCountries;
  return GetExchangeRate(from,to);
}).then((rate)=>{
  const exchangeAmount=amount*rate;
return '$ {amount} $ {from} is worth ${exchangeAmount} ${to} .${to} can be used in the following countries $
  
