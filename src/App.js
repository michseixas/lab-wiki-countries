import './App.css';
import countriesJSON from './countries.json';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  console.log("que trae countriesjson-----" , countriesJSON)
  return (
    <>
      <Navbar />
    <CountriesList countriesArr={countriesJSON} />
    <CountryDetails />
    </>
  )
}

export default App;
