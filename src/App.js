
import './App.css';
import Crud from './Crud';
import Login from './Login';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/crud' element={<Crud/>}/>
       </Routes>
    </div>
  );
}

export default App;