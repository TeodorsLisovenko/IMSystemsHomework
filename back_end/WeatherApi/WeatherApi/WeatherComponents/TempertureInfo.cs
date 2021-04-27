using Newtonsoft.Json;

namespace WeatherApi.WeatherComponents
{
    public class TempertureInfo
    {
        [JsonProperty("temp")] public double Temperture { get; set; }

        [JsonProperty("feels_like")] public double TempertureFeelsLike { get; set; }

        [JsonProperty("temp_min")] public double TempertureMin { get; set; }

        [JsonProperty("temp_max")] public double TempertureMax { get; set; }

        [JsonProperty("pressure")] public double Pressure { get; set; }

        [JsonProperty("humidity")] public double Humidity { get; set; }
    }
}