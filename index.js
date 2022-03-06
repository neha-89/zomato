function darkmode() {
  document.body.classList.toggle('dark-mode');
}

// function changeMode(){
//     var mode = document.body;
//     mode.classList.toggle("dark");
// }

function loadCoupon(){
  document.getElementById("coupon").style.visibility = "visible";
}

function closeCoupon(){
  document.getElementById("coupon").style.visibility = "hidden";
}

var x = document.getElementById("out");
var y = document.getElementById("weatherOut");
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerText="Geo Not Supported";
    }
}

function showPosition(data){
    console.log(data)
    x.innerText=`Latitude is ${data.coords.latitude}, Longitude is ${data.coords.longitude}`
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    // api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) => res.json())
    //return datatype
    .then((data) => {
        let cityName = data.city.name
        let weather = `${data.list[0].temp.day} degree`
        let output = `Weather of ${cityName} is ${weather}`
        console.log(data)
        y.innerText = output;
    })
}
  
