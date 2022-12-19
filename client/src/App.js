import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from "./login components/WelcomePage";

function App() {
  



  return (

    <BrowserRouter>
      {/* <Header /> */}
      {/* {!!loggedIn ? <NavBar /> : ""} */}
      <Routes>
        {/* <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} /> */}
        <Route exact path="/" element={<WelcomePage />} />
        {/* <Route exact path="/login" element={<Login />} /> */}

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;