import './Platter.css'
import ReactPlayer from 'react-player'

function Platter({video, trends, extend}) {
  return (
    <>
      <div className="platter-container">
        <div className="platter-media">
            <ReactPlayer url={video} controls={true} playing={true} muted={true} loop={true} width="37rem" height="37rem" />
        </div>
        <div className="platter-trends">
            <p className="platter-paragraph"><a href="#" rel="noreferrer noopener">{trends}</a></p>
        </div>
        <div className="platter-extend">
            <p className="extend-link"><a href="#" rel="noreferrer noopener" >{extend}</a></p>
        </div>
      </div>
    </>
  )
}

export default Platter
