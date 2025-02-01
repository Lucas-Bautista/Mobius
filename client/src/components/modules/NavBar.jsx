import "./NavBar.css"
import MobiusStrip from "../../../dist/assets/mobiusplaceholder.png";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className = "navbar-mobius">
            <div onClick={()=>{navigate("/home")}} className = 'name-navbar'>
                Mobius   
            </div>
            <div>
            <img className = "navbar-icon" src = {MobiusStrip} alt = "Mobius strip"></img>
            </div>
            
            <div onClick={()=>{navigate("/myrides")}} className = 'rides-navbar'>Your rides</div>
            <div onClick={()=>{navigate("/profile")}} className = 'profile-navbar'>Profile</div>
        </div>
        </>

    )
}

export default NavBar;