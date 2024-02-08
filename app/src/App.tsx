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
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AddPostPage } from './pages/AddPostPage/AddPostPage';
import { ActivationPage } from './pages/ActivationPage/ActivationPage';
import { EditPostPage } from './pages/EditPostPage/EditPostPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainWrapper/>}/>
        <Route path='openpost/:id' element={<OpenPostPage/>}/>
        <Route path='editpost' element={<EditPostPage/>}/>

        <Route path='auth'>
          <Route index element={<SignUpPage/>}/>
          <Route path='registrationconfirm' element={<RegistrationConfirmationPage/>}/>
          <Route path='activate' element={<ActivationPage/>}/>
          <Route path='success' element={<SuccessPage/>}/>
          <Route path='signin'>
            <Route index element={<SignInPage/>}/>
            <Route path='forgotpassword' element={<ResetPasswordPage/>}/>
            <Route path='newpassword' element={<NewPasswordPage/>}/>
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
