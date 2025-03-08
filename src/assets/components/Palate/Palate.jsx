import './Palate.css'

function Palate({img, name, description, comments}) {
  return (
    <>
      <div className="testimonial-card">
                <div className="card-top">
                    <div className="card-image">
                        <img src={img} alt="img" />
                    </div>
                    <div className="card-details">
                        <p className="tourist-name">
                            {name}
                        </p>
                        <p className="tourist-description">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="card-below">
                    <p className="tourist-comments">
                        {comments}
                    </p>
                </div>
            </div>
    </>
  )
}

export default Palate
