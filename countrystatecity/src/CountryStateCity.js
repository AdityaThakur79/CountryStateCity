import React,{useState,useEffect} from 'react'
import "./CountryStateCity.css";
function CountryStateCity() {


  //---------------Country-----------------------
  const [countryCode,setCountryCode] = useState('');

  //Fetching All Country From Npm
  let Country = require("country-state-city").Country;
  let allCountries = Country.getAllCountries();

  //Fetching Country Code of Selected Country
  const handleCountry=(event)=>{
     const getCountryCode = event.target.value;
     setCountryCode(getCountryCode);
  }


  //-----------------State------------------------
  const[stateCode,setStateCode]=useState('');

  //Fetching All States From Npm
  let State = require("country-state-city").State;

  //Fetching All States of Particular Country By Country Code
  let allStates = State.getStatesOfCountry(countryCode);
  console.log(allStates);

  //Setting StateCode 
  const handleState=(event)=>{
    const getStateCode= event.target.value;
    setStateCode(getStateCode);
  }


  //--------------------City----------------------------
  let City = require("country-state-city").City;

  //fetching All City Of Particular country and state by country and state code
  let allcity = City.getCitiesOfState(countryCode,stateCode);



  return (
    <div>
      <select name="country" onChange={(e)=>handleCountry(e)}>
              <option>----select Country----</option>
              {
                allCountries.map((e,key)=>{
                  return <option key={key} value={e.countryCode}>{e.name}</option>
                })} 
            </select><br/>

            <select name="state" onChange={(e)=>handleState(e)}>
              <option>----select State----</option>
               {
                   allStates.map((e,key)=>{
                    return <option key={key} value={e.stateCode}>{e.name}</option>
               })}
            </select>
            <br></br>
            <select name="city">
              <option>----select City----</option>
              {
                allcity.map((e,key)=>{
                  return <option key={key} value={e.cityCode}>{e.name}</option>
                })
              }
            </select>
            <br></br>
    </div>
  )
}

export default CountryStateCity
