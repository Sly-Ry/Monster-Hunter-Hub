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
                <span className="postText">Check out Grimace!</span>
                <img className="postImg" src="assets/post/m1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBLeft">
                    <img className="likeIcon" src="assets/paw.png" alt="" />
                    <img className="BBQIcon" src="assets/BBQ.webp" alt="" />
                    <span className="postLikeCounter">12 likes</span>
                    
                </div>
                <div className="postBRight">
                    <span className="postCommentText">2 Comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

