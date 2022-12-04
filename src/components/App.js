import React, {useState, useReducer } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [state, setState] = useState(1);
	const [city, setCity] = useState(1);
	const [town, setTown] = useState(1);

	const handleStateChange = (event) =>{
		setState(event.target.value);
		setCity(1);
		setTown(1);
	}

	const handleCityChange = (event) =>{
		setCity(event.target.value);
		setTown(1);
	}

	const handleTownChange = (event) =>{
		setTown(event.target.value);
	}
  return <div id="main">
    <div className="main-section">
    <div className="dropdown-section">
				<section id="state" className="dropdown-section state-section">
					<label>States: </label>

					<select value={state} onChange={handleStateChange}>
						{
							states.map((state, index) => <option key={`state-${index}`} value={index}>{state.name}</option>)
						}
					</select>
				</section>
				<section id="city" className="dropdown-section state-section">
					<label>Cities: </label>

					<select value={city} onChange={handleCityChange}>
						{
							states[state].cities.map((currentCity, index) => <option key={`city-${index}`} value={index}>{currentCity.name}</option>)
						}
					</select>
				</section>
				<section id="landmark" className="dropdown-section state-section">
					<label>Towns: </label>

					<select value={town} onChange={handleTownChange}>
						{
							states[state].cities[city].towns.map((town, index) => <option key={`town-${index}`} value={index} >{town.name}</option>)
						}
					</select>
				</section>
			</div>
    </div>
  </div>;
}

export default App;
