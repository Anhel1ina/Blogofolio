import './App.css'
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Footer } from './components/Footer/Footer';
import { SignInPage } from './pages/SignInPage/SIgnInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';


function App() {
  const [theme, setTheme] = useState<string>('light')//переместить в App

  const changeTheme = (theme: string) => {
      setTheme(theme)
  }
  const baseStyle = 'base_style'

  return (
    <div className={`${theme} ${baseStyle}`}>    
      <Header theme={theme} changeTheme={changeTheme}/>
      {/* <MainWrapper/> */}
      {/* <SignInPage/> */}
      <SignUpPage/>
      <Footer/>
    </div>
  );
}

export default App;
