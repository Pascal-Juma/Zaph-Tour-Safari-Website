import './Button.css'

function Button(props) {
  return (
    <>
      <button type="submit" className="btn">{props.btn}</button>
    </>
  )
}

export default Button
