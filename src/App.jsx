import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './store/AuthSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })

      .then(res => res.json())
      .then(data => dispatch(loginSuccess({ token, user: data.body })))
      .catch(err => console.log(err))
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App