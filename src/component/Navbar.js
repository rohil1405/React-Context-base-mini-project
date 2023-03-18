import React, { useContext } from 'react';
import {  ThemeContext } from '../contexts/Themecontext';
import { AuthContext } from '../contexts/Authcontext';

// CLASS BASE COMPONENTS

// class Navbar extends React.Component{

//     // static contextType = ThemeContext;

//     render(){

//         // const { isDarkTheme, darkTheme, lightTheme } = this.context;
//         // const theme = isDarkTheme ? darkTheme : lightTheme;

//         return(
//             <AuthContext.Consumer>{(authContext) => {
//                 return(
//                     <ThemeContext.Consumer>{(themeContext) => {
//                         const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//                         const { isLoggedIn, changeAuthStatus } = authContext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme;

//                         return (
//                             <nav style={{ 
//                                 background:theme.background,
//                                 color: theme.text,
//                                 height: '120px'
//                             }}>

//                             <h2 style={{ textAlign: 'center' }}>
//                                 Oak Acedemy
//                             </h2>

//                             <p 
//                             onClick={changeAuthStatus} style={{ textAlign: 'center' }}
//                             >
//                                 { isLoggedIn ? 'Logged in' : 'logged out' }
//                             </p>

//                             <div className='ui three buttons'>
//                                 <button className="ui button">Overview</button>
//                                 <button className="ui button">Contact</button>
//                                 <button className="ui button">Support</button>
//                             </div>
//                             </nav>
//                         )
//                     }}
//                     </ThemeContext.Consumer>
//                 )       
//             }}
//             </AuthContext.Consumer>
//         );  
//     }
// };

// FUNCTION BASED COMPONENT (HOOK)

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return(
        <nav style={{ 
            background:theme.background,
            color: theme.text,
            height: '120px'
        }}>
        
        <h2 style={{ textAlign: 'center' }}>
           React Hooks
        </h2>
        
        <p 
        onClick={changeAuthStatus} style={{ textAlign: 'center' }}
        >
        { isLoggedIn ? 'Logged in' : 'logged out' }
        </p>
        
        <div className='ui three buttons'>
            <button className="ui button">Overview</button>
            <button className="ui button">Contact</button>
            <button className="ui button">Support</button>
        </div>
        </nav>
    )

}

export default Navbar;