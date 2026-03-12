
import profilePic from "../assets/profile-pic.jpg"

export default function ProfilePic() {
    return (
        <header>
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        </header>
    )
}