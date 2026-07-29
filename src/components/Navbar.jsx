import logo from '../assets/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/AuthSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
    dispatch(logout())
    navigate('/')
}

return (
    <nav className="main-nav">
        <a className="main-nav-logo" href="/">
        <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
        {isLoggedIn ? (
            <>
            <a className="main-nav-item" href="/profile">
            <i className="fa fa-user-circle"></i>
            Tony
            </a>
            <a className="main-nav-item" onClick={handleLogout} href="#">
                <i className="fa fa-sign-out"></i>
                Sign Out
            </a>
            </>
        ) : (
        <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
            </a>
        )}
        </div>
    </nav>
    )
}

export default Navbar