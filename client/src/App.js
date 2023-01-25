import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from "./login_components/WelcomePage";
import LoginPage from "./login_components/LoginPage"
import Navigation from "./navigation_components/Navigation"
import Profile from "./profile_components/Profile";
import SubjectsContainer from "./subject_components/Subjects";
import CreateDecks from "./create_decks_components/CreateDecks";
import Footer from "./navigation_components/Footer";
import Header from "./navigation_components/Header";
import DeckDisplay from "./deck_display_components/DeckDisplay";
import EditDeckForm from "./edit_decks_components/EditDeckForm";
import { fetchUser } from "./profile_components/usersSlice";
import { fetchDecks } from "./public_decks_components/publicDecksSlice";
import { fetchSubjects } from "./subject_components/subjectsSlice";
import { useDispatch, useSelector } from 'react-redux';

// import { deckUpdated } from "./public_decks_components/publicDecksSlice";


// sudo service postgresql start

function App() {
 
  // const blankUserTemplate = {
  //   email: "",
  //   profile_image: "",
  //   decks: []
  // }
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  // const decks = useSelector(state => state.decks.entities)
  // const user = useSelector(state => state.user.entities)
  const subjects = useSelector(state => state.subjects.entities)
  const [currentDeck, setCurrentDeck] = useState({})
  const dispatch = useDispatch()

  console.log("user",user)
  // console.log("user From Redux", userFromRedux)
  // console.log("current deck", currentDeck)

  useEffect(() => {
    //to users#show
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
          .then(setLoggedIn(true))
      }
    })
    dispatch(fetchDecks())
    dispatch(fetchSubjects())
    dispatch(fetchUser())
  }, [])

  // useEffect(() => {
  //   //to users#show
  //   dispatch(fetchUser())
  //     if (user.email) {
  //       setLoggedIn(true)
  //       dispatch(fetchDecks())
  //       dispatch(fetchSubjects())
  //     }
  // }, [])


  const onLogin = (userInfo) => {
    setUser(userInfo)
    setLoggedIn(true)
  }
  // console.log("decks in state", decks)
  // console.log("subjects in state", subjects)

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
        <Route exact path="/subjects" element={ <SubjectsContainer subjects={subjects}/> } />
        <Route exact path="/profile" element={ <Profile user={user} onLogout={onLogout} setCurrentDeck={setCurrentDeck}/> } />
        <Route exact path="/create" element={ <CreateDecks subjects={subjects} user={user} setUser={setUser}/> } />
        <Route exact path="/login" element={<LoginPage onLogin={onLogin} user={user}/>} />
        <Route path ="profile/decks/:id" element={<DeckDisplay currentDeck={currentDeck}/>}/>
        <Route path ="profile/decks/:id/edit" element={<EditDeckForm currentDeck={currentDeck} subjects={subjects} user={user}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;