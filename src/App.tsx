import { Route, Routes } from 'react-router-dom';

import './App.css';
import ChoosePlan from './pages/ChoosePlan/ChoosePlan';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ResetPasswordTwo from './pages/ResetPassword/ResetPasswordTwo';
import ResetPasswordThree from './pages/ResetPassword/ResetPasswordThree';
import InfoPage from './pages/InfoPage/InfoPage';
import PurposePage from './pages/PurposePage/PurposePage';
import NapprHome from './pages/NapprHome/NapprHome';
import PrivacySetting from './pages/PrivacySetting/PrivacySetting';
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
        <Route path='/info' element={<InfoPage />}></Route>
        <Route path='/purpose' element={<PurposePage />}></Route>
        <Route path='/home' element={<NapprHome />}></Route>
        <Route path='/privacysetting' element={<PrivacySetting />}></Route>
      </Routes>
    </div>
  );
}

export default App;
