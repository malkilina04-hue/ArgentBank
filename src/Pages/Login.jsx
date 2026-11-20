import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../store/AuthSlice'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('') // message d'erreur à afficher
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // j'efface le message d'erreur précédent
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (data.status === 200) {
    const token = data.body.token
    const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    })
    const profileData = await profileResponse.json()
    dispatch(loginSuccess({ token, user: profileData.body }))
    navigate('/profile')
    } else {
            setError('Invalid email or password') // email ou mot de passe faux
}
    } catch (error) {
        console.error(error)
        setError('Server not responding') // le serveur ne répond pas
    }
}

return (
    <>
    <Navbar />
    <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p className="error-message">{error}</p>} 
            <button className="sign-in-button" type="submit">Sign In</button>
            </form>
        </section>
        </main>
        <Footer />
    </>
    )
}

export default Login