$(".data").hide();
$("#check").click(function getWeather(){
	if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(showPosition);
		
}
else{
alert ('Geolocation is not supported;');
	
}

function showPosition(position){
	var api = "https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
	$(".data").show();
	$.getJSON(api,function(data){
		var tempInCelsius = Math.round(data.main.temp);
		$(".locationData").html("Location: " + data.name + ", " + data.sys.country);

		

		console.log (data);
		if (data.weather[0].main == "Clear"){
			$(".weatherData").html("<i class ='wi wi-day-sunny'></i>" + "  " + data.weather[0].main);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>" + " " + tempInCelsius+ "<i class = 'wi wi-celsius'></i>");
		} else if (data.weather[0].main == "Rain"){
		  	$(".weatherData").html("<i class = 'wi wi-night-sleet'></i>"+ "  " + data.weather[0].main);	
		  	$(".tempData").html("<i class = 'wi wi-thermometer'></i>" + " " + tempInCelsius+ "<i class = 'wi wi-celsius'></i>");
		} else if (data.weather[0].main == "Clouds"){
		  	$(".weatherData").html("<i class = 'wi wi-cloud'></i>" + " Cloudy");	
		  	$(".tempData").html("<i class = 'wi wi-thermometer'></i>" + " " + tempInCelsius+ "<i class = 'wi wi-celsius'></i>");
		  	$(".body").css("body{background-image: url('/cloudy.jpg');}")
		} else if (data.weather[0].main == "Drizzle"){
			$(".weatherData").html("<i class = 'wi wi-day-showers" + " "+ data.weather[0].main);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>" + " " + tempInCelsius + "<i class = 'wi wi-celsius'></i>");
		} else if (data.weather[0].main ==  "Snow"){
			$(".weatherData").html("<i class = 'wi wi-snow'></i>" + "  "+ data.weather[0].main);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>" + " " + tempInCelsius + "<i class = 'wi wi-celsius'></i>");
		} else if (data.weather[0].main == "Thunderstorm"){
			$(".weatherData").html("<i class = 'wi wi-storm-showers'></i>" + "  "+ data.weather[0].main);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>"+ " "+tempInCelsius + "<i class= 'wi wi-celsius'></i>");
		} else if (data.weather[0].main ==  "Mist"){
			$(".weatherData").html("<i class = 'wi wi-fog'>	</i>" + "  "+ data.weather[0].main);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>"+ " "+tempInCelsius + "<i class= 'wi wi-celsius'></i>");
		} else {
			return "Your Weather Doesn't Exist";
		}

		$(".Celsius").click(function tempCConverter(){
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>"+" "+tempInCelsius + "<i class= 'wi wi-celsius'></i>");
		})

		$(".Fahrenheit").click(function tempFConverter(){
			var toFahrenheit = (tempInCelsius * (9/5)) + 32;
			var Fahrenheit = Math.round(toFahrenheit);
			$(".tempData").html("<i class = 'wi wi-thermometer'></i>"+" "+Fahrenheit + "<i class= 'wi wi-fahrenheit'></i>");

				
			}) 
		
				
			
			
			

			
		});
	};
}); 


		 




