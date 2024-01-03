import './App.css'
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { SignInPage } from './pages/SignInPage/SIgnInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage';
import { OpenPostPage } from './pages/OpenPostPage/OpenPostPage';
import { SuccessPage } from './pages/SuccessPage/SuccessPage';
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage/RegistrationConfirmationPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';
import { error } from 'console';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AddPostPage } from './pages/AddPostPage/AddPostPage';

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
        
        <Route path='search'>
            <Route index element={<SearchResultsPage/>}/>
            <Route path='openpost/:id' element={<OpenPostPage/>}/>
        </Route>
        <Route path='addpost' element={<AddPostPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}


export default App;
