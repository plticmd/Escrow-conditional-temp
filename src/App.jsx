import './App.css'
import GetAccount from './routes/getAccount';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <h1>Escrow conditional temp</h1>
      <ul>
        <li>
          <Link to = "/getAccount">GetAccount</Link>
        </li>
      </ul>
      
      <Routes>
        <Route path = "/getAccount"element = {<GetAccount />}/>
      </Routes>
      
    </div>
  );
}
export default App;
