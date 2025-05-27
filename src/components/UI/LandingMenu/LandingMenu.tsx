import { useUIStore } from "../../../lib/zustandstores/uiStore";
import "./LandingMenu.css";

const Landing = () => {
  const { setIsInLandingMenu } = useUIStore();

  return (
    <main className="landing-page bg-img">
      <div className="menu-container fade-in">
        <hgroup>
          <h2 className="welcome-text">Welcome to CS105 project</h2>
          <h1 className="main-title">Modern Car Showroom</h1>
          <h2 className="sub-title">Made by group 2 - PKLL</h2>
        </hgroup>
        <button className="ui-btn" onClick={() => setIsInLandingMenu(false)}>
          Enter
        </button>
      </div>
    </main>
  );
};

export default Landing;
