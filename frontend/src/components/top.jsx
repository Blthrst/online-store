import { Link } from 'react-router-dom'
import '../styles/Top.css'

export function Top() {
    return (
        <div className='top'>
            <nav>
                <div>
                <Link to="/">Home</Link>
                <Link to="/board">Shop</Link>
                <Link to="/editor">Editor</Link>
                <Link to="/cart">My Cart</Link>
                </div>
                <div>
                    <Link to="signin">Logout</Link>
                </div>
            </nav>
        </div>
    )
}