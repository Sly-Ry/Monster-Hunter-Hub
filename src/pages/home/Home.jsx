import "./home.css"
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/nav/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    );       
}