var apiKey = "9efe5b895abff28aba68cd2709ea51f9";




const getData = (city) => {
    console.log("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey);
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
        , {
            method: 'get',

        }
    ).then((response) => {

        // console.log(response.status);
        if (response.status !== 200) {
            console.log("Error! Code: " + response.status);
            // return;
        }
        return response.json();
    })
        .then((responseData) => {
            // console.log("responsedata");
            // console.log(responseData);
            this.displayInfo(responseData);
            // this.initMap(responseData);
            document.querySelector('#userInput').value = "";
        })



}


function displayInfo(data) {
    console.log(data);
    var city = data.city.name;
    console.log(city);
    var currentTemp = (data.list[0].main.temp - 273.5).toFixed(2);
    var describe = data.list[0].weather[0].description;
    // console.log(data.weather[0].description);
    var icon = data.list[0].weather[0].icon;
    // console.log(icon);
    var feelsT = (data.list[0].main.feels_like - 273.5).toFixed(2);
    var humidity = data.list[0].main.humidity;
    var pressure = data.list[0].main.pressure;
    var speed = data.list[0].wind.speed;

    document.querySelector(".feel").innerText = feelsT + " °C";
    document.querySelector(".humidity").innerText = humidity + " %";
    document.querySelector(".pressure").innerText = pressure + " mb";
    document.querySelector(".speed").innerText = speed + " m/s";

    document.querySelector("#temp").innerHTML = currentTemp + " °C";
    document.querySelector("#locDesp").innerHTML = city + "<br/>" + describe;
    document.querySelector("#picture").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    // forecast

    var next = data.list[2].dt_txt.substring(0, 10);
    var icon1 = data.list[2].weather[0].icon;
    var temp1 = (data.list[2].main.temp - 273.5).toFixed(2);
    document.querySelector("#one").innerHTML = next;
    document.querySelector("#picture2").src = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";
    document.querySelector("#temp1").innerHTML = temp1 + " °C";

    var next2 = data.list[10].dt_txt.substring(0, 10);
    var icon2 = data.list[10].weather[0].icon;
    var temp2 = (data.list[10].main.temp - 273.5).toFixed(2);
    document.querySelector("#two").innerHTML = next2;
    document.querySelector("#picture3").src = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";
    document.querySelector("#temp2").innerHTML = temp2 + " °C";

    var next3 = data.list[18].dt_txt.substring(0, 10);
    var icon3 = data.list[18].weather[0].icon;
    document.querySelector("#three").innerHTML = next3;
    var temp3 = (data.list[18].main.temp - 273.5).toFixed(2);
    document.querySelector("#picture4").src = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";
    document.querySelector("#temp3").innerHTML = temp3 + " °C";

    var next4 = data.list[26].dt_txt.substring(0, 10);
    var icon4 = data.list[26].weather[0].icon;
    var temp4 = (data.list[26].main.temp - 273.5).toFixed(2);
    document.querySelector("#four").innerHTML = next4;
    document.querySelector("#picture5").src = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";
    document.querySelector("#temp4").innerHTML = temp4 + " °C";

    var next5 = data.list[34].dt_txt.substring(0, 10);
    var icon5 = data.list[34].weather[0].icon;
    var temp5 = (data.list[34].main.temp - 273.5).toFixed(2);
    document.querySelector("#five").innerHTML = next5;
    document.querySelector("#picture6").src = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";
    document.querySelector("#temp5").innerHTML = temp5 + " °C";



    var latitude = data.city.coord.lat;
    console.log(latitude);
    var longitude = data.city.coord.lon;
    console.log(longitude);
    const uluru = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });


}



document.getElementById("enter").addEventListener('click', search);

function search(event) {
    event.preventDefault();
    if (document.getElementById("userInput").value == "") {
        console.log(document.getElementById("userInput").value);
        getData("London");



        console.log("empty");
    }
    else if (document.getElementById("userInput").value == "New York") {
        getData("New York");
        console.log("New York");
    }
    else {

        var x = document.getElementById("userInput").value;


        getData(x);

    }
}

document.getElementById("NY").addEventListener('click', myFunction1);

function myFunction1() {
    getData("New York");
}
document.getElementById("P").addEventListener('click', myFunction2);

function myFunction2() {
    getData("Paris");
}
document.getElementById("LAS").addEventListener('click', myFunction3);

function myFunction3() {
    getData("Los Angeles");
}


getData("London");
