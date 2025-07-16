import { Navigate } from 'react-router-dom';
import { getItemWithExpiry } from './localStorage';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = getItemWithExpiry('token')// check token or context or cookie etc
    // localStorage.getItem('token'); // example

    return isLoggedIn ? children : <Navigate to="/user/login" />;
};

export default PrivateRoute;
