import React, { Component } from 'react';
import './../../App.css';
import WeatherCard from './WeatherCard';
const APPid = process.env.appId

console.log(process.env.appId);
export default class TodoList extends Component {

	constructor(props){
		super(props);

        this.state = {forecast:''};
	}

	componentDidMount(){
		this.updateWeather();
	}

	updateWeather(){

		// Get our weather information
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au&appid=${APPid}`)
        .then(response => response.json())
        .then(data => {
            this.setState((prevState, props) => ({
                forecast: data.list.map((weatherDetails) => <WeatherCard weatherItem={weatherDetails} key={ weatherDetails.dt } />)
            }));
        })
	}

	render() {
		return (
			<div className="view weather-list">
				<h3 className="title">Forecast</h3>
				<div className="cards">
					<ul>{this.state.forecast}</ul>
				</div>
			</div>
		);
	}
}




