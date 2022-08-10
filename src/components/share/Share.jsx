import "./share.css"
import { Wallpaper, EmojiNature, Flare, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
                <input 
                    placeholder="What's on your mind?" className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Wallpaper htmlColor="maroon" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <EmojiNature htmlColor="darkslategrey" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Flare htmlColor="darkolivegreen" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="darkgoldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Emoji</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </div>
    </div>
  )
}
