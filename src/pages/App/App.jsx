import {useState} from "react"
import NotesPage from "../NotesPage/NotesPage"
import AuthPage from "../AuthPage/AuthPage"
import {Routes, Route} from "react-router-dom"
import NavBar from "../../components/NavBar"
import {getUser} from "../../utilities/users-service"
import "./App.css"

export default function App() {
	const [user, setUser] = useState(getUser())

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						<Route path="/notes" element={<NotesPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}
