import './Card.css'

function Card({img, title, ratings, ratingsa, ratingsb, ratingsc,ratingsd, details, prices, payment, price, link}) {
return (
    <>
        <div className="destinations-container">
            <div className="destinations-content">
                <div className="destinations-image">
                    <img src={img} alt="Mt Kenya" />
                </div>
                <p className="destinations-title">{title}</p>
                <p className="destinations-ratings">{ratings}{ratingsa}{ratingsb}{ratingsc}{ratingsd}</p>
                <p className="destinations-details">
                    {details}
                </p>
                <p className="destinations-prices">
                {prices}<span className="destinations-payment">{payment}</span> {price}
                </p>
                <p className="destinations-link"><a href="#" rel="noreferrer noopener">
                {link}</a>
                </p>
                </div>
        </div>
        
    </>
)
}

export default Card
