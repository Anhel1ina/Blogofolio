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


function App() {
  const baseStyle = 'base_style'
  const themeCtx = useThemeContext()

  return (
    <div className={`${themeCtx.state} ${baseStyle}`}>    
      <Header/>
      <div style={{
        minHeight: 'calc(100vh - 164px)'
      }
      } >
        <MainWrapper/>
        {/* <SignInPage/> */}
        {/* <SignUpPage/> */}
        {/* <ResetPasswordPage/> */}
        {/* <NewPasswordPage/> */}
        {/* <SearchResultsPage/> */}

        {/* <OpenPostPage/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
