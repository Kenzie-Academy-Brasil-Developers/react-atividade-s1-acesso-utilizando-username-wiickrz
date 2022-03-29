import "./style.css";

const WelcomePage = ({ user, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <p> Welcome, you're logged in as {user} </p>
      <button className="btnLogout" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
export default WelcomePage;
