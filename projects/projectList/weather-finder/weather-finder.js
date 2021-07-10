window.onload = () => {
     let city;
     function getData(){
         if(document.querySelector('.city').value != ''){
             city = document.querySelector('.city').value;  
 
                 getWeather(city).catch(() => {
                     let error = "We Cannot Find This City ! Please Try Again"
 //            $('.result').append(`<h4 class="text-center text-dark">${error} </h4>`);
             alert(error);
                     clearInterval(this);
                     
             });   
         }
           else alert('Enter Your City Name First');  
     }
     document.querySelector('.btn').addEventListener('click', () => {
         getData();
         
     });        
 
     document.querySelector('.city').addEventListener("keyup", (event)=> {
         if (event.keyCode === 13) {
             event.preventDefault();
         getData();}
     });
 
   
 
     async function getWeather(city) {
         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c76ac63e6c049f79146b76313771444c`);
         let data = await response.json();
      
         let dataResult = {
             name : data.name,
             lat : data.coord.lat,
             lon : data.coord.lon,
             main : data.weather[0].main,
             desc : data.weather[0].description,
             temp : data.main.temp,
 //            icon : `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
             name : data.name,
             dt: new Date().toDateString(),
             country: data.sys.country
         }   
         let card = showData(dataResult);
     }
 
     
     //showing result
     function showData(result) {
   
         $('.result').css('display', 'block');
         $('.name').text(result.name +',' + result.country);
         $('.location').text('Lat : '+result.lat +" & " +'Lon : ' +result.lon);
         
         if(result.main == 'Haze'){
         $('.desc').text(result.main  + ' 🌫️');
         }
         else if(result.main == 'Rain')
         $('.desc').text(result.main  + ' ☂️');
         
         else if(result.main == 'Clouds')
         $('.desc').text(result.main  + ' ☁️');
         
         else if(result.main == 'Smoke')
         $('.desc').text(result.main  + ' 🌁 ');
          
         else if(result.main == 'Snow')
         $('.desc').text(result.main  + ' ❄️ ');
         
         else if(result.main == 'Clear')
         $('.desc').text(result.main  + ' ⛅ ');
 
        $('.date').text(result.dt);
        $('.temp').text((result.temp-273.15).toFixed(1) +'°C');
        
     }
 };
 
 