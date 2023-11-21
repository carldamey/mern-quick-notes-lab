import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

export default function AuthPage({setUser}) {
	let [showLogin, setShowLogin] = useState(false)
	return (
		<main>
			<h1>Auth Page</h1>
			{showLogin ? 
			<SignUpForm setUser={setUser} />
			:
			<LoginForm setUser={setUser}/>}

		<button onClick={() => setShowLogin(!showLogin)}>{!showLogin ? "Sign Up Instead" : "Log In Instead"}</button>
		</main>
	)
}
