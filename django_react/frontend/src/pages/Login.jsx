import Form from "../components/Form";
import Register from "./Register"; 
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Form route="/api/token/" method="login" />
      <br />
      <div style={{ marginLeft: "60%", color: "blue" }}>
        <h4>Haven`t you Registred in yet ?</h4>
        <h3
          style={{
            backgroundColor: "green",
            color: "white",
            width: "11em",
            height: "2.4em",
            fontSize: "1.2em",
            borderRadius: "0.5em",
            textAlign:"center",
            alignItems:"center",
            alignContent:"center"
          }}
        ><Link style={{color:"white"}} to={"/register"}>
          Sign Up For Free
          </Link>
        </h3>
      </div>
    </>
  );
}

export default Login;

// Yes, you are correct! The Login.jsx component is designed to collect user login credentials through the Form.jsx component and send those credentials to the specified login API. Here’s a detailed breakdown of how this process works:
