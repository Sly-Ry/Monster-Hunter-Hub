import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post({post}) {
    console.log(post)
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUsername">Ben Dova</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.text}</span>
                <img className="postImg" src={post?.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBLeft">
                    <img className="likeIcon" src="assets/paw.png" alt="" />
                    <img className="BBQIcon" src="assets/BBQ.webp" alt="" />
                    <span className="postLikeCounter">{post.like} likes</span>
                    
                </div>
                <div className="postBRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

