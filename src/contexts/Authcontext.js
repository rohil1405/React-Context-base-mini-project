import React, { createContext, useState } from "react";

export const AuthContext = createContext();

// CLASS BASED COMPONENT

// class AuthContextProvider extends React.Component {
    
//     state = {
//         isLoggedIn: false
//     };

//     changeAuthStatus = () => {
//         this.setState({ isLoggedIn: !this.state.isLoggedIn });
//     };

//     render() {
//         return(
//             <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

// FUNCTION BASED COMPONENT

const AuthContextProvider = ({ children }) => {
    
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const changeAuthStatus = () => {
        setIsloggedIn(!isLoggedIn);
    };

    return(
        <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;