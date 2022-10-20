import React from "react";
import users from "../../data/users";

export default function LoginCopy(props) {
  const [account, setAccount] = React.useState({ username: "", password: "" });

  // let [usernameError, setUsernameError] = React.useState("");
  // let [passwordError, setPasswordError] = React.useState("");

  // const handleChange = (event, property) => {
  //   const accountCopy = {
  //     ...account
  //   };

  //   accountCopy[property] = event.target.value;
  //   setAccount(accountCopy);

  //   validate(property);
  // };

  // const validate = (property) => {
  //   property === "username" ? validateUsername() : validatePassword();
  // };

  // const validateUsername = () => {
  //   if (account.username.includes(" ")) {
  //     setUsernameError("Username cannot contain a space");
  //   } else if (account.username.length < 9) {
  //     setUsernameError("Username should be greater than 8 chars");
  //   } else {
  //     setUsernameError("");
  //   }
  // };

  // const validatePassword = () => {
  //   if (account.password.length < 9) {
  //     setPasswordError("Password should be greater than 8 chars");
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  const handleLogin = () => {
    if (isValidUser(account.username, account.password)) {
      props.history.push("/home");
    }
  };

  const isValidUser = (username, password) => {
    return users.find(
      (user) => user.username === username && user.password === password
    );
  };

  return (
    <>
      <input
        id="username"
        name="username"
        value={account.username}
        // onChange={(event) => handleChange("username", event)}
      />
      {/* {usernameError} */}
      <input
        type="password"
        id="password"
        name="password"
        value={account.password}
        // onChange={(event) => handleChange("password", event)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
