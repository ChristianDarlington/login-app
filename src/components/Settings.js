import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";


//Components
import DarkMode from "./themes/DarkMode";
import AccentColor from "./themes/AccentColor";
import FontSize from "./themes/FontSize";

function Settings() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)
  const {isDarkMode} = useContext(UserContext)
  const {toggleDarkMode} = useContext(UserContext)
  const {updateAccentColor} = useContext(UserContext)
  const {accentColor} = useContext(UserContext)
  const {updateFontPercentage} = useContext(UserContext)
  const {fontPercentage} = useContext(UserContext)

  // If the user isn't logged in navigate them to signin route
  useEffect(() => {
    if (user === null) {
      navigate('/signin', { replace: true });
    }
  })

  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>Preferences</h1>
        <DarkMode
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode} />
        <AccentColor
          accentColor={accentColor}
          updateAccentColor={updateAccentColor} />
        <FontSize
          accentColor={accentColor}
          fontPercentage={fontPercentage}
          updateFontPercentage={updateFontPercentage} />
      </div>
    </div>
  );
}

export default Settings;