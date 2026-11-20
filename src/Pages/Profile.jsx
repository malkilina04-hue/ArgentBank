import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccountCard from '../components/AccountCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUser } from '../store/AuthSlice'


const Profile = () => {
    const { user, isLoggedIn } = useSelector((state) => state.auth) //// Récupération des informations de l'utilisateur depuis le store Redux
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [userName, setUserName] = useState('')

useEffect(() => {
if (!isLoggedIn) navigate('/login')
}, [isLoggedIn, navigate])

    const handleSave = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
})
    const data = await response.json()
    if (data.status === 200) {
    dispatch(setUser({ ...user, userName: data.body.userName }))
    setIsEditing(false)
}
}

return (
    <>
    <Navbar />
    <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{user?.userName || user?.firstName || ''} {!user?.userName ? user?.lastName || '' : ''}!</h1>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button className="save-button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            ) : (
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                    Edit Name
                </button>
            )}
        </div>
        <h2 className="sr-only">Accounts</h2>
                <AccountCard title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        <AccountCard title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <AccountCard title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
        <Footer />
    </>
    )
}

export default Profile