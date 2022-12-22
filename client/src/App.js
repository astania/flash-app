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
import jwt_decode from "jwt-decode";


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

  const handleCallbackResponse = (response) => {
    // console.log("jtw token", response.credential)
    const userObject = jwt_decode(response.credential)
    console.log(userObject)
    const googleUser = {username: userObject.name, email: userObject.email, password: "", profile_image: userObject.picture}
    console.log(googleUser)
    setUser(googleUser)

  }

  useEffect(() => {
    /*global google*/ 

    google.accounts.id.initialize({
      client_id: "574245248770-osgu5o1inmda8a85edfq4ncp1526frt0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      { theme: "outline", size: "large"}
    )

  }, [])



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
      {/* <div id="signInDiv"></div> */}
      <Routes>
        {/* <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} /> */}
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