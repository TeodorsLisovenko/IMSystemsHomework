import "./App.css";
import {
  Button,
  Form,
  Label,
  Input,
  Table,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import React, { Component } from "react";
import download from "downloadjs";

class Weather extends Component {
  state = {
    cityName: "",
    weatherData: [],
    comment: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  downloadFile = (e) => {
    e.preventDefault();

    fetch(
      "https://localhost:44320/WeatherForecast/weather?city=" +
        this.state.cityName +
        "&printOut=True&comment=" +
        this.state.comment
    )
      .then((response) => response.blob())
      .then((blob) => download(blob, "download.json"));
  };

  fetchWeather = (e) => {
    e.preventDefault();

    fetch(
      "https://localhost:44320/WeatherForecast/weather?city=" +
        this.state.cityName
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          weatherData: jsonResponse,
        });
      });
  };

  renderForecastsTable(weatherData) {
    if (
      weatherData === undefined ||
      weatherData.length === 0 ||
      weatherData.hasOwnProperty("Error")
    ) {
      return (
        <h3 id="error_text">
          {" "}
          Please be collaborative and enter the proper city name.{" "}
        </h3>
      );
    } else {
      return (
        <>
          <Table id="table_text" size="sm" bordered responsive striped hover>
            <h3 id="table_title_city">{weatherData.name} </h3>
            <tbody id="table_content">
              <tr>
                This cities clouds can be described: {weatherData.weather[0].main}, <br /> although more precisely: {weatherData.weather[0].description}.
              </tr>
              <tr>
                Formal tempertures is: {weatherData.main.temp_min} °C, <br />
                but actually can feal like it is: {weatherData.main.feels_like}°C.
              </tr>
              <tr>Minimal temperture: {weatherData.main.temp_min} °C.</tr>
              <tr>Maximal temperture: {weatherData.main.temp_max} °C.</tr>
              <tr>Pressure: {weatherData.main.pressure} mb.</tr>
              <tr>Humidity: {weatherData.main.humidity}%.</tr>
              <tr>Visibility: {weatherData.visibility}%.</tr>
              <tr>Wind speed: {weatherData.wind.speed} mph.</tr>
              <tr>Wind deegre: {weatherData.wind.deg}°.</tr>
            </tbody>
          </Table>

          <p>
            If you would like to download a JSON file containing this weather
            data, just write a comment that will be included and press the
            button...
          </p>

          <Form>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button onClick={this.downloadFile} color="danger">
                  Download
                </Button>
              </InputGroupAddon>
              <Input
                name="comment"
                value={this.state.comment}
                onChange={this.handleChange}
                placeholder="Your comment..."
              />
            </InputGroup>
          </Form>
        </>
      );
    }
  }

  render() {
    const { showing } = this.state;
    return (
      <>
        <div class="container p-3 text-white">
          <h1 id="title_text">Simple weather teller</h1>
          <p id="title_text">Just name the city and you will have it!</p>

          <Form class="form-inline" onSubmit={this.fetchWeather}>
            <div class="mb-2">
              <Label id="title_text">City: </Label>
              <Input
                type="text"
                name="cityName"
                value={this.state.cityName}
                onChange={this.handleChange}
                placeholder="Enter city..."
              />
            </div>
            <Button
              class="btn mb-2"
              outline
              color="danger"
              type="submit"
              placeholder="Submit"
              value="Submit"
              onClick={() => this.setState({ showing: true })}
            >
              Submit
            </Button>
            {showing ? this.renderForecastsTable(this.state.weatherData) : null}
          </Form>
        </div>
      </>
    );
  }
}

export default Weather;
