import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../mockData"
import { useState } from "react"

export default function Post({ post }) {
    const [like, setlike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setlike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTLeft">
                    <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
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
                    <img className="likeIcon" src="assets/paw.png" onClick={likeHandler} alt="" />
                    <img className="BBQIcon" src="assets/BBQ.webp" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

