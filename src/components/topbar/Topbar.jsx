import "./topbar.css"
import { Search } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar-Container">
            <div className="topbarLeft">
                <span className="logo">Gear</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search for friend, post or video" type="text" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                
            </div>
        </div>
    );
}

