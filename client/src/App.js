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

  const blankUserTemplate = {
    name: "",
    email: "",
    profile_image: "",
    password: ""
  }
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(blankUserTemplate)

  useEffect(() => {
    //to users#show
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
          .then(setLoggedIn(true))
      }
    })
  }, [])

  const onLogin = (userInfo) => {
    setLoggedIn(true)
    setUser(userInfo)
  }

  const onLogout = () => {
    setUser(blankUserTemplate)
    setLoggedIn(false)
  }

  return (

    <BrowserRouter>
      <Header />
      <Navigation /> 
      
      <Routes>
        {/* <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} /> */}
        <Route exact path="/" element={!!loggedIn ? <WelcomePage onLogout={onLogout} user={user}/> : <LoginPage onLogin={onLogin}/>} />
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