import { useSelector } from "react-redux";
import { AppState } from "../store";

// export const checkAuth = (globalState: AppState) => globalState.auth

export const useAuthState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.auth
    )
    return selector
}