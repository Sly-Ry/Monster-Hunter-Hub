import "./sidebar.css"
import { RssFeed } from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">feed</span>
          </li>
        </ul>
        <button className="sidebarBtn">
          showmore
        </button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpg" alt="" />
            <span className="sidebarFriendName">Jane Ho</span>
          </li>
        </ul>
      </div>
    </div>
  )
}


