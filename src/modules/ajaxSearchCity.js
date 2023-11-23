function ajaxSearchCity() {
        fetch(`https://api.meteo.lt/v1/places`)
            .then((response)=>response.json())
            .then((data)=>{
            // console.log(data)
            let datalist = document.querySelector('#places');
            for(let stotis of data){
                console.log(stotis.name);
                let places = document.createElement('option')
                places.value = stotis.name;
                places.textContent = stotis.name + " " + stotis.administrativeDivision;
                datalist.appendChild(places)
            }
        })
}
export default ajaxSearchCity