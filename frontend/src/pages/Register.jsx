
import { Link } from "react-router-dom"
import Form from "../components/Form"
import Login from "./Login"

function Register() {
  return ( 
    <>
  <Form route="/api/user/register/"  method="register"/>
    <br />
<div style={{ marginLeft: "60%", color: "blue" }}>
  <h4>i have an account continue to login...</h4>
  <h3 style={{
            backgroundColor: "green",
            color: "white",
            width: "11em",
            height: "2.4em",
            fontSize: "1.2em",
            borderRadius: "0.5em",
            textAlign:"center",
            alignItems:"center",
            alignContent:"center"
          }}><Link style={{color:"white"}} to={"/login"}>Continue to login:</Link></h3>
  </div>          

  </>
  )

}


export default Register



