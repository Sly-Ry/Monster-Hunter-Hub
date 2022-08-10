import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="rightbarContainer">
                    <img src="assets/birthday.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Dwaynee Boy</b> and <b>43 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendsList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Dwaynee Boy</span>
                    </li>
                </ul>
            </div>
        </div>
    ); 
}

