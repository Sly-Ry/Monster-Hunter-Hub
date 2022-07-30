import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Navbar() {
    return (
        <div className="navContainer">
            <div className="navLeft">
                <span className="logo">MHH</span>
            </div>
            <div className="navCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" type="text" className="searchInput" />
                </div>
            </div>
            <div className="navRight">
                <div className="navLinks">
                    <span className="nav-Link">Homepage</span>
                    <span className="nav-Link">Timeline</span>
                </div>
                <div className="navIcons">
                    <div className="navIconItem">
                        <Person className="personIcon"/>
                        <span className="navIconBadge">1</span>
                    </div>
                    <div className="navIconItem">
                        <Chat className="chatIcon"/>
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navIconItem">
                        <Notifications className="notificationIcon"/>
                        <span className="navIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpg" alt="" className="navImage" />
            </div>
        </div>
    );
}

