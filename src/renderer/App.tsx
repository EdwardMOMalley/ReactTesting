import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { SetStateAction, useState } from 'react';

function Hello() {
  const [text, setText] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setText(event.target[0].value);
  };
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" alt="hello"/>
        <button type="submit">Submit</button>
      </form>
      <h1>{text}</h1>
    </div>
  );
}


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
