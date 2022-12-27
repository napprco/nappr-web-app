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
import LoginSecurityPage from './pages/LoginSecurityPage/LoginSecurityPage';
import PasswordUpdate from './pages/PasswordUpdate/PasswordUpdate';
import EditPersonalDetails from './pages/EditPersonalDetails/EditPersonalDetails';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import Subscription from './pages/Subscription/Subscription';
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
        <Route path='/loginsecurity' element={<LoginSecurityPage />}></Route>
        <Route path='/updatepassword' element={<PasswordUpdate />}></Route>
        <Route path='/home/editdetails' element={<EditPersonalDetails />}></Route>
        <Route path='/home/payment/method' element={<PaymentMethod />}></Route>
        <Route path='/home/subscription' element={<Subscription />}></Route>
      </Routes>
    </div>
  );
}

export default App;
