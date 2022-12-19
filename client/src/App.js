import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from "./login_components/WelcomePage";
import LoginPage from "./login_components/LoginPage"

// sudo service postgresql start

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false)

  return (

    <BrowserRouter>
      {/* <Header /> */}
      {/* {!!loggedIn ? <NavBar /> : ""} */}
      
      <Routes>
        {/* <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} /> */}
        <Route exact path="/" element={!!loggedIn ? <WelcomePage /> : <LoginPage />} />
        {/* <Route exact path="/login" element={<Login />} /> */}

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;