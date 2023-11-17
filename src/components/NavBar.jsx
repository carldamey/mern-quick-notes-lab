import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp;   |   &nbsp;
            <Link to="/orders/new">Place An Order</Link>
        </nav>
    )
}