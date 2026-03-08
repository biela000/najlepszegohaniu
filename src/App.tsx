import { useState } from 'react'
import Milka from './assets/milkalocket1.gif';
import Beza from './assets/bezalocket.gif';
import './App.css'

function App() {
  const [imageSrc, setImageSrc] = useState("milka");
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(target.value);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Wszystkiego najlepszego!!!!!!!</h1>
      </header>
      <div className="input-container">
        <input type="radio" name="img" id="img-checkbox-milka" value="milka" checked={imageSrc === "milka"} onChange={handleChange} />
        <label htmlFor="img-checkbox-milka">Milka</label>
        <input type="radio" name="img" id="img-checkbox-beza" value="beza" checked={imageSrc === "beza"} onChange={handleChange} />
        <label htmlFor="img-checkbox-beza">Beza</label>
      </div>
      <img src={imageSrc === "milka" ? Milka : Beza} alt="Obrazek" className="image" />
    </div>
  )
}

export default App
