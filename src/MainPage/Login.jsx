import { useState } from "react";

function Login({ login }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const authenticateUser = () => {
    if (user.username === "kabir" && user.password === "kabir@123") {
      login();
    } else {
      alert("Check the Credentials and Enter Proper Credentials");
    }
  };
  return (
    <div
      style={{
        width: "500px",
        boxShadow: "0 0 10px black",
        margin: "100px auto",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h2>Login form</h2>
      <div>
        <div style={{ margin: "20px" }}>
          <input
            type="text"
            placeholder="User Name"
            onChange={(event) => {
              setUser({
                ...user,
                username: event.target.value,
              });
            }}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setUser({
                ...user,
                password: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input type="button" value="Login" onClick={authenticateUser} />
        </div>
      </div>
    </div>
  );
}

export default Login;
