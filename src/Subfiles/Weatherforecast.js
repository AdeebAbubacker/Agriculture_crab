import React, { useState, useEffect } from 'react';
import earth from "../asset/earth.png";

const Weather = () => {
  const [data, setData] = useState({
    celcius: 0,
    name: 'Aluva',
    humidity: 10,
    speed: 2
  });

  useEffect(() => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=035c9c114a7bc6d1698290fd89ce7a5b&&units=metric`;
    fetch(api)
      .then((response) => response.json())
      .then((res) => {
        setData((prevData) => ({
          ...prevData,
          celcius: res.main.temp,
          name: res.name,
          humidity: res.main.humidity,
          speed: res.wind.speed,
          weather: res.weather // Include weather data in the state
        }));
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [data.name]);

  const handleSelectChange = (e) => {
    const selectedTown = e.target.value;
    setData((prevData) => ({
      ...prevData,
      name: selectedTown
    }));
  };

  const isRaining = data.weather && data.weather.some((condition) => {
    const { main } = condition;
    return main.toLowerCase().includes('rain');
  });

  return (
    <div style={{ height: "550px" }}>
      <div class="d-flex align-items-center" style={{ marginLeft: "600px", marginTop: "10px" }} >
        <img src={earth} style={{ width: "60px" }} />
        <h1 class="text-primary" style={{ marginLeft: "3px" }}> Current weather</h1>
      </div>


      <div className="col-lg-8 text-center" style={{ margin: "0 auto" }}>
        <table className="table table-all-border">
          <thead>
            <tr>
              <th>id</th>
              <th>State</th>
              <th>Town</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KERALA</td>
              <td>
                <select value={data.name} onChange={handleSelectChange} >

                  <option disabled value="">
                    Choose your Town
                  </option>
                  <option key="aluva" value="Aluva">
                    Aluva
                  </option>
                  <option key="perumbavoor" value="Perumbavoor">
                    Perumbavoor
                  </option>
                  <option key="angamaly" value="Angamaly">
                    Angamaly
                  </option>
                  <option key="alangad" value="Alangad">
                    Alangad
                  </option>
                  <option key="paravoor" value="Paravoor">
                    Paravoor
                  </option>
                  <option key="idukki" value="Idukki">
                    Idukki
                  </option>
                  <option key="edappally" value="Edappally">
                    Edappally
                  </option>
                  <option key="kaloor" value="Kaloor">
                    Kaloor
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="card" style={{ marginTop: "50px", marginBottom: "5%" }}>
          <div className='card-header weather-card'></div>
          <div class="card-body">
            <h5 class="card-title" style={{ textAlign: "left" }}>{data.name}</h5>
            <div className='row'>
              <div className='col-lg-6'>
                <p class="card-text" style={{ textAlign: "left" }}>Temp : {data.celcius} °C</p>
              </div>
              <div className='col-lg-6'>
                <p style={{ textAlign: "left" }}>Status : {isRaining ? "It is raining" : "Not raining"}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Weather;
