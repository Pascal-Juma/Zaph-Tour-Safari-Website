import './Handle.css'

function Handle(props) {
  return (
    <>
    <div className="handle-container">
        <p className="handle-info">{props.icon} {props.text}</p>
    </div>
    </>
  )
}

export default Handle
