import { Link } from "react-router-dom";
import countriesJSON from '../countries.json';
import { BrowserRouter } from "react-router-dom";

//STYLED COMPONENTS:
const styles = {width: "30%"}

function CountryDetails() {
  return (
    <div className="col-7">
    <h1>France</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={styles}>Capital</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            551695 km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li><Link href="/AND">Andorra</Link></li>
              <li><Link href="/BEL">Belgium</Link></li>
              <li><Link href="/DEU">Germany</Link></li>
              <li><Link href="/ITA">Italy</Link></li>
              <li><Link href="/LUX">Luxembourg</Link></li>
              <li><Link href="/MCO">Monaco</Link></li>
              <li><Link href="/ESP">Spain</Link></li>
              <li><Link href="/CHE">Switzerland</Link></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CountryDetails;