import './App.css'
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { SignInPage } from './pages/SignInPage/SIgnInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage';
import { useThemeContext } from './helpers/ThemeContext';
import { OpenPostPage } from './pages/OpenPostPage/OpenPostPage';
import { SuccessPage } from './pages/SuccessPage/SuccessPage';
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage/RegistrationConfirmationPage';
import { RequireAuth } from './helpers/RequireAuth';
import { AuthContextProvider } from './helpers/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainWrapper/>}/>
        <Route path='openpost/:id' element={<OpenPostPage/>}/>

        <Route path='auth'>
          <Route index element={<SignUpPage/>}/>
          <Route path='signup'>
            <Route path='success' element={<SuccessPage/>}/>
          </Route>   
          <Route path='signin'>
            <Route index element={<SignInPage/>}/>
            <Route path='registrationconfirm' element={<RegistrationConfirmationPage/>}/>
            <Route path='forgotpassword' element={<ResetPasswordPage/>}/>
          </Route>
        </Route>

        <Route path='search' element={<SearchResultsPage/>}/>
      </Route>
    </Routes>
  );
}


export default App;
