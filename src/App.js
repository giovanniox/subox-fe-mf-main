import React, { useState,Fragment} from 'react'
import Navbar from "./components/header/nav-bar/nav-bar/nav-bar";
import GlobalStyle from './styles/GlobalStyles';
import LoginZone from './components/login/login-zone';
import DarkZone from './components/shared/dark-zone'
const App = () => {
  
  const [actions,updateAction] = useState({
    navbarOpen: false,
    zoneLoginOpen: false,
  })

  const handleLogin = (toggle) => {
    updateAction({...actions,  zoneLoginOpen: toggle})
  }

  
  const {navbarOpen,zoneLoginOpen} = actions
  return (
    <Fragment>
      <Navbar 
        navbarState={navbarOpen} 
        loginState={zoneLoginOpen}
        handleNavbar={() => updateAction({...actions, navbarOpen: !navbarOpen })}
        handleLogin={handleLogin}
      />
      <LoginZone loginState={zoneLoginOpen} handleLogin={handleLogin}/>
      <DarkZone  loginState={zoneLoginOpen} handleLogin={handleLogin}/>
      <GlobalStyle />
     
    </Fragment>
  )
}
 
export default App