import {Link} from "react-router-dom"
import * as usersService from "../utilities/users-service"

export default function NavBar({user, setUser}) {
	function handleLogout() {
		usersService.logout()
		setUser(null)
	}
	return (
		<nav>
			{user ? <span>Welcome, {user.name}! | </span> : <span></span>}
			<Link to="/orders">Order History</Link>
			&nbsp; | &nbsp;
			<Link to="/orders/new">Place An Order</Link>
			&nbsp; | &nbsp;
			<Link to="" onClick={handleLogout}>
				Log Out
			</Link>
		</nav>
	)
}
