import { useContext, useEffect, useState } from "react";
import authContext from "./authContext";
import { useNavigate } from "react-router-dom";
const ContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        }
        if (token) {
            setAuth(token);
        }
    }, [])
    const login = (token) => {
        localStorage.setItem('token', token);
        setAuth(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
    };
    return (
        <authContext.Provider value={{ auth, login, logout }}>
            {children}
        </authContext.Provider>
    )
}
const useAuth = () => {
    return useContext(authContext)
}
export { ContextProvider, useAuth }