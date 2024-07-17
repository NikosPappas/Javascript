const apiKey='af533b01cf4b7f953507cc4166b11175';
const url=`https://api.openweathermap.org/data/2.5/weather?`;
const searchButton=document.getElementById(`searchButton`);
const cityInput=document.getElementById(`cityInput`);
const weatherInfo=document.getElementById(`weatherInfo`);

async function search(){
    const city = cityInput.value;
    if (city) {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            window.alert("Received null data from response");
            return;
        }
        const data=await response.json();
        const temperature=data["main"]["temp"];
        const description=data["weather"]["description"];
        const humidity=data["main"]["humidity"];
        
        weatherInfo.innerHTML=`<h3>${city}</h3>
                               <p>Temperature:${temperature}</p>
                               <p>Humidity:${humidity}</p>
                               <p>Description:${description}</p>
            `;
       
    }
}
