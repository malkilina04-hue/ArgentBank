const FeatureItem = ({ icon, alt, title, text }) => (
    <div className="feature-item">
        <img src={icon} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
    </div>
)

export default FeatureItem