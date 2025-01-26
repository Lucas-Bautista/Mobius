import "./NavBar.css"
import MobiusStrip from "../../../dist/assets/mobiusplaceholder.png";

const NavBar = () => {
    return (
        <>
        <div className = "navbar-mobius">
            <div className = 'name-navbar'>Mobius</div>
            <img className = "navbar-icon" src = {MobiusStrip} alt = "Mobius strip"></img>
            <div className = 'rides-navbar'>Your rides</div>
            <div className = 'profile-navbar'>Profile</div>
        </div>
        </>

    )
}

export default NavBar;