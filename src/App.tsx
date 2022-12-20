import { Route, Routes } from 'react-router-dom';

import './App.css';
import ChoosePlan from './pages/ChoosePlan/ChoosePlan';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ResetPasswordTwo from './pages/ResetPassword/ResetPasswordTwo';
import ResetPasswordThree from './pages/ResetPassword/ResetPasswordThree';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ChoosePlan />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='/resetpasswordtwo' element={<ResetPasswordTwo />}></Route>
        <Route path='/resetpasswordthree' element={<ResetPasswordThree />}></Route>
      </Routes>
    </div>
  );
}

export default App;
