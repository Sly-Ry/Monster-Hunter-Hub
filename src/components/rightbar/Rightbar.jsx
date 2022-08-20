import "./rightbar.css"
import { Users } from "../../mockData"
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    
    const HomeRightbar = () => {
        return (
            <>
                <div className="rightbarContainer">
                    <img src="assets/birthday.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Dwaynee Boy</b> and <b>43 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendsList">
                    {Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightBar = () => {
        return (
            <>
            <h4 className="rightBarTitle">User Info</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From: </span>
                    <span className="rightbarInfoValue">Mexico City</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpg" alt="" className="rightbarFImg" />
                    <span className="rightbarFUserName">Ben Dova</span>
                </div>
            </div>
            </>
        );
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightBar />
            </div>
        </div>
    ); 
}

