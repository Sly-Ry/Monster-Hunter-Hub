import "./sidebar.css"
import { RssFeed } from "@material-ui/icons"
import { Users } from "../../mockData"
import Friend from "../friends/Friends"

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
        {Users.map(u => (
            <Friend key={u.id} user={u}/>
        ))}
        </ul>
      </div>
    </div>
  )
}


