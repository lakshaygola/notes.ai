import "../../styles/header.css";
import { useLocation } from "react-router-dom";
import notesai_transparent_bg from "../../Media/notesai_transparent_bg.png";
import { FaRegUser, FaInfo } from "react-icons/fa";

export const Header = function () {

    const location = useLocation();
    const path = location.pathname;

    const isHome = path === "/" || path === "/home";

    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={notesai_transparent_bg} alt="" srcset="" />
            </div>
            {(isHome && (
                <div className="detail-container">
                    <FaInfo className="info-icon"/>
                    <FaRegUser className="profile-icon"/>
                </div>
            ))}
        </div>
    );
}

export default Header;