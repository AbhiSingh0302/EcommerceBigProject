import { createContext, useEffect, useState } from "react";

const authContext = createContext({
    isLoggedIn: "",
    token: "",
    login: (token) => {},
    logout: () => {}
})

const AuthContextProvider = props => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    
    const userIsLoggedIn = !!token;
    
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("time",0);
        localStorage.setItem("token",token);
    }
    
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("time");
    }

    useEffect(() => {
        const id = setInterval(() => {
            localStorage.setItem("time",Number(localStorage.getItem("time"))+1);
            if(Number(localStorage.getItem("time")) === 300){
                alert("timesup");
                logoutHandler();
                clearInterval(id);
            }
        },1000)
    },[])

    const context = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <authContext.Provider value={context}>
        {props.children}
    </authContext.Provider>
}

export {authContext, AuthContextProvider};