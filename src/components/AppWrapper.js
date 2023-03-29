import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import "../styles/AppWrapper.css";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>NepChat</h1>
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          {/* Add the 'sign-out-button' class name to the button element */}
          <button className="sign-out-button" onClick={signUserOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
