import './App.css'
import styles from './app.module.scss'
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Footer } from './components/Footer/Footer';
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
  const baseStyle = 'base_style'
  const themeCtx = useThemeContext()

  return (
    // <div className={`${themeCtx.state} ${baseStyle}`}>  
    // <AuthContextProvider>
    //     <Header/>
    // </AuthContextProvider>  
    //   <div style={{
    //     minHeight: 'calc(100vh - 164px)'
    //   }
    //   } >
    //     <MainWrapper/>
    //     {/* <SignInPage/> */}
    //     {/* <SignUpPage/> */}
    //     {/* <ResetPasswordPage/> */}
    //     {/* <NewPasswordPage/> */}
    //     {/* <SearchResultsPage/> */}

    //     {/* <OpenPostPage/> */}

    //     {/* <SuccessPage/> */}
    //     {/* <RegistrationConfirmationPage/> */}
    //   </div>
    //   <Footer/>
    // </div>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainWrapper/>}/>
        <Route path='signin' element={<SignInPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='search' element={<SearchResultsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
