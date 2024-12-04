
import Form from "../components/Form";

function Login() {
  return <Form route = "/api/token/" method="login"/>
}

export default Login;


// Yes, you are correct! The Login.jsx component is designed to collect user login credentials through the Form.jsx component and send those credentials to the specified login API. Here’s a detailed breakdown of how this process works: