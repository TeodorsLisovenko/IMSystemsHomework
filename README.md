# Hello :hand: and welcome to a homework exercise for IMSystems.

This repository contains a project separated by main back-end and front-end folders.

:information_source: The backend part is containing API by [.NET CORE version 5.0.5](https://dotnet.microsoft.com/download/dotnet/5.0). API's objective is to deliver simple weather data by calling it with the city of interest. I used [openweathermap.org](https://openweathermap.org/) API to retrieve weather data for little minimization and modification. Additionally, backend API can deliver JSON-type files with saved weather content in them. From third-party libraries, it is using just [Json.NET](https://www.newtonsoft.com/json/help/html/Introduction.htm)

## Backend
-------------
#### /api/get
Retrieve a weather data
##### Request
```http
GET /WeatherForecast/weather?city=riga
```

| Name | Description                                            |
|---        |---                                                |
| *city*    | City of interest for which to retrieve weather info. **(Default value is Riga)** |
| *printOut*| **(optional)** Download JSON-type file. Values True/False.  **(Default value is False)**
| *comment* | **(optional)** Add a "comment" key property for the downloaded JSON file. **(Works only if "printOut" is True)**|

##### Response
```json
{
    "name": "Rīga",
    "weather": [
        {
            "main": "Clouds",
            "description": "broken clouds"
        }
    ],
    "main": {
        "temp": 6.0,
        "feels_like": 2.76,
        "temp_min": 6.0,
        "temp_max": 6.0,
        "pressure": 1012.0,
        "humidity": 75.0
    },
    "wind": {
        "speed": 4.63,
        "deg": 340.0
    },
    "visibility": 10000.0
}
```
## Frontend
:information_source: The frontend part ("under-development") is containing a basic React app, which objective is to interact and display backend API functionality. From third party libraries, it is using just [reactstrap](https://reactstrap.github.io/).