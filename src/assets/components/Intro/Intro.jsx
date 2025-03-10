import './Intro.css'

function Intro({title, text, color}) {
  let textRef;
  if(color === "black"){
    textRef = "black"
  }else if (color === "white"){
    textRef = "white"
  }
  return (
    <>
      <div className="introduction">
        <div className="intro-title">
            <h1 className="title-ref">{title}</h1>
        </div>
        <div className="intro-text">
            <h2 className={color}>{text}</h2>
        </div>
      </div>
    </>
  )
}

export default Intro
