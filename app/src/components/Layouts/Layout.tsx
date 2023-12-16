import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/selectors';

export const Layout = () => {
    const baseStyle = 'base_style'
    const state = useSelector(selectTheme)
    return (
        <div className={`${state.theme} ${baseStyle}`}>
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
