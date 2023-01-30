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
import { fetchUser, userRemoved } from "./profile_components/usersSlice";
import { fetchDecks } from "./public_decks_components/publicDecksSlice";
import { fetchSubjects } from "./subject_components/subjectsSlice";
import { useDispatch, useSelector } from 'react-redux';
import SingleSubject from "./subject_components/SingleSubject";
import PublicDeckDisplay from "./deck_display_components/PublicDeckDisplay";

// sudo service postgresql start

function App() {

  const [user, setUser] = useState(null)
  const decks = useSelector(state => state.decks.entities)
  // const user = useSelector(state => state.user.entities)
  const subjects = useSelector(state => state.subjects.entities)
  const [currentDeck, setCurrentDeck] = useState({})
  const [currentSubject, setCurrentSubject] = useState({})
  const dispatch = useDispatch()



  useEffect(() => {
    // to users#show
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
      }
    })

    dispatch(fetchDecks())
    dispatch(fetchSubjects())
    dispatch(fetchUser())

  }, [])


  const onLogin = (userInfo) => {
    setUser(userInfo)
    dispatch(fetchUser())
  }

  const onLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    dispatch(userRemoved(user.id))
    setUser({})
  }


  return (

    <BrowserRouter>
      <Header />
      {user ? <Navigation onLogout={onLogout} /> : ""}

      <Routes>
        <Route exact path="/" element={user ? <WelcomePage onLogout={onLogout} user={user} /> : <LoginPage onLogin={onLogin} />} />
        <Route exact path="/subjects" element={<SubjectsContainer subjects={subjects} decks={decks} setCurrentSubject={setCurrentSubject} currentSubject={currentSubject} />} />
        <Route exact path="/profile" element={<Profile user={user} setUser={setUser} onLogout={onLogout} setCurrentDeck={setCurrentDeck} />} />
        <Route exact path="/create" element={<CreateDecks subjects={subjects} user={user} setUser={setUser} />} />
        <Route exact path="/login" element={<LoginPage onLogin={onLogin} user={user} />} />
        <Route path="profile/decks/:id" element={<DeckDisplay currentDeck={currentDeck} setUser={setUser} user={user}/>} />
        <Route path="study/:id" element={<DeckDisplay currentDeck={currentDeck} setUser={setUser} user={user} />} />
        <Route path="study/public/:id" element={<PublicDeckDisplay currentDeck={currentDeck} />} />
        <Route path="profile/decks/:id/edit" element={<EditDeckForm currentDeck={currentDeck} subjects={subjects} user={user} setUser={setUser} decks={decks} />} />
        <Route path="subjects/decks/:id" element={<SingleSubject decks={decks} setCurrentDeck={setCurrentDeck} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;