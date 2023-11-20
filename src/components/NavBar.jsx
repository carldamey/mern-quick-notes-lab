import { Link } from "react-router-dom"

export default function NavBar({user}) {
    return(
        <nav>
            { user ? <span>Welcome, {user.name}! | </span> : <span></span>}
            <Link to="/orders">Order History</Link>
            &nbsp;   |   &nbsp;
            <Link to="/orders/new">Place An Order</Link>
        </nav>
    )
}