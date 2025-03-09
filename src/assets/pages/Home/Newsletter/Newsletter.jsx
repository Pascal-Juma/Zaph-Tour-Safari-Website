import './Newsletter.css'
import Button from '../../../components/Button/Button'

function Newsletter() {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-title">
            <h1 className="newsletter-heading"> Newsletter Sign up Template</h1>
        </div>
        <div className="newsletter-description">
            <p className="newsletter-paragragh">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veniam architecto quaerat iusto vitae, reiciendis nobis atque dolores ipsam, minima rem ipsum in beatae accusamus?
            </p>
        </div>
        <div className="newsletter-form">
            <div className="newsletter-input">
                <input type="email" placeholder="Enter your email address" className="newsletter-email"/>
            </div>
            <div className="newletter-btn">
                <Button btn="Subscribe Now" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
