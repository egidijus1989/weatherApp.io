// import ajaxSearch from "./ajaxSearch";

// const searchCode = ()=>{
//     document.querySelector('form').addEventListener('submit', (e)=>{
//         e.preventDefault();
//         const city = document.querySelector('.city').value;
//         let searchResponse;
//         ajaxSearch(city)
//             .then(result=>searchResponse=result)
//             .then(()=>{
//                 if(searchResponse.data.length=0){
//                     document.querySelector('.alert').classList.remove('d-none');
//                 }
//                 else{
                    
//                 }
//             })
//     })
// }
let searchBox = document.querySelector('.city')
let searchBtn = document.querySelector('.loadButton')

searchBox.addEventListener('change', (e)=>{
    e.preventDefault()
    setTimeout(function() {
        searchCode(e.target.value)
        document.querySelector('.forecast').classList.remove('d-none')
    }, 1000)
})

async function searchCode(city){
    const response = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`)
    const data = await response.json();
    console.log(data)
                    let day = new Date(data.forecastTimestamps[0].forecastTimeUtc)
                    let hour = day.getHours();
                    for(let i = 0; i< 7; i++) {
                        document.getElementsByClassName('topleft')[i].innerHTML = data.place.name;
                    }
                    for(let i = 0; i < 7; i++){
                        let weekDay = (day.getDay() + i) % 7;
                        switch(weekDay){
                            case 0:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Sun";
                                break;
                            case 1:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Mon";
                                break;
                            case 2:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Tue";
                                break;
                            case 3:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Wen";
                                break;
                            case 4:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Thu";
                                break;
                            case 5:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Fri";
                                break;
                            case 6:
                                document.getElementsByClassName('top-right')[i].innerHTML = "Sat";
                                break;
                        }
            
                    }
                    document.getElementsByClassName('middle-bottom')[0].innerHTML = data.forecastTimestamps[0].conditionCode;
                    document.getElementsByClassName('middle-bottom')[1].innerHTML = data.forecastTimestamps[24].conditionCode;
                    document.getElementsByClassName('middle-bottom')[2].innerHTML = data.forecastTimestamps[48].conditionCode;
                    document.getElementsByClassName('middle-bottom')[3].innerHTML = data.forecastTimestamps[59].conditionCode;
                    document.getElementsByClassName('middle-bottom')[4].innerHTML = data.forecastTimestamps[67].conditionCode;
                    document.getElementsByClassName('middle-bottom')[5].innerHTML = data.forecastTimestamps[75].conditionCode;
                    document.getElementsByClassName('middle-bottom')[6].innerHTML = data.forecastTimestamps[83].conditionCode;
                    // document.querySelector('.bottom-left').innerHTML = data.forecastTimestamps[0].relativeHumidity;
                    document.getElementsByClassName('bottom-right')[0].innerHTML = data.forecastTimestamps[0].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[1].innerHTML = data.forecastTimestamps[24].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[2].innerHTML = data.forecastTimestamps[48].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[3].innerHTML = data.forecastTimestamps[59].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[4].innerHTML = data.forecastTimestamps[67].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[5].innerHTML = data.forecastTimestamps[75].airTemperature + '°C';
                    document.getElementsByClassName('bottom-right')[6].innerHTML = data.forecastTimestamps[83].airTemperature + '°C';

                    for(let i = 0; i < 7; i++){
                        let condition  = document.getElementsByClassName('middle-bottom')[i].textContent;
                        switch(condition){
                            case 'clear':
                                if (hour >= 6 && hour <= 18){
                                    document.getElementsByClassName('card-img-top')[i].src='../public/img/sunny.svg';
                                }else{
                                    document.getElementsByClassName('card-img-top')[i].src='../public/img/clearMoon.svg';
                                }
                                break;
                            case 'partly-cloudy':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/clouds.svg';
                                break;
                            case 'cloudy-with-sunny-intervals':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/clouds.svg';
                                break;
                            case 'cloudy':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/clouds.svg';
                                break;
                            case 'thunder':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/lithning.svg';
                                break;
                            case 'isolated-thunderstorms':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/lithning.svg';
                                break;
                            case 'thunderstorms':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/lithning.svg';
                                break;
                            case 'heavy-rain-with-thunderstorms':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'light-rain':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'rain':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'heavy-rain':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'light-sleet':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'sleet':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'freezing-rain':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'hail':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/raining.svg';
                                break;
                            case 'light-snow':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/snowing.svg';
                                break;
                            case 'snow':
                                    document.getElementsByClassName('card-img-top')[i].src='../public/img/snowing.svg';
                                    break;
                            case 'heavy-snow':
                                document.getElementsByClassName('card-img-top')[i].src='../public/img/snowing.svg';
                                break;
                            default:
                                console.log('unknown');
                                break;
                        }
                    }
    
}


export default searchCode