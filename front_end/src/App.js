import "./App.css";
import { Button, Form, Label, Input } from "reactstrap";
import React, { Component } from "react";

class Weather extends Component {
  state = {
    cityName: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  fetchWeather = (e) => {
    e.preventDefault();

    fetch(
      "https://localhost:44320/WeatherForecast/weather?city=" +
        this.state.cityName
    ).then((res) => {
      console.log(res.json());
    });
    //    console.log(this.state.city)

  };
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
              onClick={() => this.setState({ showing: !showing })}
            >
              Submit
            </Button>
            {showing ? "Show content test" : null}
          </Form>
        </div>
      </>
    );
  }
}
export default Weather;
