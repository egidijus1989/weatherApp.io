
const citySearch = document.querySelector('form input');
const searchBtn = document.querySelector('form button');
searchBtn.addEventListener('click', function(){
    fetch('https://api.meteo.lt/v1/places/'+citySearch.value+`/forecasts/long-term`)
    .then(response =>response.json())
    .then(data => console.log(data))
})

export default x