import { useEffect, useState } from "react";
import Logo from "./Logo";
import cityIcon from '../../assets/icons/location.svg';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 2rem;
    left: 0rem;

    div {
        padding: 15px 10px;
        /* background-color: var(--grey-100); */
        border-radius: 5px;
        margin-left: 20px;
        
        img {
            max-width: 30px;
            margin-right: 0.8rem;
        }
    }

`

const WeatherInfo = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric&q=sydney`;

    const [weather, setWeather] = useState();
    const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));

    const fetchWeatherInfo = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchWeatherInfo();
    }, []);
    
    useEffect(() => {
        let timeStamp = setInterval(() => {
            let timer = new Date().toLocaleTimeString();
            setTime(timer);
        }, 1000 * 60);
        return () => {
            clearInterval(timeStamp);
        }
    }, [])

    return (
        <Wrapper>
            <Logo />
            {weather && <>
                <div className="d-flex align-items-center">
                    <img src={cityIcon} alt="city" />
                    <p className="color-blue mb-0"><span className="semi-bold">In</span> {weather.name} ({time}) | <span className="semi-bold">Temp:</span> {weather.main.temp} &#8451;</p>
                </div>
            </>}
        </Wrapper>
    )
}

export default WeatherInfo