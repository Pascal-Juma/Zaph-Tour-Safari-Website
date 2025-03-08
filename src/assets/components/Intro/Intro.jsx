import './Intro.css'

function Intro(props) {
  return (
    <>
      <div className="introduction">
        <div className="intro-title">
            <h1 className="title-ref">{props.title}</h1>
        </div>
        <div className="intro-text">
            <h2 className="text-ref">{props.text}</h2>
        </div>
      </div>
    </>
  )
}

export default Intro
