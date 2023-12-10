import './App.css'
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Footer } from './components/Footer/Footer';
import { SignInPage } from './pages/SignInPage/SIgnInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage';
import { useThemeContext } from './components/helpers/ThemeContext';


function App() {
  // const [theme, setTheme] = useState<string>('light')//переместить в App

  // const changeTheme = (theme: string) => {
  //     setTheme(theme)
  // }

  const baseStyle = 'base_style'
  const themeCtx = useThemeContext()

  return (
    <div className={`${themeCtx.state} ${baseStyle}`}>    
      <Header/>
      <MainWrapper/>
      {/* <SignInPage/> */}
      {/* <SignUpPage/> */}
      {/* <ResetPasswordPage/> */}
      {/* <NewPasswordPage/> */}
      {/* <SearchResultsPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
