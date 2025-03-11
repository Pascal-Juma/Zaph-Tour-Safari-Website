import './Pallate.css'

function Pallate({photo, safari, likes, likesa, likesb, likesc, likesd, city, gps, gpsa,awareness, pricing, offer, cta}) {
  return (
    <>
      <div className="pallate-container">
        <div className="pallate-photo">
            <img src={photo} alt="photo" />
        </div>
        <div className="pallate-safari">
            <h1 className="pallate-type">{safari} <span className="pallate-likes">{likes} {likesa} {likesb} {likesc} {likesd}</span></h1>
        </div>
        <div className="pallate-city">
            {city}
        </div>
        <div className="pallate-gps">
            {gps} {gpsa}
        </div>
        <div className="pallate-awareness">
            {awareness}
        </div>
        <div className="pallate-pricing">
            {pricing}<span className="pallate-offer">{offer}</span> <span className="pallate-cta"><a href="#" rel="noreferrer noopener">{cta}</a></span>
        </div>
      </div>
    </>
  )
}

export default Pallate
