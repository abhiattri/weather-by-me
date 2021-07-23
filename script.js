let weather = {
    apikey:" 202b15cb533059204affdcff65fd0822",
    fetchWeather: function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=202b15cb533059204affdcff65fd0822").then((response)=>response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
const {name}= data;
const {icon,description}=data.weather[0];
const {temp,humidity}=data.main;
const {speed}=data.wind;
document.querySelector(".city").innerText = "Weather in "+ name;
document.querySelector(".icon").scr ="https://pics.freeicons.io/uploads/icons/png/6328502301605833501-64.png"+icon;
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText=temp+"°C";
document.querySelector(".humidity").innerText="humidity: "+humidity+"%";
document.querySelector(".wind").innerText="wind-speed: "+speed+"km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather(" ");

