import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from "./login_components/WelcomePage";
import LoginPage from "./login_components/LoginPage"
import Navigation from "./navigation_components/Navigation"
import Profile from "./profile_components/Profile";
import Subjects from "./subject_components/Subjects";
import CreateDecks from "./create_decks_components/CreateDecks";
import Footer from "./navigation_components/Footer";
import Header from "./navigation_components/Header";

// sudo service postgresql start

function App() {
 
  // const blankUserTemplate = {
  //   email: "",
  //   profile_image: "",
  //   decks: []
  // }
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  console.log("user",user)

  useEffect(() => {
    //to users#show
    fetch("/me").then((response) => {
      console.log("response from /me:",response)
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
          .then(setLoggedIn(true))
      }
    })
  }, [])

  const onLogin = (userInfo) => {
    setUser(userInfo)
    setLoggedIn(true)
    console.log("returned from login page",userInfo)
  }

  const onLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    setUser({})
    setLoggedIn(false)
  }

  return (

    <BrowserRouter>
      <Header />
      {loggedIn? <Navigation onLogout={onLogout} loggedIn={loggedIn}/> : ""} 
   
      <Routes>
        <Route exact path="/" element={!!loggedIn ? <WelcomePage onLogout={onLogout} user={user}/> : <LoginPage onLogin={onLogin} />} />
        <Route exact path="/subjects" element={ <Subjects /> } />
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/create" element={ <CreateDecks /> } />
        <Route exact path="/login" element={<LoginPage onLogin={onLogin}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;