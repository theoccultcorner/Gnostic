import "./index.css";

 
import { useNavigate } from "react-router-dom";

const Logo = ({ ml, type = "anchor" }) => {
  const navigate = useNavigate();
  return (
    <p
      id="dummygram-logo"
      style={{ marginLeft: ml ? ml : "10px" }}
      onClick={() => {
        if (type === "anchor") {
          if (
            !location.href.includes("login") &&
            !location.href.includes("signup")
          ) {
            navigate("/");
          }
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
       
      TheGnosticChristian
    </p>
  );
};

export default Logo;
