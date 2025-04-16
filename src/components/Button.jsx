import "./Button.css"
 

const Button = ({ label, url }) => {
  return (
    <>
      <a href={url} target="_blank">
        <button>{label}</button>
      </a>
    </>
  )

}
export default Button 