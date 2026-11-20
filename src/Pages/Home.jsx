import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import iconChat from '../assets/icon-chat.webp'
import iconMoney from '../assets/icon-money.webp'
import iconSecurity from '../assets/icon-security.webp'
import FeatureItem from '../components/Feature'

const Home = () => {
    return (
    <>
    <Navbar />
    <main>
        <div className="hero">
            <section className="hero-content">
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
                <section className="features">
            <FeatureItem
                icon={iconChat}
                alt="Chat Icon"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                icon={iconMoney}
                alt="Money Icon"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                icon={iconSecurity}
                alt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
            />
        </section>
        </main>
        <Footer />
    </>
    )
}

export default Home