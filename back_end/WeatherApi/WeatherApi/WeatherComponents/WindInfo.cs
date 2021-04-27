using Newtonsoft.Json;

namespace WeatherApi.WeatherComponents
{
    public class WindInfo
    {
        [JsonProperty("speed")] public double Speed { get; set; }

        [JsonProperty("deg")] public double Degree { get; set; }
    }
}