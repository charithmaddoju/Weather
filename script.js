let weather = {
    "apiKey" : "b7decd694ae0e63f1f1813d8a755b058",
    fetchWeather : function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather["apiKey"]}`
        )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            this.displayWeather(data)
        })
    },

    displayWeather : function(data){
        const {name} = data
        const {icon,description} = data.weather[0]
        const {temp,humidity} = data.main
        const {speed} = data.wind
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector('.city').innerText = "Weather in "+name
        document.querySelector('.icon').src ="https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "°F"
        document.querySelector(".humidity").innerText = "Humidity: "+humidity
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + " kmph"
    },
    search : function(){
        const thisCity = document.querySelector(".searchbar").value
        this.fetchWeather(thisCity)
    }
}

document.querySelector(".search button").addEventListener('click', function() {
    weather.search()
    
})



