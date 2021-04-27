using System.Collections.Generic;

using Newtonsoft.Json;

using WeatherApi.WeatherComponents;

namespace WeatherApi
{
    public class WeatherForecast
    {
        [JsonProperty("name")] public string City { get; set; }

        [JsonProperty("weather")] public List<WeatherInfo> Weather { get; set; }

        [JsonProperty("main")] public TempertureInfo Temperture { get; set; }

        [JsonProperty("wind")] public WindInfo Wind { get; set; }

        [JsonProperty("visibility")] public double Visibility { get; set; }
    }
}