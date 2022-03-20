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

const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

const getCity = async() =>{
  let response = await fetch(cityUrl);
  let data = await response.json();
  data.map((item)=>{
      let li = document.createElement("li");
      let link = document.createElement("a"); 
      //let element = document.createElement("li");
      let text = document.createTextNode(item.state);
      link.appendChild(text);
      link.href = item.state_id;
      li.appendChild(link);
      //element.value = item.state_id;
      document.getElementById(city).appendChild(li);
  })
}
// for (var i = 0; i < rows; i++){                
//   var opt = table.getValue(i, 0);  
//   var li = document.createElement("li");
//   var link = document.createElement("a");             
//   var text = document.createTextNode(opt);
//   link.appendChild(text);
//   link.href = "#";
//   li.appendChild(link);
//   list.appendChild(li);
// }

const getRest = () => {
  const cityId = document.getElementById('city').value;
  const rest =  document.getElementById('restaurant')

  while(rest.length > 0){
      rest.remove(0)
  }

  fetch(`${restUrl}${cityId}`)
  .then((res) => res.json())
  .then((data) => {
      data.map((item) => {
          let element = document.createElement('li') // <option></option>
          let text = document.createTextNode(`${item.restaurant_name}|${item.address}`) // delhi
          element.appendChild(text) //<option>delhi</option>
          rest.appendChild(element)
      })
  })
}
