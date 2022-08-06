import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUsername">Ben Dova</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postContainer"></div>
            </div>
            <div className="postBottom"></div>
        </div>

    </div>
  )
}

