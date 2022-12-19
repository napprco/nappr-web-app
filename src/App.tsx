import { Route, Routes } from 'react-router-dom';

import './App.css';
import ChoosePlan from './pages/ChoosePlan/ChoosePlan';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ChoosePlan />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
