import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const handleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };
  return (
    <div>
      <p>Insert your username</p>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button className="btnLogin" onClick={() => handleLogin(userInput)}>
          Access with your name
        </button>
      </form>
    </div>
  );
};

export default GetUserComponent;
