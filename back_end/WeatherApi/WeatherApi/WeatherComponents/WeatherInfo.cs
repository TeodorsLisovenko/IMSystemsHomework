using Newtonsoft.Json;

namespace WeatherApi.WeatherComponents
{
    public class WeatherInfo
    {
        [JsonProperty("main")] public string Condition { get; set; }

        [JsonProperty("description")] public string Description { get; set; }
    }
}