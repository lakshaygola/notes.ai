import api from "../../api";
import { REFERSH_TOKEN, ACCESS_TOKEN } from "../../constants";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }){
    const [ isAuthorized, setIsAuthorized ] = useState(null);

    useEffect( () => {
        authorization().catch(() => setIsAuthorized(false))
    }, []);

    const getRefreshAccessToken = async () => {

        const refreshToken = localStorage.getItem(REFERSH_TOKEN);

        try {
            const response = await api.post('/api/access/token/', {
                refresh: refreshToken,
            });
            if (response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            }else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const authorization = async () => {
        // Get the access token and check its validity

        const access_token = localStorage.getItem(ACCESS_TOKEN);

        if (!access_token){
            // If access token is not present
            setIsAuthorized(false);
            return;
        }
        // Decoding an access token to check its validity
        
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now()

        if (decoded.exp * 1000 < currentTime){
            // Token is expired
            await getRefreshAccessToken();
        }else {
            // Token is valid
            setIsAuthorized(true);
        }
    };

    if (isAuthorized === null) {
        return <div>Loading .... </div>
    }

    return isAuthorized ? children : < Navigate to="./login" />;
}

export default ProtectedRoute;

