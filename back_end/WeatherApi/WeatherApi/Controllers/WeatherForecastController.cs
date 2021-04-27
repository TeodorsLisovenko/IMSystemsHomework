using System;
using System.Net;
using System.Text;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WeatherApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet("weather")]
        [Produces("application/json")]
        public IActionResult WeatherData(string city = "riga", bool printOut = false, string comment = "None")
        {
            string getWeather = null;

            try
            {
                getWeather = new WebClient().DownloadString("http://api.openweathermap.org/data/2.5/weather?q=" + city +
                                                            "&units=Metric&APPID=2c5b497eba7a1335c7612f9f64cab958");
            }
            catch (Exception)
            {
                return Ok(new JObject
                {
                    {"Error", "The problem occurred with the passed city name. Please check it!"}
                });
            }

            // You can inspect openWeathermap URL and see that it returns bunch of stuff, BUT I made model "WeatherForecast" to catch values that interests me.

            var weatherData = JsonConvert.DeserializeObject<WeatherForecast>(getWeather);

            if (printOut)
            {
                var jsonObject = JObject.FromObject(weatherData);

                jsonObject.Add("comment", comment);

                return File(Encoding.UTF8.GetBytes(jsonObject.ToString()), "application/json", "file.json");
            }

            return Ok(weatherData);
        }
    }
}