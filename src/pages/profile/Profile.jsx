import "./profile.css"
import Navbar from "../../components/nav/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
      <Navbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/m3.jpg" alt="" />
              <img src="assets/person/3.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">Ryan W</h4>
              <span className="profileInfoDesc">
                Sup homies
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
