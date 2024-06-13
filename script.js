const apikey="c665109b6dce13f2175fc5fc36b4243a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputbox=document.querySelector(".search input");
const inputbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".icon");

async function weather(city){
      const response=await fetch(apiurl+city+`&appid=${apikey}`);
      if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }
      else{
      var data=await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
      document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
      document.querySelector(".condition").innerHTML=data.weather[0].main;

    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
    }
   else if(data.weather[0].main=="Clear"){
     weathericon.src="images/clear.png";
   }
   else if(data.weather[0].main=="Rain"){
     weathericon.src="images/rain.png";
   }
   else if(data.weather[0].main=="Drizzle"){
     weathericon.src="images/drizzle.png";
   }
   else if(data.weather[0].main=="Snow"){
     weathericon.src="images/snow.png";
   }
   else if(data.weather[0].main=="Atmosphere"){
     weathericon.src="images/humidity.png";
   }
   else if(data.weather[0].main=="Thunderstorm"){
     weathericon.src="images/thunderstorm.png";
   }
      
      document.querySelector(".error").style.display="none";
      document.querySelector(".weather").style.display="block";
 }
}
inputbox.addEventListener("click",()=>{
  document.querySelector(".error").style.display="none";
  document.querySelector(".weather").style.display="none";
})
inputbtn.addEventListener("click",()=>{
          weather(inputbox.value);
})