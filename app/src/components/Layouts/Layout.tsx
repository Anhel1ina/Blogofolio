import React from 'react'
import { Header } from '../Header/Header';
import { useThemeContext } from '../../helpers/ThemeContext';
import { AuthContextProvider } from '../../helpers/AuthContext';
import { Footer } from '../Footer/Footer';
import { MainWrapper } from '../MainWrapper/MainWrapper';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
    const baseStyle = 'base_style'
    const themeCtx = useThemeContext()
    return (
        <div className={`${themeCtx.state} ${baseStyle}`}>
            <Header />
            <div style={{
                minHeight: 'calc(100vh - 164px)'
            }
            } >
                {/* <MainWrapper /> */}
                {/* <SignInPage/> */}
                {/* <SignUpPage/> */}
                {/* <ResetPasswordPage/> */}
                {/* <NewPasswordPage/> */}
                {/* <SearchResultsPage/> */}

                {/* <OpenPostPage/> */}

                {/* <SuccessPage/> */}
                {/* <RegistrationConfirmationPage/> */}
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
}
