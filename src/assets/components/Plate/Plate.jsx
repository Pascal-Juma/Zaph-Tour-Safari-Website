import './Plate.css'

function Plate({destiny, rate, ratea, rateb, ratec, rated, individual, sum, person, group, total, groups, description, booking, image} ) {
  return (
    <>
    <div className="plate-container">
            <p className="plate-place">{destiny}</p>
            <p className="plate-rate">{rate}{ratea}{rateb}{ratec}{rated}</p>
            <p className="plate-individual">
                {individual} <span  className="individual-payment">{sum}</span> {person}
            </p>
            <p className="plate-group">
                {group} <span className="group-payment">{total}</span> {groups}
            </p>
            <p className="plate-description">
                    {description}
                </p>
            <p className="plate-link"><a href="#" rel="noreferrer noopener">
                {booking}</a>
            </p>
            <div className="plate-image">
                <img src={image} alt="image" />
            </div>
    </div>
    </>
  )
}

export default Plate
