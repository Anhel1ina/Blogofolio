import './App.css'
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';


function App() {
  const [theme, setTheme] = useState<string>('light')//переместить в App

  const changeTheme = (theme: string) => {
      setTheme(theme)
  }

  return (
    <div className={theme}>    
      <Header theme={theme} changeTheme={changeTheme}/>
      <MainWrapper/>
    </div>
  );
}

export default App;
